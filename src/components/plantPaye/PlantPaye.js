import React from "react";
import ReviewOder from "./ReviewOrder";
import OrderSummary from "./OrderSummary";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //import la librairy fontawesome
import { faCcDiscover, faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons';


function PlantPaye({cartItems, clearElement, clearCart}){


    return(
        <div className="page2">
            <div className="reviewOrder">
                <h1 className="title1">Résumer des articles</h1>
                <ReviewOder 
                cartItems={cartItems} 
                clearElement={clearElement} 
                clearCart={clearCart}/>
            </div>
            <div className="order_form">
                <div className="orderSummary">
                    <OrderSummary  cartItems={cartItems}/>
                </div>
                <div className="paye">
                    <form className="formulaire">
                        <div className="adress">
                            <h2>Adresse de livraison</h2>
                            <div className="name">
                                <span>Nom Prénom:</span>
                                <input type="text" placeholder="Nom Prénom"/>
                            </div>
                            <div className="email">
                                <span>Email:</span>
                                <input type="text" placeholder="Email"/>
                            </div>
                            <div className="adress">
                                <span>Adresse:</span>
                                <input type="text" placeholder="7 allée des Augustins"/>
                            </div>
                            <div className="ville">
                                <span>Ville:</span>
                                <input type="text" placeholder="Paris"/>
                            </div>
                            <div className="pays">
                                <span>Pays:</span>
                                <input type="text" placeholder="France"/>
                            </div>
                            <div className="codePostale">
                                <span>Code Postale:</span>
                                <input type="number" placeholder="80070"/>
                            </div>
                        </div>
                        <div className="payment">
                            <h2>Payement</h2>
                            <div className="cardAccepte">
                                <span>Cart accepter:</span>
                                <div className="card">
                                    <span className="cartItem"><FontAwesomeIcon icon={faCcVisa} size="2xl" /></span>
                                    <span className="cartItem"><FontAwesomeIcon icon={faCcMastercard} size="2xl" /></span>
                                    <span className="cartItem"><FontAwesomeIcon icon={faCcPaypal} size="2xl" /></span>
                                    <span className="cartItem"><FontAwesomeIcon icon={faCcDiscover} size="2xl" /></span>
                                </div>
                            </div>
                            <div className="nameCard">
                                <span>Nom de carte:</span>
                                <input type="text" placeholder="PRENOM NOM"/>
                            </div>
                            <div className="numberCard">
                                <span>Numero de carte:</span>
                                <input type="number" placeholder="1111 2222 3333 4444"/>
                            </div>
                            <div className="expDate">
                                <span>Date d'expiration:</span>
                                <input type="number" placeholder="MM/AA"/>
                            </div>
                            <div className="crypto">
                                <span>Crypto:</span>
                                <input type="text" placeholder="123"/>
                            </div>
                        </div>
                    </form>
                    <button className="submit">Submit</button>
                </div>
            </div>
        </div>
    );
}


export default PlantPaye