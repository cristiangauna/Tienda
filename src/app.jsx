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
import styles from "./app.module.css";
import ProtectedRoute from "./protectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./header";
import Destacados from "./screens/destacados";
import Ofertas from "./screens/ofertas";
import Carrito from "./screens/carrito";
import Historial from "./screens/historial";



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

  const [cart, setCart] = useState([]);


  const irHome = <h1><Link to="/home" className={styles.añadido}>Ir a la home 🛒</Link></h1>;
  const cerrarSesion = <h1><Link to="/" onClick={handleCerrarSesion} className={styles.descuento}>Cerrar Sesión 🛒</Link></h1>;


  function rutaGeneral (link, h1) {
    return <Route path={link} element={<> <Header/> <h1>{h1}</h1> {irHome} <h1> </h1> {cerrarSesion}</>} />  
  };


  function handleCerrarSesion(e) {
    e.preventDefault(); // evita salir sin preguntar

    const confirmar = window.confirm("¿Estás seguro que deseas cerrar sesión?");

    if (confirmar) {
      window.location.href = "/";
    }
  }


  return (
    <QueryClientProvider client={queryClient}>
      <CartContext.Provider value={[cart, setCart]}>       
        <BrowserRouter>  
          <AuthProvider>
            <Routes>
              <Route path="/home" element={<> <Home /> {cerrarSesion}</>}/>
              <Route path="/" element={<> <Login /> {/*<Link to="/home" ><h3 className={styles.añadido}> Ingresar a la home como usuario registrado 🛒</h3></Link>*/}</>}/>
              {rutaGeneral("*", "404 not found")}           
              <Route path="/products/:id" element={<><Header /> <ProductDetail /> {irHome} <h1> </h1> {cerrarSesion}</>} />
                        {/*products/:id, los dos puntos + alguna palabra es un comodin para que se rellene con cualquier cosa*/}
                {/**/}
              {rutaGeneral("/cuenta", "Cuenta Ingresada")}
              <Route path="/historial" element={<> <Header/> <Historial /> {irHome} {cerrarSesion}</>} />  
              <Route path="/carrito" element={<> <Header/> <Carrito /> {irHome} {cerrarSesion}</>} />     
              <Route path="/inicio" element={<><Home /> {cerrarSesion}</>} />
              <Route path="/categorias" element={<> <Header/> <h1><Link to="/destacados" >⭐Destacados</Link></h1> <h1><Link to="/ofertas" >💲Ofertas</Link></h1>; {irHome} <h1> </h1> {cerrarSesion}</>} />  
              <Route path="/destacados" element={<> <Destacados /> {irHome} {cerrarSesion}</>}/>
              <Route path="/ofertas" element={<> <Ofertas /> {irHome} {cerrarSesion}</>}/>
              <Route path="/admin" element={<><Header/> <ProtectedRoute><h1>Admin</h1></ProtectedRoute> {irHome}<h1> </h1>{cerrarSesion}</>} />
            
            </Routes>  
          </AuthProvider>          
        </BrowserRouter>
      </CartContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
  

  
              