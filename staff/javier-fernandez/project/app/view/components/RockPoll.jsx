import { useState } from 'react'

import { logic } from '../logic'

export const Rock = ({ onRockClicked }) => {
    const handleRockClicked = () => onRockClicked()

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
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Hard Rock</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>rock clasico</label>
                    </li>
                    <li>
                        <input type="type" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Pop Rock</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Punk Rock</label>
                    </li>
                </ul>
                </div>
                <div className="panel-footer">
                    <div className="button-vote">
                        <button className="btn btn-default vote-button weblator-poll-submit"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}