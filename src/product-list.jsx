import ProductCard from "./product-cart";
import styles from "./app.module.css";

function ProductList(props){
    return(
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{props.title}</h2>
            <div className={styles.productList}>{props.children}</div>
        </section>
    );  
}

export default ProductList;