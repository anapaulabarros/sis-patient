import React from 'react'

import logoImg from '../../assets/images/logo.png'
import landingImg from '../../assets/images/undraw_medicine_b1ol.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'

import './styles.css'
import {Link} from 'react-router-dom'

function Landing() {

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="e.Patient"/>
                    <h2>Gestão ágil de pacientes.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de gestão" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/patients" className="study">
                        <img src={studyIcon} alt="listar"/>
                        Listar pacientes
                    </Link>
                    <Link to="/give-patient" className="give-classes">
                        <img src={giveClassesIcon} alt="cadastrar"/>
                        Cadastrar paciente
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;