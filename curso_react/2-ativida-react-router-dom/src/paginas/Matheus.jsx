import {Link} from 'react-router-dom'

function Matheus(){
    return(
        <div>
            <h1>Matheus</h1>
            <Link to={'/soares'}>Ver página do Soares</Link>
        </div>
    )
}

export default Matheus