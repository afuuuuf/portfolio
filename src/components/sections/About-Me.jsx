import { profileData } from "../../data/profile";
import Button from "../common/Button";
import styles from "./About-Me.module.css";

export default function AboutMe() {
  const { about, highlights, location, socialLinks } = profileData;

  return (
    <section id="about" className={`container ${styles.about}`}>
      <h2 className={styles.heading}>Hi, I'm</h2>
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
