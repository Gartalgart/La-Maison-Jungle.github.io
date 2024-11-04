import { useState } from "react";
import { plantList } from "./datas/plantList";
import PlantItem from "./PlantItem";

function ShoppingList({addToCart}){
    // État pour stocker la liste des plantes filtrées
    const [filteredPlants, setFilteredPlants] = useState(plantList);

    // Fonction pour gérer le changement de catégorie
    const handleCategoryChange = (e) => {
        const category = e.target.value;
        let filtered;

        // Filtrer les plantes selon la catégorie et le premier caractère de l'ID
        if (category === "classique") {
            filtered = plantList.filter((plant) => {
                const firstChar = plant.id.charAt(0);
                return firstChar >= '1' && firstChar <= '4';
            });
        } else if (category === "exterieure") {
            filtered = plantList.filter((plant) => {
                const firstChar = plant.id.charAt(0);
                return firstChar >= '5' && firstChar <= '7';
            });
        } else if (category === "grasse") {
            filtered = plantList.filter((plant) => {
                const firstChar = plant.id.charAt(0);
                return firstChar >= '8' && firstChar <= '9';
            });
        } else {
            // Réinitialiser si aucune catégorie sélectionnée
            filtered = plantList;
        }

        // Mettre à jour la liste des plantes filtrées
        setFilteredPlants(filtered);
    };

    // Fonction pour réinitialiser le filtre
    const resetFilter = () => {
        setFilteredPlants(plantList); // Réinitialise à la liste complète
    };

    return(
        <div className="ShoppingList">
            <div className="category">
                <select className="selectCategory" onChange={handleCategoryChange}>
                    <option value=''>---</option>
                    <option value='classique'>Classique</option>
                    <option value='exterieure'>Extérieur</option>
                    <option value='grasse'>Plantes grasses</option>
                </select>
                <button onClick={resetFilter}>réinitialiser</button>
            </div>
            <ul className="ulPlant">
                {filteredPlants.map((plant) => (
                    <PlantItem
                        key={plant.id}
                        id={plant.id}
                        image={plant.image}
                        name={plant.name}
                        price={plant.price}
                        water={plant.water}
                        light={plant.light}
                        addToCart={addToCart}
                    />
                ))} 
            </ul>
        </div>
        
    )
}

export default ShoppingList