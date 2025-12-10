//import ProductCard from "./product-cart.jsx";
//import Header from "./header.jsx";
//import styles from "./app.module.css";
//import ProductList from "./product-list.jsx";
//import { useState, useEffect } from "react";
//import useFetchData from "./hooks/useFetchData.js";
//import { BASE_URL } from "./constantes/api.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  Home  from "./screens/home";
import  Login  from "./screens/login";
import {createContext, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router"
import { Link } from "react-router";
import ProductDetail from "./screens/product-detail";


const queryClient = new QueryClient();

export const CartContext = createContext();


//const img = 
  //"https://static.hendel.com/media/catalog/product/cache/ab24d029cc9f966c2786182ee79c35cb/5/4/54979_0_min.jpg"


//function App() {
  
//async function getProducts() {
  //const response = await fetch("https://api.escuelajs.co/api/v1/products");
  //const data = await response.json();
  //setProducts(data); 
//}

//useEffect(() => {
  //getProducts();
//}, []);

//console.log(products);
  

{/*const products = [
  {
    id: 1,
    title: "Celular",
    description: "Tremendo celu",
    price: 24,
    image: img,
    descuentoMensaje: "  Descuento",
  },
  {
    id: 2,
    title: "Computadora",
    description: "Tremenda compu",
    price: 24,
    image: img,
    esFavorito: true,
  },
  {
    id: 3,
    title: "Botella",
    description: "Tremenda botella",
    price: 24,
    image: img,
  },
  {
    id: 4,
    title: "Vaso",
    description: "Tremendo vaso",
    price: 24,
    image: img,
    descuentoMensaje: "  Descuento",
  },
];*/}


// App en JSX

function App() {

  const cartState = useState();

  return (
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={cartState}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<><Login /> <Link to="/">Ingresar a la home como usuario registrado</Link></>}/>
            <Route path="*" element={<><h1>404 not found</h1><Link to="/">Volver a la home</Link></>} />             
            <Route path="/products/:id" element={<><ProductDetail /> <Link to="/">Volver a la home</Link> </>} />
                      {/*products/:id, los dos puntos + alguna palabra es un comodin para que se rellene con cualquier cosa*/}

              {/**/}
            
          </Routes>  
        </BrowserRouter>  
      </CartContext.Provider>
    </QueryClientProvider>
  );
}

export default App;