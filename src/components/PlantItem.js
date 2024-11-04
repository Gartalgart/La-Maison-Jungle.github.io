import CareScale from "./CareScale";
import { plantList } from "./datas/plantList";

function PlantItem({id, image, name, price, water, light, addToCart}){
    return (
        <li key={id} className="plant">
            <img src={image} alt={`${name} image`} className="imagePlant"/>
            <div className="price">{price}€</div>
                {name}
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            <button onClick={() => addToCart(name, price)}>Ajouter</button>
        </li>
    )  
}

export default PlantItem