import { useEffect } from "react";
import ProductCard from "../product-cart.jsx";
import Header from "../header.jsx";
import styles from "../app.module.css";
import ProductList from "../product-list.jsx";
import { useState } from "react";
import useFetchData from "../hooks/useFetchData.js";
import { BASE_URL } from "../constantes/api.js";
import { useQuery } from "@tanstack/react-query";
import { productsKeys } from "../queries/products.js";
import { getAllProducts } from "../services/products.js";
import { categoryKeys } from "../queries/categories.js";
import { getAllCategories } from "../services/categories.js";

function Home() {

    const [totalProductInCart, setTotalProductsInCart] = useState(0);
    //const [products, setProducts] = useState([]);
    //const { products, error, isLoading } = useFetchData();
    //const { data:products, error, isLoading } = useFetchData(`${BASE_URL}/products`);
    const { data: products, error: productsError, isPending: productsIsPending } = useQuery({ queryKey: productsKeys.getProducts(),
        queryFn:
            getAllProducts,
            });

    const { data: categories } = useQuery({ queryKey: categoryKeys.getCategories(), 
        queryFn:
            getAllCategories,
            });  


    return(  
        <div>
            <Header cartCount={totalProductInCart} />
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
        
                {productsIsPending && <p>Cargando...</p>}

                {!productsError && products?.length > 0 && (
                <ProductList title="DESTACADOS:">
                    {products.slice(24, 28).map((product) => (
                        <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.images[0]}
                        price={"$" + product.price + 999}
                        //mensaje={product.descuentoMensaje}
                        //esFavorito={product.esFavorito}
                        setTotalProductsInCart={setTotalProductsInCart}
                        />
                    ))}  
                </ProductList>        
                )}
                {productsError && <p>{productsError}</p>}
                

                
                {!productsError && products?.length > 0 && (
                <ProductList title="Podria Interesarte:">
                    {products.slice(20, 24).map((product) => (
                        <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.images[0]}
                        price={"$" + product.price + 999}
                        //mensaje={product.descuentoMensaje}
                        //esFavorito={product.esFavorito}//
                        setTotalProductsInCart={setTotalProductsInCart}
                        />
                    ))}
                </ProductList> 
                )}    
                {productsError && <p>{productsError}</p>}

                {/*{categories?.length > 0 && categories.map((category) => {
                    return <p key={category.id}>{category.name}</p>
                })}*/}

            </main>
        </div>
    )
}

export default Home;