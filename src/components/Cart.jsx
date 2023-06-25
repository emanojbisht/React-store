import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
function Cart({ cartItem, removeFromCart, emptyCart }) {
  const [amt, setTotalAmt] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [inputCoupon, setInputCoupon] = useState("");
  const [totalBill, setToatlBill] = useState(0);
  const cartIsEmpty = cartItem.length === 0;

  useEffect(
    function () {
      const totalPrice = cartItem.reduce((acc, cur) => {
        return acc + +cur.price;
      }, 0);
      setToatlBill(+totalPrice);
      if (couponApplied) {
        setTotalAmt(() => {
          const discount = totalPrice * 0.2;
          return totalPrice - discount;
        });
      } else {
        setTotalAmt(+totalPrice);
      }

      if (cartItem.length === 0) {
        setCouponApplied(false);
      }
    },
    [cartItem, couponApplied]
  );

  function applyCouponcode() {
    if (inputCoupon.trim() === "DISCOUNT20") {
      // setTotalAmt((prevAmt) => {
      //   const discount = prevAmt * 0.2;
      //   return prevAmt - discount;
      // });
      setCouponApplied(true);
      setInputCoupon("");
    }
  }

  return (
    <>
      <h1 className={styles.heading}>Shopping Cart</h1>
      <p className={styles.itemCount}>{cartItem.length} items in Cart</p>
      <hr className={styles.hr} />
      {!cartIsEmpty &&
        cartItem.map((item) => (
          <CartItem
            key={item.cartId}
            title={item.title}
            size={item.productSize}
            price={item.price}
            cartId={item.cartId}
            removeFromCart={removeFromCart}
          />
        ))}
      {cartIsEmpty && (
        <p className={styles.cartEmpty}>🛒 Start Adding item to Cart.</p>
      )}
      <hr className={styles.hr} />
      {!cartIsEmpty && (
        <div>
          <div>
            <p className={styles.total}>Total:</p>
            <p className={styles.price}>$ {amt.toFixed(2)}</p>
          </div>
          <div className={styles.discountDIv}>
            {!couponApplied && (
              <p className={styles.useCoupon}>
                Use <span className={styles.useCouponCode}>DISCOUNT20</span> for
                20% OFF
              </p>
            )}
            {couponApplied && (
              <div>
                <p className={styles.originalPrice}>$ {totalBill.toFixed(2)}</p>
                <p className={styles.discountPer}>20% OFF</p>
                <p className={styles.couponCode}>
                  <span className={styles.couponName}>Discount20</span> is
                  applied
                </p>
              </div>
            )}
            <div className={styles.addCouponDiv}>
              <input
                value={inputCoupon}
                className={styles.input}
                type="text"
                placeholder="Enter your coupon code..."
                onChange={(e) => setInputCoupon(e.target.value)}
                disabled={couponApplied}
              />
              <Button
                textColor="white"
                backgroundColor="#40c057"
                fontSize="16px"
                fontWeight="600"
                borderRadius="10px"
                paddingTopBottom="10px"
                paddingRightLeft="20px"
                onClick={applyCouponcode}
              >
                Submit
              </Button>
            </div>
          </div>
          <Button
            textColor="white"
            backgroundColor="#40c057"
            fontSize="16px"
            fontWeight="600"
            borderRadius="10px"
            paddingTopBottom="10px"
            paddingRightLeft="20px"
            onClick={emptyCart}
          >
            Remove All
          </Button>
        </div>
      )}
    </>
  );
}

export default Cart;
