import { useState, useEffect } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div style={{background: "var(--background-dark)"}}>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}
      >
        <span className={styles.logo} onClick={() => {
          document.getElementById("header")?.scrollIntoView();
        }}>
          FA
        </span>
        <a
          href="#about"
          onClick={() => {
            setSelected("about");
            document.getElementById("about")?.scrollIntoView();
          }}
          className={selected === "about" ? styles.selected : ""}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => {
            setSelected("projects");
            document.getElementById("projects")?.scrollIntoView();
          }}
          className={selected === "projects" ? styles.selected : ""}
        >
          Projects
        </a>
        <a
          href="#experience"
          onClick={() => {
            setSelected("experience");
            document.getElementById("experience")?.scrollIntoView();
          }}
          className={selected === "experience" ? styles.selected : ""}
        >
          Experience
        </a>
        <a
          href="#contact"
          onClick={() => {
            setSelected("contact");
            document.getElementById("contact")?.scrollIntoView();
          }}
          className={selected === "contact" ? styles.selected : ""}
        >
          Contact
        </a>
      </motion.nav>
    </div>
  );
};
