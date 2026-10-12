import styles from "./Contact.module.css";
import SocialIcons from "../common/SocialIcons";
import { profileData } from "../../data/profile";

const { github, linkedin, email } = profileData.socialLinks;

const contacts = [
  { platform: "github", label: "GitHub", handle: "afuuuuf", href: github },
  {
    platform: "linkedin",
    label: "LinkedIn",
    handle: "Wan Afif",
    href: linkedin,
  },
  { platform: "email", label: "Email", handle: "wnafif02@gmail.com", href: email },
];

export default function Contact() {
  return (
    <section id="contact" className="container">
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.description}>
        If you would like to get in touch, please feel free to reach out via
        email or connect with me on LinkedIn.
      </p>
      <div className={styles.contactCards}>
        {contacts.map(({ platform, label, handle, href }) => (
          <a
            key={platform}
            href={href}
            className={styles.contactCard}
            aria-label={`${handle} on ${label}`}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            <span className={styles.icon}>
              <SocialIcons name={platform} />
            </span>
            <h3>{label}</h3>
            <p>{handle}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
