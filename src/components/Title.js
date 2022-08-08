import styled from 'styled-components';
import logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import Context from '.././contexts/Context';
import NavbarLink from './NavbarLink';
export default function Title(){
    const {token} = useContext(Context);
    const [activeLink, setActiveLink] = useState('');

    return(
        <>
            <NavBar>
                <span>
                    {token === '' ?
                    null :
                    <p>Seja bem-vindo(a), Pessoa!</p>
                    }
                </span>
                {token === '' ? 
                <div>
                    <NavbarLink linkto='/signin' text='Entrar'/>
                    <NavbarLink linkto='/signup' text='Cadastrar-se'/>
                </div>
                :
                <div>
                     <NavbarLink linkto='/' text='Home'/>
                    <NavbarLink linkto='/ranking' text='Ranking'/>
                    <NavbarLink linkto='/signin' text='Sair'/>
                </div>
                
                }
 

            </NavBar>
            <Short>
                <img src={logo} alt='shortly'/>
            </Short>
        </>
    );
}




const NavBar = styled.div`
    height: 10vh;
    justify-content: space-between;
    display: flex;
    align-items: center;
    color: #5D9040;
    font-size: 14px;
    padding-left: 20px;
    width: 1000px;
    margin: auto;
    div{
        
        display: flex;
        width: 200px;
        justify-content: space-evenly;
        align-items: center;
        margin-right: 5px;
    }


    @media(max-width: 1000px) {
    width: 100%;
    }
`

const Short = styled.div`
    width: 500px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;


    img{
        height: 100px;
    }

    @media(max-width: 500px) {
    width: 100%;
    }

    @media(max-width: 310px) {
        h2{
            font-size: 50px;
        }
        img{
            height: 70px;
        }
    }
`