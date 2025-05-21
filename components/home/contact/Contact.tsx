import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have a project idea or job opportunity? Send me an email! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/faizanazhar"
              target="_blank"
              rel="nofollow"
            >
              LinkedIn
            </Link>{" "}
            if that&apos;s more convenient for you.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:faizan.azhar@example.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>Send Email</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
