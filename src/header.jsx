import styles from "./header.module.css";
import { User, Heart, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "./app";

function Header(props) {
    const [cart] = useContext(CartContext);
    //const { cartCount } = props;

    return (  
            //<h1 style={{ color: "blue", background: "red" }}>Info store</h1>  
            //Doble llave por que una es para el portal
            //Y otra para crear un objeto
            //si pones una sola llave tratara de leer una expresion que no existe, como por ejemplo el numero 34
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1 className={styles.title}>Tienda! 🛒</h1>
                </div>

                <nav className={styles.nav}>
                    <Link to="/inicio">
                    <a href="#" className={styles.navLink}>Inicio</a>
                    </Link>

                    <Link to="/productos">
                    <a href="#" className={styles.navLink}>Productos</a>
                    </Link>

                    <Link to="/categorias">
                    <a href="#" className={styles.navLink}>Categorías</a>
                    </Link>
                    
                    <Link to="/ofertas">
                    <a href="#" className={styles.navLink}>Ofertas</a>
                    </Link>
                </nav>

                <div className={styles.actions}>
                    <Link to="/cuenta">
                        <button className={styles.iconButton} aria-label="Cuenta">
                            <User size={24} />
                            <span className={styles.iconLabel}>Cuenta</span>
                        </button>
                    </Link>    

                    <Link to="/deseos">
                    <button className={styles.iconButton} aria-label="Lista de deseos">
                        <Heart size={24} />
                        <span className={styles.iconLabel}>Deseos</span>
                    </button>
                    </Link>

                    <Link to="/carrito">
                    <button className={styles.iconButton} aria-label="Carrito">
                        <div className={styles.cartIconWrapper}>
                            <ShoppingCart size={24} />
                            <span className={styles.cartBadge}>{cart ? cart.length : 0}</span>
                        </div>
                        <span className={styles.iconLabel}>Carrito</span>
                    </button>
                    </Link>
                </div>
            </div>
        </header>     
            
    );
}

export default Header;