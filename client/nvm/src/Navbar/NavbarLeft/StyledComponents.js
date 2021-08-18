import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../utils/Theme'

export const NavLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    /* justify-content:flex-end; */
    a {
        width:100%;
        /* color:${({Darkmode}) =>Darkmode? theme.colors.primary:theme.colors.black}; */
        color:${theme.colors.white};
        font-weight:bold;
        font-size:1rem;
        :hover{
            opacity:0.8;
            transform:scale(1.08)
        }
    }
    @media screen and  (max-width:768px){
        display: none;
    }

`
export const NavDiscord = styled.a`
    text-decoration: none;
    padding: 0.5rem;
    text-align:center;
  
`
export const NavLink = styled(LinkR)`
    text-decoration:none;
    padding:0.5rem;
    text-align:center;
`

export const NavDropdown = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    cursor: pointer;
`