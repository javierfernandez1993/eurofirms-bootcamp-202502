import { useState } from  'react'

import { logic } from '../../logic'

export const MetalPoll = ({ onMetalClicked }) => {
    const [resultPoll, setResultPoll] = useState()
    const handleMetalClicked = () => onMetalClicked()
    const handleVoteClicked = () => {
        const selectedRadio = document.querySelector("input[name=weblator-chart-options]:checked")
        const resultElement = document.getElementById("result")
        const valuePoll = selectedRadio.value
        resultElement.textContent = valuePoll
        setResultPoll(valuePoll)
    }

    console.log("MetalPoll -> render ")

    return <div className="2-xl">
        <i className="text-2xl" style= {{fontFamily: "'Rock Salt'"}}>METALQUEST</i>

        <div className="weblator-poll-container" data-results data-poll-id="75">
            <div className="panel panel-default">
                <h1 className="paanel-title" style= {{fontFamily: "'Rock Salt'"}}>¿cual es tu subgenero favorito?</h1>
            </div>

            <div className="pannel-body weblator-poll-vote">
                ::before
                <div className="alert alert-sucess" style= {{fontFamily: "'Rock Salt'"}}>Gracias</div>
                <div className="alert alert-warning" style= {{fontFamily: "'Rock Salt'"}}>ya hemos registrado tu voto en esta encuesta.</div>
                <div className="alert alert-danger" style= {{fontFamily: "'Rock Salt'"}}>"Selecciona una opcion."</div>
                <ul>
                    <li>
                        <input type="radio" value="heavymetal" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Heavy Metal</label>
                    </li>
                    <li>
                        <input type="radio" value="powermetal" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Power Metal</label>
                    </li>
                    <li>
                        <input type="radio" value="thrashmetal" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Thrash Metal</label>
                    </li>
                    <li>
                        <input type="radio" value="metalextremo" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Metal Extremo</label>
                    </li>
                    <li>
                        <input type="radio" value="metalalternativo" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Metal Alternativo</label>
                    </li>
                </ul>
            </div>
            <div className="panel-footer">
                <div className="button-vote">
                    <button className="btn btn-default bg-black text-white weblator-poll-submit" type="button" onClick={handleVoteClicked}>votar</button>
                </div>
                    <p id="result">{resultPoll}</p>
            </div>
        </div>
    </div>
}