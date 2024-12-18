import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //import la librairy fontawesome
import { faCircleXmark, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'; //imort individuellement l'icon

function Cart({cartItems, clearCart, clearElement, isCartActive, showLogin}){
    const title = 'Panier';

    // Calcul du prix total
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    return(
        <div className={`cart ${isCartActive ? 'active' : ''}`}>
            <h2 className="title-cart">{title.toUpperCase()}</h2>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide</p>
            ) : (
            <>
                <ul className="ul-cart">
                    {cartItems.map((item, index) =>(
                        <li key={index}>
                            {item.quantity === 1 ? (
                                <span>{item.quantity} {item.name}: {item.price}€ 
                                <FontAwesomeIcon icon={faCircleXmark} onClick={() => clearElement(item.name)} className='element'/></span>
                            ) : (
                                <span>{item.quantity} {item.name}: {item.price * item.quantity}€
                                <FontAwesomeIcon icon={faCircleXmark} onClick={() => clearElement(item.name)} className='element'/></span>
                            )}
                        </li>//Dans {item.quantity === 1 ? (...) : (...)}, chaque bloc de rendu ( ... ) doit être enveloppé dans des balises JSX (par exemple, <span>...</span>), sans ajouter d’accolades supplémentaires autour des éléments dans le bloc ternaire.
                    ))}
                </ul>
                <h3 className="total-cart">Total price: {totalPrice}€</h3>
                <button className='valid'>
                    <Link to={'/PlantPaye'}>Valider le panier</Link>
                </button>
                <button className='clear' onClick={clearCart}>Vider le panier</button>
            </>  
            )}  
            <div className='login'>
                <p className='sentence'>Connecte toi pour pouvoir enregistrer ton Panier</p>
                <button className='connect' onClick={showLogin}>
                    Se connecter
                    <span className='arrow'>
                        <FontAwesomeIcon icon={faArrowRightLong} size="2xl" />
                    </span>
                </button>
            </div>
        </div>
       
    )           
}       


export default Cart