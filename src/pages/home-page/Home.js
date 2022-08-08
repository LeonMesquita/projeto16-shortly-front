import styled from 'styled-components';
import StandardButton from '../../components/StandardButton';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Context from '../../contexts/Context';
import { TrashOutline } from 'react-ionicons'
import LoaderSpinner from '../../components/LoaderSpinner';


export default function Home(){
    const [url, setUrl] = useState('');
    const {apiUrl, setUserName, authorization} = useContext(Context);
    const [shortenedUrls, setShortenedUrls] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getUserUrls(){
        setIsLoading(true);
        
        try{
            const promise = await axios.get(`${apiUrl}/users/me`, authorization);
            setShortenedUrls(promise.data.shortenedUrls);
            

        }catch(error){
            alert('Erro ao obter urls do usuário!');
        }
        setIsLoading(false);
    }


    async function shortenUrl(){
        try{
            const promise = await axios.post(`${apiUrl}/urls/shorten`,{url}, authorization);
            getUserUrls();
        }catch(error){
            alert('Não foi possível encurtar a URL!');
        }
        
    }


    useEffect(async () => {
        getUserUrls();    

    }, []);


    async function openUrl(shortUrl){
       
        try{
            const promise = await axios.get(`${apiUrl}/urls/open/${shortUrl}`);
            //<Redirect to={url} />
            
            const url = promise.data.replace('OK. Redirecting to ', '');
            
           window.open(url);
           getUserUrls();
        }catch(error){
            alert('Não foi possível abrir a URL!');
        }
    }

    async function deleteUrl(id){
        try{
            await axios.delete(`${apiUrl}/urls/${id}`, authorization);
            getUserUrls();
            
        }catch(error){
            alert('Não foi possível deletar a URL!');
        }
    }
    
    return(
        shortenedUrls ?
        
        
    
        <HomePage>
            <span>
                <input required={true} placeholder='Links que cabem no bolso' value={url} onChange={e => setUrl(e.target.value)}/>
                <StandardButton buttonText='Encurtar link' onclick={shortenUrl}/>
            </span>
            {
                isLoading ? 
                <LoaderSpinner />
                :
                shortenedUrls.length === 0 ?
                //
                <NotFoundMessage>
                     <p>Nenhuma url encontrada</p> 
                </NotFoundMessage>   
              :
             shortenedUrls.map((url, index) =>
             <UrlsDiv key={index}>
                 <div onClick={() => openUrl(url.shortUrl)}>
                     <span>
                         <p>{url.url}</p>
                     </span>
                     
                     <p>{url.shortUrl}</p>
                     <p>Quantidade de visitantes:{url.visitCount}</p>
                 </div>
                 <button onClick={() => deleteUrl(url.id)}>
                     <TrashOutline
                         color={'#EA4F4F'} 
                         height="50px"
                         width="30px"
                     />
                 </button>
             </UrlsDiv>)  
            }
        </HomePage>

        :null
    );
}

const HomePage = styled.div`


  
  width: 1000px;
  margin: auto;
  margin-top: 130px;

  span{
    display: flex;
    justify-content: center;
    
  }

  input{
    margin-right: 40px;
  }

  @media(max-width: 1020px) {
    width: 90%;
  }
`

const UrlsDiv = styled.div`
    height: 60px;
   display: flex;
   margin-top: 42px;

   span{
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
   }

   p{
    overflow: hidden;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
   }

    div{
        width: 85%;
        background: #80CC74;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px 0px 0px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;
    }

    button{
        width: 15%;
        height: 60px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        background: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 0px 12px 12px 0px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    @media(max-width: 640px) {
        p{
            font-size: 8px;
        }
     
  }
`


const NotFoundMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15vh;
    font-size: 25px;
    color: grey;
    font-weight: 700;
`