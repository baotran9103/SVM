import styled from "styled-components";
import {theme} from '../utils/Theme'
import {Link as LinkR} from 'react-router-dom'
export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    padding:2rem;
    background:${({Darkmode}) => Darkmode? 'transparent':   theme.colors.lightsecondary};
    
    
`

export const FooterLinks = styled.div`
    align-items: center;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px){
        flex-direction:column;
    }
   
`
export const FooterLink = styled(LinkR)`
        padding: 1rem;
        background:transparent;
        color: ${theme.colors.primary};
        text-decoration:none;
        :hover{
            opacity: 0.8
        }
`