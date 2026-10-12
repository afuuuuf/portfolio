import styles from "./ProjectShowcase.module.css";
import Carousel from "../common/Carousel";
import { projectData } from "../../data/project";
import { certsData } from "../../data/certs";

export default function ProjectShowcase() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.carousel}>
          <Carousel>
            {projectData.map((project) => (
              <article key={project.title} className={styles.card}>
                <img src={project.image} alt={`${project.title} screenshot`} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Certifications</h2>
        <div className={styles.carousel}>
          <Carousel>
            {certsData.map((cert) => (
              <article key={cert.title} className={styles.card}>
                <img src={cert.image} alt={`${cert.title} certificate`} />
                <h3>{cert.title}</h3>
                <p className={styles.issuer}>
                  {cert.issuer} · {cert.year}
                </p>
              </article>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
}
