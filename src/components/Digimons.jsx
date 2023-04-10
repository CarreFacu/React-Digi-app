import {useState, useEffect} from "react";
import {getAllDigimons, getDigimonById} from "../api/pokemon";
import DigimonCard from "./DigimonCard.jsx";
import '../css/digimon.css'

import Button from '@mui/material/Button';

function digimons() {
    const [digimons, getDigimons] = useState(null)
    const [digimonDetail, getDigimonDetail] = useState(null)
    const onClickDetails = (id)=>{
        console.log(id)
        getDigimonById(id).then((data) => getDigimonDetail(data))
    }

    useEffect(() => {
        getAllDigimons(7).then((data) => getDigimons(data))

    }, [])

    return ( 
        <>
            <h1>Digimon</h1>
            <div className="grid-layaout">
                <div className="listItem">
                    <ul>
                        {digimons?.content?.map((digimon) => (
                            <li className="list-items" key={digimon.id}>
                                <img src={digimon.image}/>
                                {digimon.name}
                                <Button variant="contained"
                                        onClick={() => {
                                            onClickDetails(digimon.id);
                                        }}>
                                    Detalle
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="itemDetail">
                    {digimonDetail ? <DigimonCard digimon={digimonDetail}/> : "Por favor Seleccione un Digimon para ver sus detalles"}
                </div>

            </div>

        </>
    );
}

export default digimons;