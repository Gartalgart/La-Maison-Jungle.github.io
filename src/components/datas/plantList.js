import monstreraImage from '../../assets/monstera.jpg';
import lyrataImage from '../../assets/lyrata.jpg';
import pothosImage from '../../assets/pothos.jpg';
import calatheaImage from '../../assets/calathea.jpg';
import olivierImage from '../../assets/olivier.jpg';
import mentheImage from '../../assets/mint.jpg';
import basilImage from '../../assets/basil.jpg';
import cactusImage from '../../assets/cactus.jpg';
import succulentImage from '../../assets/succulent.jpg';


export const plantList = [
	{
		name: 'Monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		image: monstreraImage,
		price: 15,
		light: 2,
		water: 3
	},
	{
		name: 'Ficus lyrata',
		category: 'classique',
		id: '2ab',
		isBestSale: false,
		image: lyrataImage,
		price: 16,
		light: 3,
		water: 1
	},
	{
		name: 'Pothos argenté',
		category: 'classique',
		id: '3sd',
		isBestSale: false,
		isSpecialOffer: true,
		image: pothosImage,
		price: 9,
		light: 1,
		water: 2
	},
	{
		name: 'Calathea',
		category: 'classique',
		id: '4kk',
		isBestSale: false,
		image: calatheaImage,
		price: 20,
		light: 2,
		water: 3
		
	},
	{
		name: 'Olivier',
		category: 'extérieur',
		id: '5pl',
		isBestSale: true,
		image: olivierImage,
		price: 25,
		light: 3,
		water: 1
	},
	{
		name: 'Menthe',
		category: 'extérieur',
		id: '6uo',
		isBestSale: false,
		image: mentheImage,
		price: 4,
		light: 2,
		water: 2
	},
	{
		name: 'Basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: false,
		isSpecialOffer: true,
		image: basilImage,
		price: 5,
		light: 2,
		water: 3
	},
	{
		name: 'Cactus',
		category: 'plante grasse',
		id: '8fp',
		isBestSale: false,
		isSpecialOffer: true,
		image: cactusImage,
		price: 6,
		light: 2,
		water: 1
	},
	{
		name: 'Succulente',
		category: 'plante grasse',
		id: '9vn',
		isBestSale: true,
		image: succulentImage,
		price: 8,
		light: 2,
		water: 1
	}
];