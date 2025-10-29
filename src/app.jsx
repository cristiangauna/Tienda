import ProductCard from "./product-cart.jsx";
import Header from "./header.jsx";
import styles from "./app.module.css";
import ProductList from "./product-list.jsx";
import { useState, useEffect } from "react";


const img = 
  "https://static.hendel.com/media/catalog/product/cache/ab24d029cc9f966c2786182ee79c35cb/5/4/54912_0_min.jpg"
const img2 = 
  "https://static.hendel.com/media/catalog/product/cache/ab24d029cc9f966c2786182ee79c35cb/5/4/54947_0_min.jpg"
const img3 = 
  "https://static.hendel.com/media/catalog/product/cache/ab24d029cc9f966c2786182ee79c35cb/5/4/54950_0_min.jpg"
const img4 = 
  "https://static.hendel.com/media/catalog/product/cache/ab24d029cc9f966c2786182ee79c35cb/5/4/54810_0_min.jpg"    


//function App() {
  //const [products, setProducts] = useState([]);

  //async function getProducts() {
    //const response = await fetch("https://api.escuelajs.co/api/v1/products");
    //const data = await response.json();
    //setProducts(data);
  //}

  //useEffect(() => {
    //getProducts();
  //}, []);

  //console.log(products);
  

const products = [
  {
    id: 1,
    title: "Notebook",
    description: "Windows 11",
    price: 707.999,
    image: img,
    descuentoMensaje: "  Descuento",
  },
  {
    id: 2,
    title: "Parlante",
    description: "Torre de sonido",
    price: 349.999,
    image: img2,
    esFavorito: true,
  },
  {
    id: 3,
    title: "Smart Tv",
    description: "Led",
    price: 328.999,
    image: img3,
  },
  {
    id: 4,
    title: "Lavarropas",
    description: "Carga Superior",
    price: 289.999,
    image: img4,
    descuentoMensaje: "  Descuento",
  },
];


// App en JSX

function App() {
  return (
  <div>
    <Header/>
    <main className={styles.main}>
      {/*<section className={styles.section}>
        <h2 className={styles.sectionTitle}>Productos Destacados</h2>
        <div className={styles.productList}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </section>*/}
      <ProductList title="Productos mas vendidos">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={"$" + product.price}
              mensaje={product.descuentoMensaje}
              esFavorito={product.esFavorito}
            />
          ))}
      </ProductList>  
      <ProductList title="Productos deseados">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={"$" + product.price}
              mensaje={product.descuentoMensaje}
              esFavorito={product.esFavorito}
            />
          ))}
      </ProductList>   
    </main>
  </div>
  );
}

export default App;
