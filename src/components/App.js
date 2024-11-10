import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import PlantDetail from "./plantDetails/PlantDetail.js";


function App(){
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (name, price) => {
    setCartItems((prevItems) => {//prevItems représente la version actuelle de cartItems (le panier avant l’ajout de la nouvelle plante).
      const existingItem = prevItems.find((item) => item.name === name);//find() parcourt prevItems pour vérifier s'il existe un article dont le name correspond à la plante ajoutée. Si une plante avec le même name est déjà présente dans prevItems, elle est stockée dans existingItem. Si la plante n'existe pas encore, existingItem sera undefined.
      if(existingItem){
        return prevItems.map((item) =>
        item.name === name ? {...item, quantity: item.quantity + 1} : item);//map() est utilisé pour créer une nouvelle version de prevItems, où chaque élément est vérifié. Pour l'élément correspondant à la plante (c’est-à-dire item.name === name), on crée un nouvel objet avec les mêmes propriétés (...item) mais avec quantity incrémenté de 1 (quantity: item.quantity + 1). Les autres éléments du panier sont laissés inchangés (: item).
      }else{
        return [...prevItems, {name, price, quantity: 1}];//Si la plante n’est pas déjà dans le panier, elle est ajoutée en tant que nouvel élément. ...prevItems ajoute tous les éléments existants, puis { name, price, quantity: 1 } ajoute la nouvelle plante avec une quantité initiale de 1.
      }
    });
  };

  const addToCartDetail = (name, price, quantity) => {
    setCartItems((prevItems) => {//prevItems représente la version actuelle de cartItems (le panier avant l’ajout de la nouvelle plante).
      const existingItem = prevItems.find((item) => item.name === name);//find() parcourt prevItems pour vérifier s'il existe un article dont le name correspond à la plante ajoutée. Si une plante avec le même name est déjà présente dans prevItems, elle est stockée dans existingItem. Si la plante n'existe pas encore, existingItem sera undefined.
      if(existingItem){
        return prevItems.map((item) =>
        item.name === name ? {...item, quantity: item.quantity + quantity} : item);//map() est utilisé pour créer une nouvelle version de prevItems, où chaque élément est vérifié. Pour l'élément correspondant à la plante (c’est-à-dire item.name === name), on crée un nouvel objet avec les mêmes propriétés (...item) mais avec quantity incrémenté de 1 (quantity: item.quantity + 1). Les autres éléments du panier sont laissés inchangés (: item).
      }else{
        return [...prevItems, {name, price, quantity: quantity}];//Si la plante n’est pas déjà dans le panier, elle est ajoutée en tant que nouvel élément. ...prevItems ajoute tous les éléments existants, puis { name, price, quantity: 1 } ajoute la nouvelle plante avec une quantité initiale de 1.
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const clearElement = (name) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.name === name ? {...item, quantity: item.quantity - 1} : item) // Décrémente la quantité si la plante est trouvée
        .filter((item) => item.quantity > 0); // Retire l'élément du tableau si sa quantité tombe à 0
    });
  };

  const [isCartActive, setIsCartActive] = useState(false);
  const toggleCart = () => {
    setIsCartActive((prevState) => !prevState);
  }

  return (
    <div>
      <Banner toggleCart={toggleCart}/>
      <div className="main">
        <Cart 
          cartItems={cartItems} 
          clearCart={clearCart} 
          clearElement={clearElement} 
          isCartActive={isCartActive}/>
        <Routes>
          <Route path="/shoppingList" element={<ShoppingList addToCart={addToCart}/>}/>
          <Route path="/plant/:id" element={<PlantDetail addToCartDetail={addToCartDetail} />}/>
        </Routes>
      </div>
      <Footer />  
    </div> 
  );

}

export default App;
