import poza1 from '../assets/hero.png'
import "./anunt1.css"
function Anunt1(){
    return(
        <div className="Test">
            <div className="Info">
                <p>--Test de personalitate</p>
                <p>Afla cat de predispus esti anxietatii</p>
            </div>
            <img src={poza1} alt="poza1" class="pozatest"></img>
        </div>
    )
}
export default Anunt1