import styles from "./Button.module.css";
function Button({
  onClick,
  children,
  textColor,
  backgroundColor,
  fontSize,
  paddingTopBottom,
  paddingRightLeft,
  borderRadius,
  fontWeight,
  width,
}) {
  const userStyles = {
    color: `${textColor}`,
    backgroundColor: `${backgroundColor}`,
    fontSize: `${fontSize}`,
    fontWeight: `${fontWeight}`,
    padding: `${paddingTopBottom} ${paddingRightLeft}`,
    borderRadius: `${borderRadius}`,
    width: `${width}`,
  };
  return (
    <button onClick={onClick} style={userStyles} className={styles.btn}>
      {children}
    </button>
  );
}

export default Button;
