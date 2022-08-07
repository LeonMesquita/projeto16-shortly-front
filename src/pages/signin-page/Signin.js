import StandardButton from '../../components/StandardButton';
import TextForm from '../../components/TextForm';
import { useState, useContext } from 'react';
import Context from '../../contexts/Context';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const [email, setEmail] = useState('lelo@gmail.com');
    const [password, setPassword] = useState('12345');
    const {apiUrl, setUserName, setToken} = useContext(Context);
    const navigate = useNavigate();
    

    async function submitLogin(e){
        e.preventDefault();
        const body = {
            email,
            password
        }

        try{
            const promise = await axios.post(`${apiUrl}/signin`, body);
          //  console.log(promise.data);
            setToken(promise.data);
            navigate('/');

        }catch(error){
            console.log(error);
            alert('Não foi possível fazer login')
        }//
    }
    return(
        <> 
        <TextForm onSubmit={submitLogin}>
            <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input placeholder='Senha' value={password} onChange={e => setPassword(e.target.value)}/>
            <StandardButton buttonText='Entrar'/>
        </TextForm>
        </>
            
       
    );
}
