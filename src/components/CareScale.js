

function CareScale({ scaleValue, careType }) {
    // Déclare un tableau de valeurs de référence pour le niveau de soin (1, 2, 3)
    const range = [1, 2, 3];
    
    // Détermine le type d'icône à afficher en fonction du type de soin : '☀️' pour 'light', '💧' pour 'water'
    const scaleType = careType === 'light' ? '☀️' : '💧';

    return (
        <div>
            {/* Utilise map() pour parcourir le tableau range et afficher l'icône en fonction du scaleValue */}
            {range.map((rangeElem) =>
                // Si scaleValue est supérieur ou égal à rangeElem, affiche l'icône scaleType
                scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()}>{scaleType}</span> 
                    : 
                    // Si scaleValue est inférieur, ne rien afficher (null)
                    null
            )}
        </div>
    );
}


export default CareScale