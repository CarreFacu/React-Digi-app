import '../css/digimonCard.css'

function DigimonCard(props) {
    console.log(props.digimon.descriptions.length)
    return (
        <div className="grid">
            <h2 className="title-detail">{props.digimon.name}</h2>
            <img className="card-img" src={props.digimon.images[0].href}/>
            <h2 className="title-detail">Description</h2>
            <p className="descriptions">{props.digimon.descriptions.length === 0 || props.digimon.descriptions[0].description === " " ?
                'No description provided' :
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