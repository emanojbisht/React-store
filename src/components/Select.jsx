import styles from "./Select.module.css";
function Select({ value, selectSize }) {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(e) => selectSize(e.target.value)}
    >
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
    </select>
  );
}

export default Select;
