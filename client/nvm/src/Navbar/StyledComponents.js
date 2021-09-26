import styled  from "styled-components"
import { theme } from "../utils/Theme";
export const LogoImage = styled.img`
width: 6rem;
height: 100%;
object-fit: contain;
align-items: center;
justify-items: center;
z-index: -1;
position: absolute;
top: 0;
left: 0;

`
export const NavBarContainer = styled.div`
    display: grid;
    grid-template-columns:1fr 3fr 3fr 0.25fr;
    position: sticky;
    align-items: center;
    z-index:1000;
    /* padding:1rem; */
    background:${({Darkmode}) => Darkmode? 'transparent':   theme.colors.black};
    /* color:${({Darkmode}) => Darkmode? theme.colors.white:   theme.colors.black}; */
    @media screen and (max-width:768px){
    grid-template-columns:1fr 2fr ;

    }
`

export const Navbar_logo = styled.div`
    display: inline-block;
    font-weight:bold;
    font-size: 60px;

    /* padding-top: .3125rem;
    padding-bottom: .3125rem; */
    /* color:${({Darkmode}) => Darkmode?theme.colors.primary:   theme.colors.white}; */
    /* background:${theme.colors.primary}; */
    color:${theme.colors.primary};
    /* text-shadow: -6px -6px 16px red, 
              6px 6px 16px hsla(240, 30%, 86%, 1), 
              inset 6px 6px 16px hsla(240, 30%, 86%, 1), 
              inset -6px -6px 16px white;
            
            
            ; */
           
    border-radius:50%;
    padding:0 2rem;
    margin-right: 1rem;
    line-height: inherit;
    white-space: nowrap;
    cursor: pointer;
    background: linear-gradient(to right, #ff8723 50%, #ff8723 50%, #cc2e5d);
    background-size: 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.5s ease-out;
    :hover{
        /* transform:scale(1.08) */
        background-position: 100%;
    }
`
export const MenuContainer = styled.div`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    /* justify-content:flex-end; */
    
 color: white;
    @media screen and (min-width:768px){
        display: none;
    }
`