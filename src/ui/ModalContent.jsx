import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./ModalContent.module.css";
import Spinner from "./Spinner";

function ModalContent({
  displayModal,
  showModal,
  productId,
  currentSize,
  addToCart,
}) {
  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function addingItemToCart() {
    const item = {
      id: productInfo.id,
      title: productInfo.title,
      productSize: currentSize,
      price: productInfo.price,
    };
    addToCart(item);
    displayModal();
  }

  useEffect(
    function () {
      async function getProduct() {
        try {
          setIsLoading(true);
          if (productId === 0) return;
          const res = await fetch(
            `https://fakestoreapi.com/products/${productId}`
          );
          const data = await res.json();
          setProductInfo(data);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
      getProduct();
    },
    [productId]
  );
  return (
    <div className={`${styles.modal} ${showModal ? "" : "hidden"}`}>
      <button className={styles.closeModal} onClick={displayModal}>
        &times;
      </button>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className={styles.container}>
          <div className={styles.imgDiv}>
            <img className={styles.img} src={productInfo.image} alt="" />
          </div>
          <div>
            <span className={styles.category}>{productInfo.category}</span>
            <p className={styles.title}>{productInfo.title}</p>
            <p className={styles.description}>{productInfo.description}</p>
            <div className={styles.sizePrice}>
              <p className={styles.currentSize}>
                <span className={styles.currentSizeText}>Size : </span>
                {currentSize}
              </p>
              <p className={styles.price}>{`$ ${productInfo.price}`}</p>
            </div>
            <Button
              textColor="white"
              backgroundColor="#40c057"
              fontSize="16px"
              fontWeight="600"
              borderRadius="10px"
              paddingTopBottom="20px"
              paddingRightLeft="20px"
              width="100%"
              onClick={addingItemToCart}
            >
              Add to cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalContent;
