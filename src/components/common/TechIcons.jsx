import { useState } from "react";
import { FaJava, FaCss3Alt, FaReact } from "react-icons/fa6";
import {
  SiPython,
  SiJavascript,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFastapi,
  SiDbeaver,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";
import {
  BiLogoSpringBoot,
  BiLogoPostgresql,
  BiLogoHtml5,
} from "react-icons/bi";
import { profileData } from "../../data/profile";
import styles from "./TechIcons.module.css";

const { techStack } = profileData;

const icons = {
  Java: FaJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  "C++": SiCplusplus,
  HTML: BiLogoHtml5,
  CSS: FaCss3Alt,
  "React.js": FaReact,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  SpringBoot: BiLogoSpringBoot,
  FastAPI: SiFastapi,
  PostgreSQL: BiLogoPostgresql,
  DBeaver: SiDbeaver,
  Postman: SiPostman,
};

function Pill({ skill }) {
  const Icon = icons[skill];

  return (
    <span className={styles.pill}>
      {Icon ? <Icon aria-hidden="true" /> : null}
      {skill}
    </span>
  );
}

function MarqueeRow({ skills }) {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeGroup}>
          {skills.map((skill) => (
            <Pill key={skill} skill={skill} />
          ))}
        </div>
        <div className={styles.marqueeGroup} aria-hidden="true">
          {skills.map((skill) => (
            <Pill key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechIcons() {
  const categories = Object.keys(techStack);
  const [active, setActive] = useState(categories[0]);

  return (
    <div className={styles.techIcons}>
      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Tech stack categories"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            className={`${styles.tab} ${active === category ? styles.tabActive : ""}`}
            onClick={() => setActive(category)}
          >
            <span className={styles.tabDot} aria-hidden="true" />
            {category}
          </button>
        ))}
      </div>
      <div role="tabpanel">
        <MarqueeRow skills={techStack[active]} />
      </div>
    </div>
  );
}
