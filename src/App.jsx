import {Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";

import Header from "./components/header.jsx";
import Digimons from "./components/Digimons.jsx";
import DigimonDetail from "./components/DigimonDetail.jsx";

import './css/normalize.css'
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Digimons/>,
        },
        {
            path: "/digimon/:digimonId",
            element: <DigimonDetail/>,
        },
    ]);
    return (
        <div>
            <Header/>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
