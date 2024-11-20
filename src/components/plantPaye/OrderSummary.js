import React from "react";

function OrderSummary({cartItems}){

    // Calcul du total des articles et du prix total
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Calcul des taxes
    const tax = totalPrice * 0.1;
    const finalTotal = totalPrice + tax;

    if (cartItems.length === 0) {
        return (
            <div className="container">
                <h1 className="title2">Votre panier est vide</h1>
                <div className="article">
                    <p>Articles (0) :</p>
                    <p>0€</p>
                </div>
                <div className="tax">
                    <p>Tax (10%) :</p>
                    <p className="priceTax">0€</p>
                </div>
                <div className="totale">
                    <h2>Totale :</h2>
                    <h2 className="totalPrice">0€</h2>
                </div>
            </div>
        );
    }


    return (
        <div className="container">
            <h1 className="title2">Total à payer</h1>
            <div className="article">
                <p>Articles ({totalQuantity}) :</p>
                <p>{totalPrice}€</p>
            </div>
            <div className="tax">
                <p>Tax (10%) :</p>
                <p className="priceTax">{tax.toFixed(2)}€</p>
            </div>
            <div className="totale">
                <h2>Totale :</h2>
                <h2 className="totalPrice">{finalTotal.toFixed(2)}€</h2>
            </div>
        </div>
    );
}

export default OrderSummary