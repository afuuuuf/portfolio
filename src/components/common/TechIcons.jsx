import { useState } from "react";
import { profileData } from "../../data/profile";
import TechIcon from "./TechIcon";
import styles from "./TechIcons.module.css";

const { techStack } = profileData;

function Pill({ skill }) {
  return (
    <span className={styles.pill}>
      <TechIcon name={skill} />
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
