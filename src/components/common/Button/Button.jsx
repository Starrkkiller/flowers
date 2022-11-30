import styles from "./Button.module.css";
import classnames from "classnames";

export const Button = ({
  children,
  type,
  className,
  prefix,
  postfix,
  color,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      {...props}
    >
      {prefix}
      {children}
      {postfix}
    </button>
  );
};
