import {ThreeDots, Oval } from  'react-loader-spinner'
import styled from 'styled-components';


export default function LoaderSpinner({loaderType}){
    return(
        <Loader>
        <Oval 
        height="100"
        width="100"
        color='#80CC74'
        secondaryColor='grey'
        ariaLabel='loading'
        />
        </Loader>
    

    );
}
//#00BFFF
const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15vh;
`