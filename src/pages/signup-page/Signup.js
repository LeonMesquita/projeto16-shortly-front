import StandardButton from '../../components/StandardButton';
import TextForm from '../../components/TextForm';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Context from '../../contexts/Context';

import { useState, useContext } from "react";

export default function Signup(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {apiUrl, setUserName} = useContext(Context);
    const navigate = useNavigate();


    async function submitRegister(e){
        e.preventDefault();
        const body = {
            name,
            email,
            password,
            confirmPassword
        }

        try{
            await axios.post(`${apiUrl}/signup`, body);
            setUserName(name);
            navigate("/signin");
        }catch(error){
           alert('Não foi possível realizar o cadastro!');
        }  
    }
    return(
        <> 
        <TextForm onSubmit={submitRegister}>
            <input placeholder='Nome' value={name} onChange={e => setName(e.target.value)}/>
            <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}/>
            <input placeholder='Confirmar Senha' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            <StandardButton buttonText='Cadastrar-se'/>
        </TextForm>
        </>
            
       
    );
}