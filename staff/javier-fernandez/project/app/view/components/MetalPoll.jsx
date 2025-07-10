import { useState } from  'react'

import { logic } from '../logic'

export const Metal = ({ onMetalClicked }) => {
    const handleMetalClicked = () => onMetalClicked()

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
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Heavy Metal</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Power Metal</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Thrash Metal</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Metal Extremo</label>
                    </li>
                    <li>
                        <input type="text" name="weblator-chart-options"/>
                        <label className="weblator-poll-label" style= {{fontFamily: "'Rock Salt'"}}>Metal Alternativo</label>
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