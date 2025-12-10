import styles from "./header.module.css";
import { User, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

function Header(props) {
    const { cartCount } = props;
    return (  
            //<h1 style={{ color: "blue", background: "red" }}>Info store</h1>  
            //Doble llave por que una es para el portal
            //Y otra para crear un objeto
            //si pones una sola llave tratara de leer una expresion que no existe, como por ejemplo el numero 34
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <h1 className={styles.title}>Tienda!</h1>
                </div>

                <nav className={styles.nav}>
                    <a href="#" className={styles.navLink}>Inicio</a>
                    <a href="#" className={styles.navLink}>Productos</a>
                    <a href="#" className={styles.navLink}>Categorías</a>
                    <a href="#" className={styles.navLink}>Ofertas</a>
                </nav>

                <div className={styles.actions}>
                    <Link to="/login">
                        <button className={styles.iconButton} aria-label="Cuenta">
                            <User size={24} />
                            <span className={styles.iconLabel}>Cuenta</span>
                        </button>
                    </Link>    

                    <button className={styles.iconButton} aria-label="Lista de deseos">
                        <Heart size={24} />
                        <span className={styles.iconLabel}>Deseos</span>
                    </button>

                    <button className={styles.iconButton} aria-label="Carrito">
                        <div className={styles.cartIconWrapper}>
                            <ShoppingCart size={24} />
                            <span className={styles.cartBadge}>{cartCount}</span>
                        </div>
                        <span className={styles.iconLabel}>Carrito</span>
                    </button>
                </div>
            </div>
        </header>     
            
    );
}

export default Header;