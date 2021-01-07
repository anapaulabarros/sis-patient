import React from 'react';

import './styles.css';

export interface Patient {
    id: number
    name: string
    RG: string
    CPF: string
    state: string
    city: string
    number: string
    complement: string
    address: string
    district: string
}


interface PatientItemProps {
    patient: Patient
}

const PatientItem: React.FC<PatientItemProps> = ({ patient }) => {

    return(
        <article className="teacher-item">
            <header>
                <div>
                    <strong>{patient.name}</strong>
                    <span>Documento: {patient.RG} | CPF: {patient.CPF}</span>
                    <span>End.: {patient.address}, {patient.number}, {patient.district}. {patient.city} - {patient.state}</span> 
                </div>    
            </header>
        </article>
    );
}

export default PatientItem;