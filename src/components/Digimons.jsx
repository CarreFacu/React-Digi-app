import {useState, useEffect} from "react";
import {getAllDigimons, getDigimonById, getDigimonByName, getDigimonPageable} from "../api/pokemon";
import DigimonCard from "./DigimonCard.jsx";
import Pagination from "./Pagination.jsx";
import '../css/digimon.css'

import Button from '@mui/material/Button';
import { RotatingTriangles } from  'react-loader-spinner'

function digimons() {
    const [digimons, getDigimons] = useState(null)
    const [digimonDetail, getDigimonDetail] = useState(null)
    const [nameDigimon, setNameDigimon] = useState("")

    const onClickDetails = (id)=>{
        getDigimonById(id).then((data) => getDigimonDetail(data))
    }
    const  handleSubmit = (event) => {
        getDigimonByName(nameDigimon).then((data) => {
        if(data.message === "Digimon not found"){
            return
        }else{
            getDigimonDetail(data)
        }})
        event.preventDefault();
    }
    const onPrevious = () =>{
        getDigimonPageable(digimons.pageable.previousPage + '&pageSize=7').then((data) => getDigimons(data))
    }

    const onNext = () =>{
        getDigimonPageable(digimons.pageable.nextPage + '&pageSize=7').then((data) => getDigimons(data))
    }
    useEffect(() => {
        getAllDigimons(7).then((data) => getDigimons(data))

    }, [])

    return ( 
        <>
            <h1>Digimon</h1>
            <div className="grid-layaout">
                <div className="listItem">
                    <Pagination onNext={onNext} onPrevious={onPrevious} next={digimons?.pageable} prev={digimons?.pageable}/>
                    {!digimons ? <RotatingTriangles
                        visible={true}
                        height="200"
                        width="200"
                        colors={['#e1e1e1', '#1976d2', '#000000']}
                        ariaLabel="rotating-triangels-loading"
                        wrapperStyle={{'margin': '10% 0 0 30%'}}
                        wrapperClass="rotating-triangels-wrapper"
                    /> :
                        <ul className="list">
                            {digimons?.content?.map((digimon) => (
                                <li className="items-list" key={digimon.id}>
                                    <img className="list-image" src={digimon.image}/>
                                    <p className="digimon-name">{digimon.name}</p>
                                    <div className="btn-detail">
                                        <Button  variant="contained"
                                                 onClick={() => {
                                                     onClickDetails(digimon.id);
                                                 }}>
                                            Detail
                                        </Button>
                                    </div>

                                </li>
                            ))}
                        </ul>}

                </div>
                <div>
                    <form className="from" onSubmit={handleSubmit}>
                        <input
                            className="css-input"
                            type="text"
                            value={nameDigimon}
                            onChange={(e) => setNameDigimon(e.target.value)}
                        />
                        <Button variant="contained" type='submit'>Search</Button>
                    </form>
                    {digimonDetail ? <DigimonCard digimon={digimonDetail}/> : ""}
                </div>
            </div>

        </>
    );
}

export default digimons;