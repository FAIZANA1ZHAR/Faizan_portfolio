import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              Hey! I&apos;m Faizan, and I&apos;m a Software Engineer with a Bachelor&apos;s degree in Computer Science.
              <br/><br/>
              I have over 7 years of experience in full-stack development, with expertise in both front-end and back-end technologies. I&apos;m dedicated to creating responsive, user-friendly applications that provide excellent user experiences.
             </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My skills include JavaScript, TypeScript, C#, .NET, React, Vue.js, and various other modern frameworks and libraries. 
              I&apos;ve also worked extensively with backend technologies like Node.js, .NET Core, and databases such as MongoDB, MySQL, and PostgreSQL.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I enjoy playing football. 
              I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer. 
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
