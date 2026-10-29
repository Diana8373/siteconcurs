import './scoala.css'
import Bar from '../searchbar/bar.jsx'
function Largim() {
    var elements = document.getElementsByClassName("solutie");
    for (let i=0; i<elements.length;i++){
        elements[i].classList.toggle("prelungire");
    }
    var informatie=document.getElementsByClassName("briefing");
        for (let i=0; i<informatie.length;i++){
            if(elements[i].className==="solutie"){
                informatie[i].style.display="none";
            }else{
                informatie[i].style.display="block";
            }
        }
}
function Scoala() {
    return (
        <>
            <Bar />
            <div className="sus4">
                <div className="antet"><h1 className="titlu">Abordarea anxietatii in scoli</h1></div>
                <div className="poza5"></div>
            </div>
            <div className="tot4">
                <div className="stiaica">
                    <h2>Stiai ca..?</h2>
                    <p className="paragrafe">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, voluptates perferendis iste natus est rerum dignissimos soluta, in similique veniam non possimus ducimus ab omnis tempora at quibusdam, necessitatibus minima?</p>
                </div>
                <h2>De ce este asa importanta?</h2>
                <p className="paragrafe">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aut, ipsam ipsum laudantium iure sapiente aspernatur fugiat nihil at vitae ipsa dignissimos facere, modi voluptatum. Quas similique nulla harum voluptatum.</p>
                <h2>Cum ne putem implica?</h2>
                <div className="solutii">
                    <button className="b6"><p>Inainte</p></button>
                    <div className="solutie" onClick={Largim}>
                        <div className="fatada">
                            <div className="solution1"></div>
                            <p className="paragraf">Lorem Ipsum</p>
                        </div>
                        <p className="briefing">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum facilis est, doloribus reprehenderit corrupti tempore libero harum veniam porro maxime repellat, quaerat aliquid odit aliquam exercitationem iste, accusantium rem quidem?</p>
                    </div>
                    <div className="solutie" onClick={Largim}>
                        <div className="fatada">
                            <div className="solution1"></div>
                            <p className="paragraf">Lorem Ipsum</p>
                        </div>
                        <p className="briefing">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum facilis est, doloribus reprehenderit corrupti tempore libero harum veniam porro maxime repellat, quaerat aliquid odit aliquam exercitationem iste, accusantium rem quidem?</p>
                    </div>
                    <div className="solutie" onClick={Largim}>
                        <div className="fatada">
                            <div className="solution1"></div>
                            <p className="paragraf">Lorem Ipsum</p>
                        </div>
                        <p className="briefing">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum facilis est, doloribus reprehenderit corrupti tempore libero harum veniam porro maxime repellat, quaerat aliquid odit aliquam exercitationem iste, accusantium rem quidem?</p>
                    </div>
                    <div className="solutie" onClick={Largim}>
                        <div className="fatada">
                            <div className="solution1"></div>
                            <p className="paragraf">Lorem Ipsum</p>
                        </div>
                        <p className="briefing">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum facilis est, doloribus reprehenderit corrupti tempore libero harum veniam porro maxime repellat, quaerat aliquid odit aliquam exercitationem iste, accusantium rem quidem?</p>
                    </div>
                    <button className="b6"><p>Dupa</p></button>
                </div>
            </div>
        </>
    )
}
export default Scoala