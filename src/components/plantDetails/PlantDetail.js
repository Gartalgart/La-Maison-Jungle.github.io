import React, { useState } from "react";
import { plantList } from "../datas/plantList";
import SelectPlant from "./SelectPlant";
import MoreLess from "./MoreLess";
import { useParams } from "react-router-dom";

function PlantDetail({addToCartDetail}){
    console.log("MonstreraDetail component rendered");

    const {id} = useParams(); // Récupère l'identifiant depuis l'URL
    console.log("ID reçu:", id);

    const plant = plantList.find((plant) => plant.id === id); // Trouver la plante correspondante

    const [quantity, setQuantity] = useState(1);

    if(!plant){
        return <h2>Plante non trouvée</h2>;
    }

    return(
        <section className="page">
            <div className="mainImage">
                    <img src={plant.image} alt={plant.name} className="imagePlant"/>
            </div>
            <div className="container">
                <section className="top">
                    <div className="hook">
                        <div className="titlePrice">
                            <h1>{plant.name}</h1>
                            <p>{plant.price}€</p>
                        </div>
                        <div className="sunInfo">
                            <span>☀️</span>
                            <p> {plant.sunInfo}</p>
                        </div>
                        <div className="waterInfo">
                            <span>💧</span>
                            <p> {plant.waterInfo}</p>
                        </div>
                        <div className="didUKnow">
                            <p className="title">Le saviez-vous ?</p>
                            <p className="text">{plant.didUKnow}</p>
                        </div>
                    </div>
                </section>
                <section className="bottom">
                    <div className="left">
                        <SelectPlant id={plant.id} category={plant.category} />
                    <p>Plantes du même type</p>
                    </div>
                    <div className="right">
                        <MoreLess setQuantity={setQuantity}/>
                        <div className="addCart">
                            <button className="addCartButton" onClick={() => addToCartDetail(plant.name, plant.price, quantity, plant.image)}>Ajouter au Panier</button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default PlantDetail