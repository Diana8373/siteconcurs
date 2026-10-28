import './welcome.css'
import Anunt1 from "./anunt1.jsx"
import Anunt2 from "./anunt2.jsx"
import Bar from '../searchbar/bar.jsx'
import {Link} from "react-router-dom"
function Wel() {
    return (
        <div className="tot">
            <Bar/>
            <div className="sus">
                <h1 className="titlu">Dezvoltarea si manifestarea anxietatii la copii</h1>
                <div className="descriere">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium dolore dicta aliquid dolor, rem quam rerum fugit deleniti illum. Ex dolore exercitationem consectetur recusandae qui numquam, magnam perspiciatis libero atque.</p>\
                    <Link to="/info" className="link"><button className="b1">Afla mai multe</button></Link>
                </div>
            </div>
            <div className="anunturi">
                <Link to="/test" className="link"><Anunt1/></Link>
                <Anunt2></Anunt2>
            </div>
        </div >
    );
}
export default Wel;