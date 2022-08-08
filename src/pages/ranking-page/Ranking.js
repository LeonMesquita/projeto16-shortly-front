import trophy from '../../assets/images/trophy.svg';
import Context from '../../contexts/Context';
import axios from 'axios';
import LoaderThreeDots from '../../components/LoaderThreeDots';
import { RankingTitle, RankingArea } from './styled';


import {useContext, useEffect, useState } from "react";
export default function Ranking(){
    const {token, apiUrl} = useContext(Context);
    const [ranking, setRanking] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getRanking(){
        setIsLoading(true);
        try{
            const promise = await axios.get(`${apiUrl}/ranking`);
            
            setRanking(promise.data);
            
        }catch(error){
            alert('Não foi possível obter a lista de ranking')
        }
        setIsLoading(false);

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
                {
                    isLoading ? <LoaderThreeDots />
                    :

                
                ranking.length === 0 ?
                null
                :
                ranking.map((rank, index) => <p key={index}>{index+1}. {rank.name} - {rank.linksCount} links - {rank.visitCount} visualizações</p>)
                
                }

            </RankingArea>
        {token == "" ? 
        <h1>Crie sua conta para usar nosso serviço!</h1>
        : null
        }
        </>
    );
}