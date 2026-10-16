import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import SocialIcons from "../common/SocialIcons";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const linkRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const activeLink = linkRefs.current[location.pathname];
    if (activeLink) {
      setIndicatorStyle({
        width: activeLink.offsetWidth,
        left: activeLink.offsetLeft,
        top: 0, // line anchored to top of the nav pill
      });
    }
  }, [location.pathname]);

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Wan Afif
      </Link>

      <nav className={styles.links}>
        <span className={styles.indicator} style={indicatorStyle} />
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            ref={(el) => (linkRefs.current[item.path] = el)}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/contact" className={styles.ctc}>
        Let's Connect
        <SocialIcons name="rightArrow" />
      </Link>
    </header>
  );
}
