import React, {useState, useEffect} from 'react';


import PageHeader from '../../components/PageHeader';
import PatientItem, { Patient } from '../../components/PatientItem';
import './styles.css';
import api from '../../services/api';

function PatientList () {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        api.get('/patients').then(response => {
            setPatients(response.data);
        });
    }, []);

    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Esses são os pacientes disponíveis">
            </PageHeader> 
            <main>
                {patients.map((patient: Patient) => {
                    return <PatientItem key={patient.id} patient={patient} />
                })}
            </main>
        </div>
    );
}

export default PatientList;