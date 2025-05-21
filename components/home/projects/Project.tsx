import { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "./projects.module.scss";
import { ProjectModal } from "./ProjectModal";
import Image from "next/image";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <Image
            priority
            src={imgSrc}
            alt={title}
            width={500}
            height={500}
            style={{
              objectFit: "contain",
            }}
          />
          <motion.div
            className={styles.projectImageOverlay}
            animate={{ opacity: hovered ? 0.9 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.projectImageOverlayContent}>
              <AiOutlineExport size="4rem" />
            </div>
          </motion.div>
        </div>

        <div className={styles.projectCopy}>
          <div className={styles.projectTitle}>
            <h4>{title}</h4>
            <div className={styles.projectTitleLine} />

            <a href={code} target="_blank" rel="nofollow">
              <AiFillGithub size="2.8rem" />
            </a>
          </div>

          <div className={styles.projectTech}>{tech.join(" - ")}</div>

          <p className={styles.projectDescription}>
            {description}{" "}
            <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
          </p>
        </div>
      </motion.div>
    </>
  );
};
