import styles from "../ui/Overlay.module.css";
function Overlay({ displayModal, showModal }) {
  return (
    <div
      className={`${styles.overlay} ${showModal ? "" : "hidden"}`}
      onClick={displayModal}
    ></div>
  );
}

export default Overlay;
