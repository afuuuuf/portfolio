import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const linkRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeLink = linkRefs.current[activeId];
    if (activeLink) {
      setIndicatorStyle({
        width: activeLink.offsetWidth,
        height: activeLink.offsetHeight,
        left: activeLink.offsetLeft,
        top: activeLink.offsetTop,
      });
    }
  }, [activeId]);

  return (
    <header className={styles.navbar}>
      <a href="#home" className={styles.logo}>
        Wan Afif
      </a>

      <nav className={styles.links}>
        <span className={styles.indicator} style={indicatorStyle} />
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            ref={(el) => (linkRefs.current[item.id] = el)}
            className={`${styles.link} ${activeId === item.id ? styles.active : ""}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
