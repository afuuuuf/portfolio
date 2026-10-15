import { profileData } from "../../data/profile";
import styles from "./About.module.css";
import TechIcons from "../common/TechIcons";

export default function About() {
  const { shortName, about } = profileData;

  return (
    <section id="about" className={`container ${styles.about}`}>
      <p className={styles.heading}>More About Me</p>
      <h1 className={styles.name}>I'm {shortName}</h1>

      {about.map((text, i) => (
        <p key={i}>{text}</p>
      ))}

      <TechIcons />
    </section>
  );
}
