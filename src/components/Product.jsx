import { useState, useEffect } from "react";
import Button from "../ui/Button";
import styles from "./Product.module.css";
import Select from "./Select";

const collapsedNumWordsTitle = 40;
const collapsedNumWordsDesc = 80;
function Product({
  image,
  title,
  price,
  description,
  showInfoProducts,
  id,
  addToCart,
  productCurrentSize,
}) {
  const [productSize, setProductSize] = useState("S");
  if (title.length > collapsedNumWordsTitle) {
    title = title.split("").slice(0, collapsedNumWordsTitle).join("") + "...";
  }
  if (description.length > collapsedNumWordsDesc) {
    description =
      description.split("").slice(0, collapsedNumWordsDesc).join("") + "...";
  }

  function addingItemToCart() {
    const item = {
      id,
      title,
      productSize,
      price,
    };
    addToCart(item);
    setProductSize("S");
  }

  useEffect(
    function () {
      productCurrentSize(productSize);
      showInfoProducts(id);
    },
    [productSize]
  );

  return (
    <div
      className={styles.container}
      onClick={() => productCurrentSize(productSize)}
    >
      <div className={styles.imgDiv}>
        <img className={styles.img} src={image} alt={title} />
        <span className={styles.price}>{`$ ${price}`}</span>
      </div>
      <div className={styles.content}>
        <p className={styles.title} onClick={() => showInfoProducts(id, true)}>
          {title}
        </p>
        <p
          className={styles.description}
          onClick={() => showInfoProducts(id, true)}
        >
          {description}
        </p>
        <div className={styles.itemOp}>
          <Select value={productSize} selectSize={setProductSize} />
          <Button
            textColor="white"
            backgroundColor="#40c057"
            fontSize="16px"
            fontWeight="600"
            borderRadius="10px"
            paddingTopBottom="0px"
            paddingRightLeft="20px"
            onClick={addingItemToCart}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
