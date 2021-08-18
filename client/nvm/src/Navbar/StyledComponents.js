import styled  from "styled-components"
import { theme } from "../utils/Theme";

export const NavBarContainer = styled.div`
    display: grid;
    grid-template-columns:1fr 2fr 3fr 0.25fr;
    position: sticky;
    align-items: center;
    z-index:1000;
    padding:1rem;
    background:${({Darkmode}) => Darkmode? 'transparent':   theme.colors.black};
    color:white;
    @media screen and (max-width:768px){
    grid-template-columns:1fr 2fr ;

    }
`

export const Navbar_logo = styled.div`
    display: inline-block;
    font-weight:bold;
    font-size:2rem;
    /* padding-top: .3125rem;
    padding-bottom: .3125rem; */
    /* color:${({Darkmode}) => Darkmode?theme.colors.primary:   theme.colors.white}; */
    /* background:${theme.colors.primary}; */
    color:${theme.colors.primary};

    border-radius:10px;
    padding:.5rem 2rem;
    margin-right: 1rem;
    line-height: inherit;
    white-space: nowrap;
    cursor: pointer;
`
export const MenuContainer = styled.div`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    justify-content:flex-end;
    display:flex;
    @media screen and (min-width:768px){
        display: none;
    }
`