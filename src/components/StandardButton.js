import styled from 'styled-components';

export default function StandardButton({buttonText, onclick}){
    return(
        <Button onClick={onclick}>
            <p>{buttonText}</p>
        </Button>
    );
}






const Button = styled.button`
    width: 182px;
    height: 60px;
    background: #5D9040;
    border-radius: 12px;
    border: none;
    cursor: pointer;


    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
`