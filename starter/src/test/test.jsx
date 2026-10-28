import Bar from '../searchbar/bar.jsx'
import './test.css'
function Test() {
    return (
        <>
            <Bar />
            <div className="header">
                <div className="label">
                    <h1 className="titlu">Test de personalitate</h1>
                    <p className="paragrafe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque est iure mollitia exercitationem, praesentium obcaecati repudiandae voluptas alias ratione sequi ipsum odio fuga iusto laboriosam, eum illo soluta minus.</p>
                </div>
            </div>
            <div className="tot3">
                <p className="paragrafe">Pesonalitatea reprezinta factorul principal care determina predispunerea cuiva la anxietate. Trăsăturile unei persoane determina tipare comportamentale(modul in care reactionam cand suntem pusi intr-o anumita situatie), deoarece infleunteaza modul in care noi ne raportam la lumea din jur. De exemplu, daca esti o persoana introvertita vei vedea interacțiunile cu alți oameni ca fiind obositoare sau complicate, iar atunci cand esti pus intr-un context social e mult mai probabil sa ramai rezervat si sa nu vorbesti foarte mult.
                    Anxietatea apare in momentul in care ceva de ingrijoreaza, asa ca, luand in considerare cele mentionate precedent, trasaturile care ne fac mai predispusi acestei stari sunt cele care ne fac sa fim mai usor afectati de mediul incojurator si cele care ne impiedica din a ne gestiona sentimentele cum trebuie, acesta ajungand sa devina copleșitoare.
                </p>
                <div className="modelbigfive">
                    <h2>Modelul "Big Five"</h2>
                    <p className="paragrafe">Modelul “Big Five” reprezinta una dintre cele mai cunoscute metode de evaluare a personalității in prezent, identificand 5 dimensiuni fundamentale(trasaturi) care determina comportamentul cuiva. Acestea sunt:</p>
                    <ul>
                        <li className="paragraf">Deschiderea la experiențe noi: persoanele cu un grad ridicat de deschidere sunt mai curiosi si mai spontani, pe cand cei cu un grad scazut de deschidere tind sa aiba nevoie o rutina sau de un stil de viata conventional</li>
                        <li className="paragraf">Conștiinciozitatea: reprezinta trasatura unei persoane de a fi responsabila si focusata pe indeplinirea unor obiective. Persoanele constiincioase trateaza sarcinile cu seriozitate si au mai mult autocontrol, pe cand persoanele care nu sunt mai relaxate, dezorganizate sau chiar impulsive</li>
                        <li className="paragraf">Extraversiunea: este trasatura care defineste orientarea unei persoane inspre lumea exterioare sau inspre cea interioara. O persoana extroverita este mai sociala si prefera sa-si petreaca timpul cu alti, pe cand o persoana introvertita este mai rezervata si prefera solitudinea</li>
                        <li className="paragraf">Agreabilitatea: defineste capacitatea unei persoane de a coopera cu cei din jur. O persoana agreabila pot fi mai altruisti si sa se increada in cei din jur, pe cand cei neagreabili sunt mai critici si neincrezatori</li>
                        <li className="paragraf">Neuroticismul(stabilitatea emotionala): reprezinta predispunerea oamenilor inspre a simti emotii negative. Oamenii nevrotici tind sa fie suparati sau sa reactioneze negativ mai usor, pe cand cei putin nevrotici sunt mai stabili emotionali si siguri pe ei insisi.</li>
                    </ul>
                    <p className="paragrafe">Dintre acestea cinci, cele care pot avea un efect direct asupra sunt neuroticismul, extraversiunea si conștiinciozitatea. Mai intai, neuroticismul, dupa cum este mentionat si in definitie, te face mai predispus emotiilor negative printre care se numara si stresul si ingrijorarea. Acestea doua duc mai apoi la anxietate, mai multe lucruri ajungand sa reprezinte un posibil pericol. Pe urma, un nivel scazut de extroversiune poate face ca un individ sa nu si poate gestiona cum trebuie emotiile, evitand a le comunica cu altcineva, sau sa fie mai predispus anxietatii sociale, interactiunile cu alti reprezentand ceva neplacut. Nu in ultimul rand, un grad scazut de conștiinciozitate te poate determina sa urmezi metode de gestionare a emotiilor intr-un mod mai putin eficient sau sa fii mai impulsiv emotional  </p>
                </div>
            </div>
            <div className="header">
                    <button className="b5">Afla cat de predispus esti anxietatii!</button>
            </div>
        </>
    )
}
export default Test