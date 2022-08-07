import styled from 'styled-components';
import short from '../assets/images/short.svg';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import Context from '.././contexts/Context';
export default function Title(){
    const {token} = useContext(Context);

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
                    <Link to='/signin'>
                        Entrar
                    </Link>
                    <Link to='/signup'>
                        Cadastrar-se
                    </Link>
                </div>
                :
                <div>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/ranking'>
                        Ranking
                    </Link>
                    <Link to='/signin'>
                        Sair
                    </Link>
                </div>
                
                }
 

            </NavBar>
            <Short>
                <h2>Shortly</h2>
                <img src={short} alt='shortly'/>
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
    div{
        
        display: flex;
        width: 200px;
        justify-content: space-evenly;
        align-items: center;
        margin-right: 30px;
    }
    a{
        color: #5D9040;
    }
`

const Short = styled.div`
    width: 500px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-size: 64px;
        color: #000000;
    }

    img{
        height: 70px;
        margin-left: 10px;
    }

    @media(max-width: 500px) {
    width: 100%;
    }

    @media(max-width: 290px) {
        h2{
            font-size: 50px;
        }
        img{
            height: 50px;
        }
    }
`