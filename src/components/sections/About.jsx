import { profileData } from "../../data/profile";
import styles from "./About.module.css";

export default function About() {
  const { shortName, about, highlights, location } = profileData;

  return (
    <section id="about" className={`container ${styles.about}`}>
      <p className={styles.heading}>More About Me</p>
      <h1 className={styles.name}>I'm {shortName}</h1>

      {about.map((text, i) => (
        <p key={i}>{text}</p>
      ))}

      <ul className={styles.tags}>
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
