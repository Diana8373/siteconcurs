import poza1 from '../assets/hero.png'
import "./anunt2.css"
function Anunt1(){
    return(
        <div className="Altele">
            <img src={poza1} alt="poza1" class="pozatest"></img>
            <div className="Info">
                <p>--ce mai am de zis</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}
export default Anunt1