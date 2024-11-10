import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //import la librairy fontawesome
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'; //imort individuellement l'icon

function MoreLess({ setQuantity }){
    const [quantity, setLocalQuantity] = useState(1);

    const minusElement = () => {
        setLocalQuantity(prevQuantity => {
            const newQuantity = Math.max(1, prevQuantity - 1);
            setQuantity(newQuantity);
            return newQuantity;

        })
            
    };

    const plusElement = () => {
        setLocalQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            setQuantity(newQuantity);
            return newQuantity;
        });
    };
    

    return (
        <div className="quantityButton">
            <button className="less" onClick={minusElement}>
                <span><FontAwesomeIcon icon={faMinus} /></span>
            </button>
            <p className="quantity">
                {quantity}
            </p>
            <button className="more" onClick={plusElement}>
                <span><FontAwesomeIcon icon={faPlus} /></span>
            </button>
        </div>
    );
}

export default MoreLess