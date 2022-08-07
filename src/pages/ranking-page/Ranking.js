import styled from 'styled-components';
import trophy from '../../assets/images/trophy.svg';
import Context from '../../contexts/Context';
import axios from 'axios';

import {useContext, useEffect, useState } from "react";
export default function Ranking(){
    const {token, apiUrl} = useContext(Context);
    const [ranking, setRanking] = useState([]);
    async function getRanking(){
        try{
            const promise = await axios.get(`${apiUrl}/ranking`);
            console.log(promise.data)
            setRanking(promise.data);

        }catch(error){
            alert('Não foi possível obter a lista de ranking')
        }

    }

    useEffect(async () => {
        getRanking();    

    }, []);
    return(
        <>
            <RankingTitle>
                <img src={trophy} alt='troféu'/>
                <h1>Ranking</h1>
            </RankingTitle>
            <RankingArea>
                {ranking.length === 0 ?
                null
                :
                ranking.map((rank, index) => <p>{index+1}. {rank.name} - {rank.linksCount} links - {rank.visitCount} visualizações</p>)
                }

            </RankingArea>
        {token == "" ? 
        <h1>Crie sua conta para usar nosso serviço!</h1>
        : null
        }
        </>
    );
}


const RankingTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 73px;

    img{
        height: 50px;
        margin-right: 10px;
    }
    h1{
        margin-top: 0;
    }

`


const RankingArea = styled.div`
    width: 1017px;
    height: 28vh;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;

    margin: auto;
    margin-top: 57px;
    padding-bottom: 20px;
    padding-left: 20px;
    overflow-y: scroll;


    p{
        font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    color: #000000;
    margin-top: 19px;
    }
    


    @media(max-width: 1020px) {
    width: 95%;
  }

`