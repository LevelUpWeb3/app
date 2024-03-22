import styles from './styles.module.css'
import Link from "next/link";

const Button = ({ color = "primary", Component = Link, children, ...restProps }) => {
  // color?: "primary" | "secondary"

  return (
    <div className={`${styles['button-container']} ${styles[color]}`}>
      <Component {...restProps}>{children}</Component>
    </div>
  );
};

export default Button;
