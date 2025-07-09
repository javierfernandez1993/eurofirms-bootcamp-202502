import { useState } from  'react'

import { logic } from '../logic'

export const Metal = {{ onMetalClicked }} => {
    const handleMetalClicked = () => onMetalClicked()

    console.log("MetalPoll -> render ")

    return <div className="2-xl">
        <i className="text-2xl" style= {{fontFamily: "'Rock Salt'"}}>METALQUEST</i>

        <div className="weblator-poll-container" data-results data-poll-id="75">
            <div className="panel panel-default">
                <h1 className="paanel-title">¿cual es tu subgenero favorito?</h1>
            </div>

            <div className="pannel-body weblator-poll-vote">
                ::before
                <div className="alert alert-sucess">Gracias</div>
                <div className="alert alert-warning">"ya hemos registrado tu voto en esta encuesta.</div>
                <div className="alert alert-danger">"Selecciona una opcion."</div>
                <ul>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label">Heavy Metal</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label">Power Metal</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label">Thrash Metal</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label">Metal Extremo</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label">Metal Alternativo</label>
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
}