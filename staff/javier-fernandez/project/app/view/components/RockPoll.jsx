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
                    <h1 className="panel-title">¿cual es tu subgenero favorito?</h1>
                </div>

                <div className="panel-body weblator-poll-vote">
                    ::before
                <div className="alert alert-sucess">Gracias</div>
                <div className="alert alert-warning">
                "ya hemos registrado tu voto en esta encuesta."
                </div>
                <div className="alert alert-danger">Selecciona una opción</div>
                <ul>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label">Hard Rock</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label">rock clasico</label>
                    </li>
                    <li>
                        <input type="type" name="weblator-chart-options"/>
                        <label className="weblator-poll-label">Pop Rock</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label">Punk Rock</label>
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