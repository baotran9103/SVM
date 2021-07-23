import { Link as LinkR} from 'react-router-dom'
import styled from 'styled-components'
import {theme} from '../../utils/Theme'

export const NavLinks = styled.div`
    display: flex;
    @media screen and  (max-width:768px){
        display: none;
    }

`
export const NavDiscord = styled.a`
    text-decoration: none;
    padding: 0.5rem;
    text-align:center;
    color:${theme.colors.green};
`
export const NavLink = styled(LinkR)`
    text-decoration:none;
    padding:0.5rem;
    text-align:center;
    color:${theme.colors.green};
`

export const NavDropdown = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    cursor: pointer;
`