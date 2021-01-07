import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

function PatientForm () {

    const history = useHistory();
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [RG, setRG] = useState('');
    const [CPF, setCPF] = useState('');
    const [mothersName, setMothersName] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [address, setAdrress] = useState('');
    const [number, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('')
    const [complement, setComplement] = useState('');

       
    
    function handleCreatePatient (e: FormEvent) {
        e.preventDefault();
        api.post('/classes', {
            name,
            birthday,
            RG,
            CPF,
            mothersName,
            address,
            phone1,
            phone2,
            number,
            city,
            district,
            state,
            complement,
        }).then(res => {
            alert('Cadastros realizado com sucesso.');
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro.');
        });
    }

    return (
        <div id="page-teacher-form" className="container">
           <PageHeader 
            title="Formulário de cadastro para novo paciente"
            /> 

            <main>
                <form onSubmit={handleCreatePatient}>
                    <fieldset>
                        <legend>Dados do paciente</legend>

                        <Input  
                            label="Nome completo" 
                            name="name" 
                            value={name} 
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        
                        <Input  
                            label="Documento" 
                            name="RG" 
                            value={RG} 
                            onChange={(e) => { setRG(e.target.value) }}
                        />
                        <Input  
                            label="CPF" 
                            name="CPF" 
                            value={RG} 
                            onChange={(e) => { setCPF(e.target.value) }}
                        />

                        <Input  
                            label="Data de nascimento" 
                            name="birthday" 
                            value={birthday} 
                            onChange={(e) => { setBirthday(e.target.value) }}
                        />

                        <Input  
                            label="Nome da mãe" 
                            name="mothersName" 
                            value={mothersName} 
                            onChange={(e) => { setMothersName(e.target.value) }}
                        />
                        <Input 
                            name="Telefone para contato (principal)" 
                            label="phone1" 
                            value={phone1} 
                            onChange={(e) => { setPhone1(e.target.value) }}
                        />
                        <Input 
                            name="Telefone para contato (secundário)" 
                            label="phone2" 
                            value={phone2} 
                            onChange={(e) => { setPhone2(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>

                        
                        <Input  
                            label="Logradouro" 
                            name="logradouro"
                            value={address}
                            onChange={(e) => {setAdrress(e.target.value)}}
                        />

                        <Input  
                            label="Número" 
                            name="number"
                            value={number}
                            onChange={(e) => {setNumber(e.target.value)}}
                        />

                        <Input  
                            label="Complemento" 
                            name="complement"
                            value={complement}
                            onChange={(e) => {setComplement(e.target.value)}}
                        />

                        <Input  
                            label="Bairro" 
                            name="district"
                            value={district}
                            onChange={(e) => {setDistrict(e.target.value)}}
                        />

                        <Input  
                            label="Cidade" 
                            name="city"
                            value={city}
                            onChange={(e) => {setCity(e.target.value)}}
                        />

                        <Input  
                            label="Estado" 
                            name="state"
                            value={state}
                            onChange={(e) => {setState(e.target.value)}}
                        />
                    
                    </fieldset>


                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os campos obrigatórios
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default PatientForm;