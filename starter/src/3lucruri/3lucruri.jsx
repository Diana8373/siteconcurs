import './3lucruri.css'
function Schimb1() {
    var element = document.getElementById("primul");
    element.classList.toggle("completat");
}
function Lucruri3() {
    return (
        <>
            <div className="tot6">
                <div className="lucruri3" id="primul">
                    <div className="pozarandom"></div>
                    <p className="paragrafe">Trei lucruri pe care le vezi</p>
                    <input type="text" placeholder="Type here..." className="necompletat" required="text" />
                    <input type="text" placeholder="Type here..." className="necompletat" />
                    <input type="text" placeholder="Type here..." className="necompletat" />
                    <div className="submitbutton" onClick={Schimb1}><p>Gata</p></div>
                </div>
                <div className="lucruri3" id="aldoilea">
                    <div className="pozarandom"></div>
                    <p className="paragrafe">Trei lucruri pe care le auzi</p>
                    <input type="text" placeholder="Type here..." className="necompletat" />
                    <input type="text" placeholder="Type here..." className="necompletat" />
                    <input type="text" placeholder="Type here..." className="necompletat" />
                    <div className="submitbutton"><p>Gata</p></div>
                </div>
                <div className="lucruri3">
                    <div className="pozarandom"></div>
                    <p className="paragrafe">Trei lucruri pe care le simti</p>
                    <input type="text" placeholder="Type here..." className="necompletat" />
                    <input type="text" placeholder="Type here..." className="necompletat" />
                    <input type="text" placeholder="Type here..." className="necompletat" />
                    <div className="submitbutton"><p>Gata</p></div>
                </div>
            </div>
        </>
    );
}
export default Lucruri3;