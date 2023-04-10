import '../css/digimonCard.css'

function DigimonCard(props) {
    console.log(props.digimon.types)
    return (
        <div className="grid">
            <img className="card-img" src={props.digimon.images[0].href}/>
            <h2 className="title-detail">{props.digimon.name}</h2>
            <p className="descriptions">{props.digimon.descriptions[0].description.lenguaje === "jap" ?
                props.digimon.descriptions[1].description :
                props.digimon.descriptions[0].description}</p>
            <ul>
                {props.digimon.types.map((digimon) => (
                    <li key={digimon.id}>
                        <p>{digimon.type}</p>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default DigimonCard;