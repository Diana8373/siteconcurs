import './3lucruri.css'
function Schimb1() {
    var element = document.getElementById("primulbg");
    element.classList.toggle("completat");
    var fata=document.getElementbyId("primul");
    if (fata.style.display ==="block"){
        fata.style.display="none";
    }
    else{
        fata.style.display="block";
    }
}
function Lucruri3() {
    return (
        <>
            <div className="tot6">
                <div className="spate" id="primulbg">
                    <div className="lucruri3" id="primul">
                        <div className="pozarandom"></div>
                        <p className="paragrafe">Trei lucruri pe care le vezi</p>
                        <input type="text" placeholder="Type here..." className="necompletat" required="text" />
                        <input type="text" placeholder="Type here..." className="necompletat" />
                        <input type="text" placeholder="Type here..." className="necompletat" />
                        <div className="submitbutton" onClick={Schimb1}><p>Gata</p></div>
                    </div>
                </div>
                <div className="spate" id="aldoileabg">
                    <div className="lucruri3" id="aldoilea">
                        <div className="pozarandom"></div>
                        <p className="paragrafe">Trei lucruri pe care le vezi</p>
                        <input type="text" placeholder="Type here..." className="necompletat" required="text" />
                        <input type="text" placeholder="Type here..." className="necompletat" />
                        <input type="text" placeholder="Type here..." className="necompletat" />
                        <div className="submitbutton" onClick={Schimb1}><p>Gata</p></div>
                    </div>
                </div>
                <div className="spate" id="altreileabg">
                    <div className="lucruri3" id="altreilea">
                        <div className="pozarandom"></div>
                        <p className="paragrafe">Trei lucruri pe care le vezi</p>
                        <input type="text" placeholder="Type here..." className="necompletat" required="text" />
                        <input type="text" placeholder="Type here..." className="necompletat" />
                        <input type="text" placeholder="Type here..." className="necompletat" />
                        <div className="submitbutton" onClick={Schimb1}><p>Gata</p></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lucruri3;