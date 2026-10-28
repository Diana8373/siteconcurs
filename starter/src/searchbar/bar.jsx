import "./bar.css"
import {Link} from "react-router-dom"
function Bar() {
    return (
        <div className="Subiecte">
            <Link to="/welcomepage" className="link"><p>Home</p></Link>
            <Link to="/info" className="link"><p>Info</p></Link>
            <Link to="/test" className="link"><p>Test</p></Link>
            <p className="optiuni">Arta</p>
            <p className="optiuni">Tehno</p>
        </div>
    )
}
export default Bar