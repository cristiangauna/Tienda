import styles from "./product-cart.module.css";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

function ProductCard(props) {
//const [state, setState] = useState();
  const [count, setCount] = useState(0);

  function handleClick(text){
    console.log("click", text);
    props.setTotalProductsInCart((prevState) => prevState + 1);
    setCount(count + 1);
  }

  //function handleClickSinParametro(){
  //  handleClick("añadiendo");
  //}

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={props.image} alt={props.title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.description}</p>

        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>{props.price}</span>
            {props.mensaje && <span>{props.mensaje}</span>}
          </div>
        </div>

        <button
          className={styles.addButton}
          aria-label="Añadir al carrito"
          onClick={() => handleClick("añadiendo")}
        >
          <ShoppingCart size={20} />
          Añadir al carrito
        </button>
        {count > 0 && count <2 && <p>{count + " Añadido al carrito correctamente"}</p>}
        {count > 1 && <p>{count + " Añadidos al carrito correctamente"}</p>}
        <div>{props.esFavorito ? "❤️" : "🤍"}</div>
      </div>
    </article>
  );
}

export default ProductCard;

