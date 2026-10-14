import { profileData } from "../../data/profile";
import Button from "../common/Button";
import styles from "./About.module.css";

export default function About() {
  const { about, highlights, location, socialLinks } = profileData;

  return (
    <section id="about" className={`container ${styles.about}`}>
      <p className={styles.heading}>More About Me</p>
      <h1 className={styles.name}>{profileData.name}</h1>

      {about.map((text, i) => (
        <p key={i}>{text}</p>
      ))}

      <p>
        <strong>Location:</strong> {location}
      </p>

      <ul className={styles.tags}>
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
