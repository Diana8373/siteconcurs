import "./bar.css"
import {Link} from "react-router-dom"
function Bar() {
    return (
        <div className="Subiecte">
            <Link to="/welcomepage"><p className="optiuni">Home</p></Link>
            <Link to="/info"><p className="optiuni">Info</p></Link>
            <p className="optiuni">Test</p>
            <p className="optiuni">Arta</p>
            <p className="optiuni">Tehno</p>
        </div>
    )
}
export default Bar