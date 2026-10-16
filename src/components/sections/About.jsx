import { useEffect, useRef } from "react";
import { profileData } from "../../data/profile";
import { workExperience } from "../../data/work-experience";
import styles from "./About.module.css";
import TechIcons from "../common/TechIcons";
import TechIcon from "../common/TechIcon";
import { getImages } from "../../utils/file";

const PHOTO_SIZE = 44;

const logoFiles = import.meta.glob("../../assets/logos/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const logos = Object.fromEntries(
  Object.entries(logoFiles).map(([path, url]) => [path.split("/").pop(), url]),
);

export default function About() {
  const { shortName, image, about } = profileData;

  const rowsRef = useRef(null);
  const fillRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const section = rowsRef.current;
    let raf = 0;

    if (section && !reduceMotion) {
      const update = () => {
        raf = 0;
        const rect = section.getBoundingClientRect();
        const range = rect.height - window.innerHeight;
        const p = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 0;

        if (fillRef.current) {
          fillRef.current.style.transform = `scaleY(${p})`;
        }
        if (photoRef.current) {
          photoRef.current.style.transform = `translateY(${
            p * (rect.height - PHOTO_SIZE)
          }px)`;
        }
      };

      const request = () => {
        if (!raf) {
          raf = requestAnimationFrame(update);
        }
      };

      update();
      window.addEventListener("scroll", request, { passive: true });
      window.addEventListener("resize", request);

      return () => {
        window.removeEventListener("scroll", request);
        window.removeEventListener("resize", request);
        if (raf) {
          cancelAnimationFrame(raf);
        }
      };
    }
  }, []);

  return (
    <>
      <section id="about" className={`container ${styles.about}`}>
        <p className={styles.heading}>More About Me</p>
        <h1>I'm {shortName}</h1>

        {about.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <TechIcons />
      </section>

      <section id="work" className="container">
        <header className={styles.expHeader}>
          <p className={styles.eyebrow}>The Experience</p>
          <h2 className={styles.expTitle}>
            Experience That <em className={styles.expAccent}>Delivers</em>
          </h2>
        </header>

        <div className={styles.workExperiences} ref={rowsRef}>
          {workExperience.map((job) => (
            <article key={job.company} className={styles.workExperience}>
              <div className={styles.jobInformation}>
                <time className={styles.dates}>
                  {job.date_start} — {job.date_end}
                </time>
                <p className={styles.duration}>{job.duration}</p>
                <div className={styles.company}>
                  {logos[job.logo] && (
                    <img
                      src={logos[job.logo]}
                      alt={`${job.company} logo`}
                      className={styles.logo}
                    />
                  )}
                  <h3>{job.company}</h3>
                </div>
              </div>

              <div className={styles.indent} aria-hidden="true" />

              <div className={styles.jobDescription}>
                <h4 className={styles.role}>{job.position}</h4>
                <ul>
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className={styles.techStacks}>
                  <p className={styles.techStack}>Stack</p>
                  <div className={styles.techList}>
                    {job.techStack.map((text, i) => (
                      <p key={i} className={styles.techItem}>
                        <TechIcon name={text} />
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className={styles.spineWrap} aria-hidden="true">
            <div className={styles.spineTrack}>
              <div className={styles.spineFill} ref={fillRef} />
            </div>
            <div className={styles.spinePhoto} ref={photoRef}>
              <div className={styles.spinePhotoInner}>
                <img src={getImages(image)} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
