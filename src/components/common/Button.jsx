import styles from "./Button.module.css";

export default function Button({
  href,
  variant = "solid",
  external = false,
  download = false,
  children,
  ...rest
}) {
  const className = `${styles.button} ${
    variant === "outline" ? styles.outline : styles.solid
  }`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
