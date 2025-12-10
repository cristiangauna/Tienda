import styles from "./product-cart.module.css";
import { ShoppingCart, Heart } from "lucide-react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { CartContext } from "./app";

function ProductCard(props) {
//const [state, setState] = useState();
  const [count, setCount] = useState(0);
  const [cart, setCart] = useContext(CartContext)
  const [isFav, setIsFav] = useState(false);


  function handleClick(event, text){
    event.preventDefault();
    console.log("click", text);
    
    const newProduct = {
      title: props.title,
      price: props.price,
      img: props.image,
    };

    setCart((prevState) => {
      if (prevState) {
        return [...prevState, newProduct];
      } else {
        return [newProduct];
      }
    });
    
    console.log("cart", cart);
    //props.setTotalProductsInCart((prevState) => prevState + 1);
    setCount(count + 1);
  }

  

  function handleFavorite(event) {
    event.preventDefault();
    setIsFav(!isFav);
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
            {/*<div>{props.descuento ? "(20% DESCUENTO)" : ""}</div>*/}
            <div>
              {props.descuento ? <span className={styles.descuento}>(20% DESCUENTO)</span> : ""}
            </div>
            {props.mensaje && <span>{props.mensaje}</span>}
          </div>
        </div>

        <button
          className={styles.addButton}
          aria-label="Añadir al carrito"
          onClick={(event) => handleClick(event, "añadiendo")}
        >
          <ShoppingCart size={20} />
          Añadir al carrito
        </button>
        {count > 0 && count <2 && <h4 className={styles.añadido}> {count + " Añadido al carrito correctamente ✔️"}</h4>}
        {count > 1 && <h4 className={styles.añadido}> {count + " Añadidos al carrito correctamente ✔️"}</h4>}
        {/*<div>{props.esFavorito ? "❤️" : "🤍"}</div>*/}

        <button
          className={styles.favoriteButton}
          onClick={handleFavorite}
          aria-label="Marcar como favorito"
        >
          <Heart
            size={22}
            color={isFav ? "red" : "gray"}      
            fill={isFav ? "red" : "transparent"}
          />
        </button>

      </div>
    </article>
  );
}

export default ProductCard;

