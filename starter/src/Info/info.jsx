import Bar from '../searchbar/bar.jsx'
import poza1 from '../assets/hero.png'
import './info.css'
function Info() {
    return (
        <>
            <Bar />
            <div className="tot2">
                <h1>Intelegerea si abordarea anxietatii la copii</h1>
                <div className="continut">
                    <div className="tableofcontents">
                        <p className="paragrafe">Table of contents</p>
                        <ul>
                            <li>Ce este anxietatea?</li>
                            <li>Anxietatea la copii</li>
                            <li>Tipuri de anxietati infantile</li>
                            <li>Cauze</li>
                        </ul>
                    </div>
                    <div className="text">
                        <h2>Ce este anxietatea?</h2>
                        <p className="paragrafe">Anxietatea reprezinta o stare de stres, de îngrijorare, la perceperea unui posibil pericol. Aceasta poate fi utila in multe cazuri, determinandu-te sa fi mai vigilent, sa iei decizii sau sa actionezi intr-un anumit fel, insa in cantitati excesive poate sa aiba chiar efectul opus. In loc sa te facă sa fii mai eficient ajungi sa te blochezi si sa nu mai poti fucntiona normal in viata de zi cu zi din teama de a face un pas gresit.</p>
                        <table className="tabelefecte">
                            <tr>
                                <th>Efecte comportamentale</th>
                                <th>Efecte fiziologice</th>
                            </tr>
                            <tr>
                                <td>-lipsa de incredere</td>
                                <td>-dureri de cap</td>
                            </tr>
                            <tr>
                                <td>-iritabilitate</td>
                                <td>-stari de greata</td>
                            </tr>
                            <tr>
                                <td>-izolare</td>
                                <td>-dificultati in respiratie</td>
                            </tr>
                            <tr>
                                <td>-dificultati in concentrare</td>
                                <td>-transpiratie abudenta</td>
                            </tr>
                            <tr>
                                <td>-frica foarte intensa si nevoia de reasigurare</td>
                                <td>-probleme cu somnul</td>
                            </tr>
                        </table>
                        <h2>Anxietatea la copii</h2>
                        <p className="paragrafe">-a fost diagnosticata formal abia in a doua jumatate a secolului XX
                            Problema: adultii din viata copilului nu abordeaza situatie din timp sau intr-un mod eficient
                            →copilul nu are abilitatile verbale sua intelgerea necesara pentru a ne explica ce se intampla asa ca e foarte important sa avem cunostinte legate de manifestarea anxietatii la copii pentru a reprezenta un sprijin pentru ei + sa ii invatam sa iti gestioneze sentimentele
                            Importanta:  ajunge sa impiedice copilul din a se dezvolta corect dpdv social, emotional si psihologic si anxietatea se poate propaga in mai multe domenii din viata sa si sa se agraveze pe parcurs
                            -anxietatea nu este intotdeauna despre ceva periculos in mod obiectiv: trebuie sa intelegem mai intai motivul fricii si sa fie ghidati cum trebuie prin aceste stari -NU e indeajuns doar sa le explici
                        </p>
                        <div className="prevenire">
                            <h2>Prevenire</h2>
                            <p className="paragrafe">-comunicare eficienta cu cei mici(simt ca au un sprijin si totodata isi dezvolta inteligenta emotionala)
                                -crearea unei rutine
                                -copii imita adultii ⇒ si parintii trebuie sa aiba grija de propriile vicii si sa invete deodata cu copilul
                                -Reducerea presiunii și a perfecționismului -mediu in care greselile sunt acceptate
                                -expunere gradata la experiente noi
                                -limitarea timpului petrecut cu tehnologia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Info