import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDigimonById} from "../api/pokemon.js";
import '../css/digimonDetail.css'

function DigimonDetail() {
    console.log('llego aca ?')
    const [digimon, setDigimon] = useState("")
    const {digimonId} = useParams()

    useEffect(() => {
        getDigimonById(digimonId).then((data) => {setDigimon(data),console.log(data)})

    }, [])
    return (
        <>
            {!digimon ? <h2>Cargando......</h2> :
                <div className="grid-layaout-detail">
                    <img className="digimon-img" src={digimon.images[0].href}/>
                    <p className="descriptions">{digimon.descriptions.length === 0 || digimon.descriptions[0].description === " " ?
                    'No description provided' :
                    digimon.descriptions[0].description}</p>
                </div>
            }

        </>


    );
}

export default DigimonDetail;