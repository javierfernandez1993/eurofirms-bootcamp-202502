import { useState } from 'react'

import { logic } from '../../logic'

export const RockPoll = ({ onRockClicked }) => {
    const [resultPoll, setResultPoll] = useState()
    const handleRockClicked = () => onRockClicked()
    const handleVoteClicked = () => {
        const selectedRadio = document.querySelector("input[name=weblator-chart-options]:checked")
    const resultElement = document.getElementById("result")
    const valuePoll = selectedRadio.value 
    resultElement.textContent = valuePoll
    setResultPoll(valuePoll)
    }
    console.log("RockPoll -> render ")

    return  <div className="2-xl">
        <i className="text-2xl" style= {{fontFamily: "'Rock Salt'"}}>METALQUEST</i>

        <div className="weblator-poll-container" data-results data-poll-id="75">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 className="panel-title" style= {{fontFamily: "'Rock Salt'"}}>¿cual es tu subgenero favorito?</h1>
                </div>

                <div className="panel-body weblator-poll-vote">
                    ::before
                <div className="alert alert-sucess" style= {{fontFamily: "'Rock Salt'"}}>Gracias</div>
                <div className="alert alert-warning" style= {{fontFamily: "'Rock Salt'"}}>
                "ya hemos registrado tu voto en esta encuesta."
                </div>
                <div className="alert alert-danger" style= {{fontFamily: "'Rock Salt'"}}>"Selecciona una opción"</div>
                <ul>
                    <li>
                        <input type="radio" value="hardrock" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Hard Rock</label>
                    </li>
                    <li>
                        <input type="radio" value="rockclasico" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>rock clasico</label>
                    </li>
                    <li>
                        <input type="radio" value="poprock" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Pop Rock</label>
                    </li>
                    <li>
                        <input type="radio" value="punkrock" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Punk Rock</label>
                    </li>
                </ul>
                </div>
                <div className="panel-footer">
                    <div className="button-vote">
                        <button className="btn btn-default   bg-black text-white weblator-poll-submit" type="button" onClick={handleVoteClicked}>votar</button>
                    </div>
                        <p id="result">{resultPoll}</p>
                </div>
            </div>
        </div>
    </div>
}