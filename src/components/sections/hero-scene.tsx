'use client';

import { useEffect,useRef,useState } from 'react';
import { ArrowDown,ArrowUpRight,FileText,Pause,Play } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/data/personal-info';

function ArchitectureScene({ paused }: { paused: boolean }) {
  const host=useRef<HTMLDivElement>(null);
  const pausedRef=useRef(paused);
  const [unavailable,setUnavailable]=useState(false);
  useEffect(() => { pausedRef.current=paused; },[paused]);

  useEffect(() => {
    const container=host.current;
    if(!container) return;
    let cancelled=false;
    let dispose=() => { };
    let importTimeout: number|undefined;
    async function initialize(container: HTMLDivElement) {
      const moduleUrl='https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';
      const THREE=await Promise.race([
        import(/* webpackIgnore: true */ moduleUrl),
        new Promise((_,reject) => {
          importTimeout=window.setTimeout(() => reject(new Error('3D runtime unavailable')),8000);
        }),
      ]).finally(() => window.clearTimeout(importTimeout));
      if(cancelled) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer=new THREE.WebGLRenderer({ alpha: true,antialias: true });
      } catch {
        setUnavailable(true);
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));
      renderer.setClearColor(0x000000,0);
      container.appendChild(renderer.domElement);
      renderer.domElement.setAttribute('aria-hidden','true');
      const scene=new THREE.Scene();
      const camera=new THREE.PerspectiveCamera(35,1,0.1,100);
      camera.position.set(8,7,12);
      camera.lookAt(0,0,0);
      scene.add(new THREE.HemisphereLight(0xffffff,0x44665d,3));
      const light=new THREE.DirectionalLight(0xffffff,4);
      light.position.set(3,8,5);
      scene.add(light);
      const architecture=new THREE.Group();
      scene.add(architecture);
      const geometries: { dispose: () => void }[]=[];
      const materials: { dispose: () => void }[]=[];
      const teal=new THREE.MeshStandardMaterial({ color: 0x087f72,roughness: 0.35,metalness: 0.25 });
      const white=new THREE.MeshStandardMaterial({ color: 0xe7eeeb,roughness: 0.5,metalness: 0.1 });
      const coral=new THREE.MeshStandardMaterial({ color: 0xec745e,roughness: 0.4,metalness: 0.15 });
      const wire=new THREE.LineBasicMaterial({ color: 0x087f72,transparent: true,opacity: 0.45 });
      materials.push(teal,white,coral,wire);

      function box(width: number,height: number,depth: number,x: number,y: number,z: number,material: typeof teal) {
        const geometry=new THREE.BoxGeometry(width,height,depth);
        geometries.push(geometry);
        const mesh=new THREE.Mesh(geometry,material);
        mesh.position.set(x,y,z);
        architecture.add(mesh);
        const edges=new THREE.EdgesGeometry(geometry);
        geometries.push(edges);
        const outline=new THREE.LineSegments(edges,wire);
        outline.position.copy(mesh.position);
        architecture.add(outline);
        return mesh;
      }

      box(5.4,0.15,4.4,0,-1.55,0,white);
      box(4.3,0.15,3.5,0,-0.65,0,teal);
      box(3.1,0.15,2.6,0,0.35,0,white);
      const core=box(1.05,1.05,1.05,0,1.15,0,coral);
      const nodes=[[-1.55,-0.2,-0.95],[1.55,-0.2,-0.95],[-1.55,-0.2,0.95],[1.55,-0.2,0.95]];
      nodes.forEach(([x,y,z]) => {
        box(0.48,0.64,0.48,x,y,z,white);
        const points=[new THREE.Vector3(x,y+0.32,z),new THREE.Vector3(x,1.2,z),new THREE.Vector3(0,1.2,0)];
        const geometry=new THREE.BufferGeometry().setFromPoints(points);
        geometries.push(geometry);
        architecture.add(new THREE.Line(geometry,wire));
      });
      const target=new THREE.Vector2();
      const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
      let visible=true;
      let frame=0;
      let elapsed=0;
      let previous=0;
      const resize=new ResizeObserver(() => {
        const { width,height }=container.getBoundingClientRect();
        if(!width||!height) return;
        renderer.setSize(width,height);
        camera.aspect=width/height;
        camera.updateProjectionMatrix();
        const compact=width<900;
        architecture.position.x=compact? 0:3.5;
        architecture.position.y=compact? 0:0.6;
        architecture.scale.setScalar(compact? 1.25:0.95);
        camera.position.set(compact? 9:8,7,compact? 14:12);
        camera.lookAt(0,0,0);
      });
      resize.observe(container);
      const observer=new IntersectionObserver(([entry]) => { visible=entry.isIntersecting; });
      observer.observe(container);
      function pointer(event: PointerEvent) {
        const bounds=container!.getBoundingClientRect();
        target.set((event.clientX-bounds.left)/bounds.width-0.5,(event.clientY-bounds.top)/bounds.height-0.5);
      }
      function resetPointer() { target.set(0,0); }
      container.addEventListener('pointermove',pointer);
      container.addEventListener('pointerleave',resetPointer);
      function render(time: number) {
        frame=requestAnimationFrame(render);
        const delta=previous? Math.min((time-previous)/1000,0.05):0;
        previous=time;
        if(!visible||document.hidden) return;
        if(!pausedRef.current&&!reducedMotion.matches) {
          elapsed+=delta;
          architecture.rotation.y=Math.sin(elapsed*0.25)*0.2+target.x*0.3;
          architecture.rotation.x=target.y*0.08;
          core.position.y=1.15+Math.sin(elapsed*1.2)*0.12;
          core.rotation.y=elapsed*0.2;
        }
        renderer.render(scene,camera);
      }
      frame=requestAnimationFrame(render);
      dispose=() => {
        cancelAnimationFrame(frame);
        resize.disconnect();
        observer.disconnect();
        container.removeEventListener('pointermove',pointer);
        container.removeEventListener('pointerleave',resetPointer);
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
    }
    void initialize(container).catch(() => { if(!cancelled) setUnavailable(true); });
    return () => { cancelled=true; window.clearTimeout(importTimeout); dispose(); };
  },[]);

  return <div className="architecture-scene" ref={host}>{unavailable&&<div className="scene-fallback" aria-hidden="true"><span>AZURE</span><span>APPLIED AI</span><span>POWER PLATFORM</span></div>}</div>;
}

export default function HeroScene() {
  const [paused,setPaused]=useState(false);
  return (
    <section id="home" className="portfolio-hero">
      <ArchitectureScene paused={paused} />
      <div className="portfolio-container hero-content">
        <div className="hero-identity">
          <p className="eyebrow">AZURE / AI / POWER PLATFORM</p>
          <div className="portrait-label"><Image src="/faizanpic.jpg" alt="Faizan Azhar" width={56} height={56} priority /><span>Consultant. Engineer.<br />Problem solver.</span></div>
        </div>
        <div className="hero-copy">
          <h1>Faizan{' '}<br className="hero-name-break" /><span>Azhar.</span></h1>
          <p className="hero-role">{personalInfo.title}</p>
          <p className="hero-summary">{personalInfo.summary}</p>
          <div className="hero-actions">
            <a className="portfolio-button" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
            <a className="text-link" href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer"><FileText size={18} /> View resume</a>
          </div>
        </div>
        <div className="hero-bottom">
          <span>6+ years of enterprise delivery</span>
          <a href="#about" aria-label="Discover more about Faizan"><ArrowDown size={20} /></a>
          <div className="scene-caption"><span>Infrastructure. Intelligence. Impact.</span><button onClick={() => setPaused(!paused)} aria-label={paused? 'Play 3D animation':'Pause 3D animation'} title={paused? 'Play 3D animation':'Pause 3D animation'}>{paused? <Play size={16} />:<Pause size={16} />}</button></div>
        </div>
      </div>
    </section>
  );
}