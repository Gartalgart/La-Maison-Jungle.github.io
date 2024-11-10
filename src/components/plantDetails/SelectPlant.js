import React from "react";
import { Link } from "react-router-dom";
import { plantList } from "../datas/plantList";

function SelectPlant({ id, category }){
    console.log(id);
    const filteredPlants = plantList.filter(plant => plant.category === category && plant.id !== id);

    return(
        <div className="selectPlant">
            <div className="ulContaint">
                <ul className="ul">
                    {filteredPlants.map((plant) => (
                        <li key={plant.id}>
                            <Link to={`/plant/${plant.id}`} >
                                <img src={plant.image} alt={`${plant.name}image`} className="imagePlantSmall" />
                            </Link>  
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    );
}

export default SelectPlant