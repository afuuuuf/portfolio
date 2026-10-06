import { profileData } from "../../data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} {profileData.name}. All rights reserved.
    </footer>
  );
}
