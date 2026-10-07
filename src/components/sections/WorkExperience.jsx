import { workExperience } from "../../data/work-experience";
import styles from "./WorkExperience.module.css";

export default function WorkExperience() {
  return (
    <section id="work" className={`container ${styles.workExperience}`}>
      {workExperience.map((job) => (
        <div key={job.company} className={styles.workSection}>
          <div className={styles.workPosition}>
            <h3>{job.position}</h3>
            <p>{job.company}</p>
            <p>
              {job.date_start} - {job.date_end}
            </p>
          </div>
          <div className={styles.workDescription}>
            <ul>
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
