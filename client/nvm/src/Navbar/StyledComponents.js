import styled  from "styled-components"
import { theme } from "../utils/Theme";

export const NavBarContainer = styled.div`
    display: flex;
    position: sticky;
    align-items: center;
    z-index:1000;
    padding:1rem;
    background:${({Darkmode}) => Darkmode? 'transparent':   theme.colors.secondary};
`

export const Navbar_logo = styled.div`
    display: inline-block;
    font-weight:bold;
    /* padding-top: .3125rem;
    padding-bottom: .3125rem; */
    padding:.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    cursor: pointer;
`
export const MenuContainer = styled.div`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    @media screen and (min-width:768px){
        display: none;
    }
`