import CareScale from "./CareScale";
import React from 'react';
import { Link } from "react-router-dom";

function PlantItem({id, image, name, price, water, light, addToCart}){
    return (
        <li key={id} className="plant">
            <div className="plantContainer">
                <img src={image} alt={`${name} image`} className="imagePlant"/>
                <div className="details">
                    <Link to={`/plant/${id}`} onClick={() => console.log("Link clicked")}>Détails</Link> {/* Redirection vers la page de détail */}
                </div>
                <div className="price">{price}€</div>
            </div>
                {name}
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            <button onClick={() => addToCart(name, price, image)}>Ajouter</button>
        </li>
    )  
}

export default PlantItem