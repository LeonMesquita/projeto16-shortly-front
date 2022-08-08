import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import Context from '.././contexts/Context';

export default function NavbarLink({linkto, text}){
    const {setActiveLink, activeLink} = useContext(Context);
    function clickLink(){
        setActiveLink(text);
    }
    return(
        <LinkStyle color={activeLink === text ? "#5D9040" : "grey"}>
        <Link to={linkto} onClick={() => clickLink()}>
            {text}
        </Link>
        </LinkStyle>

    )
}

const LinkStyle = styled.div`
    a{
        color: ${props => props.color};
    }
`