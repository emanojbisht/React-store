import styles from "./CartItem.module.css";
import Button from "../ui/Button";

const collapsedNumWordsTitle = 30;
function CartItem({ title, size, price, cartId, removeFromCart }) {
  if (title.length > collapsedNumWordsTitle) {
    title = title.split("").slice(0, collapsedNumWordsTitle).join("") + "...";
  }
  return (
    <div className={styles.container}>
      <div className={styles.itemInfo}>
        <p className={styles.title}>{title}</p>
        <span>Size : {size}</span>
      </div>
      <div className={styles.priceButtonDiv}>
        <p className={styles.price}>{`$ ${price}`}</p>
        <Button
          textColor="white"
          backgroundColor="#40c057"
          fontSize="16px"
          fontWeight="600"
          borderRadius="10px"
          paddingTopBottom="10px"
          paddingRightLeft="20px"
          onClick={() => removeFromCart(cartId)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
