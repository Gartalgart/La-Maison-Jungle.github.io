import React from "react";

function ReviewOder({cartItems, clearElement}){
        
    console.log("cartItems:", cartItems); // Ajoutez ceci pour voir ce qui est dans le panier.

    if (!cartItems || cartItems.length === 0) {
        return <p className="emptyCard">Votre panier est vide.</p>;
    }

    return(
        <>
            <ul className="ulReview">
                {cartItems.map((item, index) => (
                    <li key={index} className="liReview">
                        <div className="review">
                            <img src={item.image} alt={item.name} className="imagePlant"/>
                            <span>Quantiter: {item.quantity}</span>
                            <span>Prix: {item.price}€</span>
                            <button className="supp" onClick={() => clearElement(item.name)}>supprimer</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ReviewOder