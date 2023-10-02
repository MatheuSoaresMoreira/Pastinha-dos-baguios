import {Routes, Route} from "react-router-dom"
import Matheus from "./paginas/Matheus"
import Soares from "./paginas/Soares"

function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Matheus />} />
            <Route path="/soares" element={<Soares />} />
        </Routes>
    )
}

export default Rotas