import React from 'react';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import Landing from './pages/Landing';
import PatientForm from './pages/PatientForm';
import PatientList from './pages/PatientList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/patients" component={PatientList}/>
            <Route path="/give-patient" component={PatientForm}/>
        </BrowserRouter>
    );
}

export default Routes;