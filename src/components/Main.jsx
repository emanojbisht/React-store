import Product from "./Product";
import styles from "./Main.module.css";
import Spinner from "../ui/Spinner";
import Cart from "./Cart";
import Modal from "./Modal";
import { useState } from "react";

function Main({ products, isLoading }) {
  const [productId, setProductId] = useState(1);
  const [currentSize, setCurrentSize] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  function addToCart(item) {
    const itemPresent = cartItem.find((pid) => {
      //checking if item is present
      if (pid.id === item.id) {
        //item is present
        if (pid.productSize == item.productSize) {
          //add quantity
          return true;
        }
        return false;
      }
      return false;
    });
    if (!itemPresent) {
      setCartItem((items) => [
        { ...item, qty: 1, cartId: new Date().toISOString() },
        ...items,
      ]);
    }
  }

  function removeFromCart(cartId) {
    setCartItem(cartItem.filter((item) => item.cartId !== cartId));
  }

  function emptyCart() {
    setCartItem([]);
  }

  function showInfoProducts(itemId, modalAppear) {
    if (modalAppear) {
      displayModal();
    }

    setProductId(+itemId);
  }
  function productCurrentSize(size) {
    setCurrentSize(size);
  }

  function displayModal() {
    setShowModal(!showModal);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.mainGrid}>
      <div className={styles.grid}>
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            showInfoProducts={showInfoProducts}
            id={product.id}
            addToCart={addToCart}
            productCurrentSize={productCurrentSize}
            productId={productId}
          />
        ))}
      </div>
      <div className={styles.cartDiv}>
        <Cart
          cartItem={cartItem}
          removeFromCart={removeFromCart}
          emptyCart={emptyCart}
        />
      </div>
      <Modal
        displayModal={displayModal}
        showModal={showModal}
        productId={productId}
        currentSize={currentSize}
        addToCart={addToCart}
      />
    </div>
  );
}

export default Main;
