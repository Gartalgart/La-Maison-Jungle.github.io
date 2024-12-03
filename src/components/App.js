import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import PlantDetail from "./plantDetails/PlantDetail.js";
import PlantPaye from "./plantPaye/PlantPaye.js";
import Login from "./Login.js";


function App(){
  const [cartItems, setCartItems] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isConnectActive, setIsConnectActive] = useState(true);

  const addToCart = (name, price, image) => {
    setCartItems((prevItems) => {//prevItems représente la version actuelle de cartItems (le panier avant l’ajout de la nouvelle plante).
      const existingItem = prevItems.find((item) => item.name === name);//find() parcourt prevItems pour vérifier s'il existe un article dont le name correspond à la plante ajoutée. Si une plante avec le même name est déjà présente dans prevItems, elle est stockée dans existingItem. Si la plante n'existe pas encore, existingItem sera undefined.
      if(existingItem){
        return prevItems.map((item) =>
        item.name === name ? {...item, quantity: item.quantity + 1} : item);//map() est utilisé pour créer une nouvelle version de prevItems, où chaque élément est vérifié. Pour l'élément correspondant à la plante (c’est-à-dire item.name === name), on crée un nouvel objet avec les mêmes propriétés (...item) mais avec quantity incrémenté de 1 (quantity: item.quantity + 1). Les autres éléments du panier sont laissés inchangés (: item).
      }else{
        return [...prevItems, {name, price, image, quantity: 1}];//Si la plante n’est pas déjà dans le panier, elle est ajoutée en tant que nouvel élément. ...prevItems ajoute tous les éléments existants, puis { name, price, quantity: 1 } ajoute la nouvelle plante avec une quantité initiale de 1.
      }
    });
  };

  const addToCartDetail = (name, price, quantity, image) => {
    setCartItems((prevItems) => {//prevItems représente la version actuelle de cartItems (le panier avant l’ajout de la nouvelle plante).
      const existingItem = prevItems.find((item) => item.name === name);//find() parcourt prevItems pour vérifier s'il existe un article dont le name correspond à la plante ajoutée. Si une plante avec le même name est déjà présente dans prevItems, elle est stockée dans existingItem. Si la plante n'existe pas encore, existingItem sera undefined.
      if(existingItem){
        return prevItems.map((item) =>
        item.name === name ? {...item, quantity: item.quantity + quantity} : item);//map() est utilisé pour créer une nouvelle version de prevItems, où chaque élément est vérifié. Pour l'élément correspondant à la plante (c’est-à-dire item.name === name), on crée un nouvel objet avec les mêmes propriétés (...item) mais avec quantity incrémenté de 1 (quantity: item.quantity + 1). Les autres éléments du panier sont laissés inchangés (: item).
      }else{
        return [...prevItems, {name, price, quantity, image}];//Si la plante n’est pas déjà dans le panier, elle est ajoutée en tant que nouvel élément. ...prevItems ajoute tous les éléments existants, puis { name, price, quantity: 1 } ajoute la nouvelle plante avec une quantité initiale de 1.
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

  const toggleCart = () => {
    setIsCartActive((prevState) => !prevState);
  }

  const toggleConnect = () => {
    setIsConnectActive((prevState) => !prevState);
  }

  const showLogin = () => setIsLoginVisible(true);
  const hideLogin = () => setIsLoginVisible(false);

  return (
    <div>
      <Banner toggleCart={toggleCart} />
      <div className="main">
        <Cart 
          cartItems={cartItems} 
          clearCart={clearCart} 
          clearElement={clearElement} 
          isCartActive={isCartActive}
          showLogin={showLogin}/>
        <Routes>
          <Route path="/" element={<ShoppingList addToCart={addToCart} />} />
          <Route path="/ShoppingList" element={<ShoppingList addToCart={addToCart} />} />
          <Route path="/plant/:id" element={<PlantDetail addToCartDetail={addToCartDetail} />}/>
          <Route path="/PlantPaye" element={<PlantPaye cartItems={cartItems} clearElement={clearElement} clearCart={clearCart}/>}/>
        </Routes>
      </div>
      {isLoginVisible && <Login onClose={hideLogin} isConnectActive={isConnectActive} toggleConnect={toggleConnect}/>}
      <Footer />  
    </div> 
  );

}

export default App;
