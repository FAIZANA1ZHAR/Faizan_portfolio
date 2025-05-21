import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./projectmodal.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <Image
          priority
          src={imgSrc}
          alt={title}
          width={1000}
          height={500}
          style={{ objectFit: "contain" }}
          className={styles.modalImage}
        />

        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>
            {tech.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={styles.links}>
              <a href={code} target="_blank" rel="nofollow">
                <AiFillGithub size="2.8rem" />
                <span>Source Code</span>
              </a>
              <a href={projectLink} target="_blank" rel="nofollow">
                <AiOutlineExport size="2.8rem" />
                <span>Live Project</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return null;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
