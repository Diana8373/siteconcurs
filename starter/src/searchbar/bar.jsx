import "./bar.css"
import {Link} from "react-router-dom"
function Bar() {
    return (
        <div className="Subiecte">
            <Link to="/welcomepage" className="link"><p>Home</p></Link>
            <Link to="/info" className="link"><p>Info</p></Link>
            <Link to="/test" className="link"><p>Test</p></Link>
            <Link to="/scoala" className="link"><p>Scoala</p></Link>
            <Link to="/tehno" className="link"><p>Tehno</p></Link>
        </div>
    )
}
export default Bar