import {ThreeDots} from  'react-loader-spinner'
import styled from 'styled-components';


export default function LoaderSpinner({loaderType}){
    return(
        <Loader>
                    <ThreeDots 
            height="80"
            width="80"
            color='#80CC74'
            ariaLabel='loading'
        />
        </Loader>
    );
}
//#00BFFF
const Loader = styled.div`
    display: flex;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    margin: auto;
`