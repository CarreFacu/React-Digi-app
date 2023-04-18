import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDigimonById} from "../api/pokemon.js";
import '../css/digimonDetail.css'
import Button from "@mui/material/Button";
import {RotatingTriangles} from "react-loader-spinner";

function DigimonDetail() {
    const [digimon, setDigimon] = useState("")
    const {digimonId} = useParams()
    useEffect(() => {
        getDigimonById(digimonId).then((data) => {setDigimon(data), console.log(data)})

    }, [digimonId])
    return (
        <>
            {!digimon ? <RotatingTriangles
                    visible={true}
                    height="200"
                    width="200"
                    colors={['#e1e1e1', '#1976d2', '#000000']}
                    ariaLabel="rotating-triangels-loading"
                    wrapperStyle={{'margin': '5% 0 0 45%'}}
                    wrapperClass="rotating-triangels-wrapper"
                /> :
                <div className="grid-layaout-detail">
                    <h2 className="digimon-name">{digimon.name}</h2>
                    <img className="digimon-img" src={digimon.images[0].href}/>
                    <p className="descriptions">{digimon.descriptions.length === 0 || digimon.descriptions[0].description === " " ?
                    'No description provided' :
                    digimon.descriptions[0].description}</p>
                    <div className="grid-evolutions">
                        <div className="evolutions">
                            <h2>Previuos evolutions</h2>
                            {digimon.priorEvolutions?.map((digimon) => (
                                <li className="list-items" key={digimon.id}>
                                    <img className="list-image" src={digimon.image}/>
                                    <p className="">{digimon.digimon}</p>
                                    <p className="">{!digimon.condition ? "No condition provided " : digimon.condition}</p>
                                    <div className="btn-detail">
                                        <Link to={`/digimon/${digimon.id}`}>
                                            <Button  variant="contained">
                                                Details
                                            </Button>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </div>
                        <div className="evolutions">
                                <h2>Next evolutions</h2>
                                {digimon.nextEvolutions?.map((digimon) => (
                                    <li className="list-items" key={digimon.id}>
                                        <img className="list-image" src={digimon.image}/>
                                        <p className="">{digimon.digimon}</p>
                                        <p className="">{!digimon.condition ? "No condition provided " : digimon.condition}</p>
                                        <div className="btn-detail">
                                            <Link to={`/digimon/${digimon.id}`}>
                                                <Button  variant="contained">
                                                    Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                        </div>
                    </div>
                </div>
            }

        </>


    );
}

export default DigimonDetail;