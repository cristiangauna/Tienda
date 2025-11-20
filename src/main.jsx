import React from "react";
import ReactDOM from "react-dom/client";
//import ProductCard from "./product-cart.jsx";
import App from "./app";
//import Header from "./header.jsx";
import "./normalize.css";
import "./variables.css";
import { StrictMode } from "react";

// Título en JSX
//const title = <h1>Info Store</h1>;

// Componente con JSX
//function ProductCard(props) {
//  return (
//    <article>
//      <h2>{props.title}</h2>                          
//      <p>{props.description}</p>
//    </article>
//  );
//}

// App en JSX
//function App() {
//  return (
//  <div>
//    <h1>Info Store</h1>
//    <ProductCard title="Celular" description="Tremendo celu" />
//    <ProductCard title="Computadora" description="Tremenda compu" />
//    <ProductCard title="Remera" description="Tremenda remera" />
//    <ProductCard title="Televisor" description="Tremenda tele" />
//  </div>
//  );
//};

// Render
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);