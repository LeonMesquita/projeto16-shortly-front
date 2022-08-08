import StandardButton from '../../components/StandardButton';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Context from '../../contexts/Context';
import { TrashOutline } from 'react-ionicons'
import LoaderSpinner from '../../components/LoaderSpinner';
import { HomePage, UrlsDiv, NotFoundMessage } from './styled';


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

