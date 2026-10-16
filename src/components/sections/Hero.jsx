import { profileData } from "../../data/profile";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import styles from "./Hero.module.css";
import SocialIcons from "../common/SocialIcons";
import Clock from "../common/Clock";
import { getImages } from "../../utils/file";

export default function Hero() {
  const { name, image, role, tagline, socialLinks, location, timeZone } =
    profileData;

  return (
    <section id="home" className={`container ${styles.hero}`}>
      <div>
        <p className={styles.eyebrow}>Hello, I'm</p>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.title}>{role}</h2>
        <p>{tagline}</p>

        <div className={styles.showcase}>
          <Link to="/about" className={styles.showcaseWork}>
            View My Work
            <SocialIcons name="rightArrow" />
          </Link>
          <Button href={socialLinks.resume} download>
            <SocialIcons name="download" />
            Resume
          </Button>
        </div>

        <div className={styles.iconButtons}>
          <Button href={socialLinks.github} variant="outline" external>
            <SocialIcons name="github" />
          </Button>
          <Button href={socialLinks.linkedin} variant="outline" external>
            <SocialIcons name="linkedin" />
          </Button>
        </div>
        <div className={styles.timeLocation}>
          <div className={styles.location}>
            <SocialIcons name="location" />
            {location}
          </div>
          <div className={styles.timeZone}>
            <Clock timeZone={timeZone} />
          </div>
        </div>
      </div>

      <img
        src={getImages(image)}
        alt={`${name}'s portrait`}
        className={styles.photo}
      />
    </section>
  );
}
