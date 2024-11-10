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
		water: 3,
		sunInfo: 'La Monstera aime une lumière indirecte modérée.',
		waterInfo: 'Arrosez-la une fois par semaine, mais laissez le sol sécher entre les arrosages.',
		didUKnow: 'La Monstera est aussi appelée "plante fromage suisse" en raison de ses feuilles perforées.'
	},
	{
		name: 'Ficus lyrata',
		category: 'classique',
		id: '2ab',
		isBestSale: false,
		image: lyrataImage,
		price: 16,
		light: 3,
		water: 1,
		sunInfo: 'Le Ficus lyrata préfère une lumière vive indirecte.',
		waterInfo: 'Arrosez modérément et évitez de laisser de l’eau stagnante.',
		didUKnow: 'Le Ficus lyrata est également appelé "figuier lyre" en raison de la forme de ses feuilles.'
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
		water: 2,
		sunInfo: 'Le Pothos argenté peut tolérer des conditions de faible luminosité.',
		waterInfo: 'Arrosez tous les 1 à 2 semaines, en laissant le sol sécher légèrement entre les arrosages.',
		didUKnow: 'Le Pothos est connu pour purifier l’air dans les espaces intérieurs.'
	},
	{
		name: 'Calathea',
		category: 'classique',
		id: '4kk',
		isBestSale: false,
		image: calatheaImage,
		price: 20,
		light: 2,
		water: 3,
		sunInfo: 'La Calathea préfère une lumière indirecte et un environnement humide.',
		waterInfo: 'Arrosez régulièrement, en évitant de laisser le sol sécher complètement.',
		didUKnow: 'Les feuilles de la Calathea bougent en fonction de la lumière, un phénomène appelé "prière".'
	},
	{
		name: 'Olivier',
		category: 'extérieur',
		id: '5pl',
		isBestSale: true,
		image: olivierImage,
		price: 25,
		light: 3,
		water: 1,
		sunInfo: 'L\'Olivier aime le plein soleil et des conditions sèches.',
		waterInfo: 'Arrosez modérément en évitant l\'excès d\'eau.',
		didUKnow: 'L’olivier peut vivre plusieurs centaines d’années et symbolise la paix.'
	},
	{
		name: 'Menthe',
		category: 'extérieur',
		id: '6uo',
		isBestSale: false,
		image: mentheImage,
		price: 4,
		light: 2,
		water: 2,
		sunInfo: 'La menthe préfère une lumière modérée à forte.',
		waterInfo: 'Maintenez le sol humide, surtout par temps chaud.',
		didUKnow: 'La menthe est souvent utilisée dans des infusions et des cocktails comme le mojito.'
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
		water: 3,
		sunInfo: 'Le basilic aime la lumière directe du soleil.',
		waterInfo: 'Arrosez régulièrement pour garder le sol humide mais pas détrempé.',
		didUKnow: 'Le basilic est un ingrédient populaire dans les plats méditerranéens et italiens.'
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
		water: 1,
		sunInfo: 'Le cactus aime beaucoup de soleil et de lumière directe.',
		waterInfo: 'Arrosez très rarement, une fois par mois environ.',
		didUKnow: 'Les cactus peuvent stocker de l’eau dans leurs tiges pour survivre aux périodes de sécheresse.'
	},
	{
		name: 'Succulente',
		category: 'plante grasse',
		id: '9vn',
		isBestSale: true,
		image: succulentImage,
		price: 8,
		light: 2,
		water: 1,
		sunInfo: 'Les succulentes préfèrent une lumière vive indirecte.',
		waterInfo: 'Arrosez une fois que le sol est sec, environ une fois toutes les deux semaines.',
		didUKnow: 'Les succulentes stockent l’eau dans leurs feuilles, leur permettant de résister à la sécheresse.'
	}
];