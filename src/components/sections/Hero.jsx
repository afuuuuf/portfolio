import { profileData } from "../../data/profile";
import photo from "../../assets/images/afif.jpg";
import Button from "../common/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  const { name, role, tagline, socialLinks } = profileData;

  return (
    <section id="home" className={`container ${styles.hero}`}>
      <div>
        <p className={styles.eyebrow}>Hello, I'm</p>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.title}>{role}</h2>
        <p>{tagline}</p>

        <div className={styles.buttons}>
          <Button href={socialLinks.resume} download>
            Download Resume
          </Button>
          <Button href={socialLinks.github} variant="outline" external>
            GitHub
          </Button>
          <Button href={socialLinks.linkedin} variant="outline" external>
            LinkedIn
          </Button>
        </div>
      </div>

      <img src={photo} alt={`${name}'s portrait`} className={styles.photo} />
    </section>
  );
}
