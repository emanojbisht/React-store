import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

import ModalContent from "../ui/ModalContent";
import Overlay from "../ui/Overlay";
function Modal({ displayModal, showModal, productId, currentSize, addToCart }) {
  return (
    <div className={styles.container}>
      {createPortal(
        <ModalContent
          displayModal={displayModal}
          showModal={showModal}
          productId={productId}
          currentSize={currentSize}
          addToCart={addToCart}
        />,
        document.getElementById("modal-root")
      )}
      {createPortal(
        <Overlay showModal={showModal} displayModal={displayModal} />,
        document.getElementById("modal-overlay")
      )}
    </div>
  );
}

export default Modal;
