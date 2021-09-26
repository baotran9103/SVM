import styled from "styled-components";
import {theme} from '../../utils/Theme'
import {Link as LinkR} from 'react-router-dom'
export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding:1rem;

    @media screen and  (max-width:768px){
        display: none;
    }
`
export const NavButton = styled.div`
    display:flex;
    /* background:${({id})=> id===1 ? 'transparent':theme.colors.primary}; */
    background: linear-gradient(to right, transparent 50%, #ff8723 50%, #cc2e5d);
    background-size: 200%;
    /* -webkit-background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
    transition: 0.3s ease-out;
    border:0.5px solid ${({id})=> id===1 ?theme.colors.primary :'transparent'};
    color:${({id})=> id===1 ?theme.colors.white :theme.colors.black };
    font-weight:600;
    border-radius:5px;
    justify-content:center;
    align-items:center;
    padding:0.5rem 2rem;
    cursor: pointer;
    margin-left:1rem;
    :hover {
      background-position: -100%;
    }
    :active{
        transform:scale(0.9)
    }

`
export const StickerInfo =styled.a`
position:relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin:0 0.5rem;
    text-decoration: none;
    cursor: pointer;

    `
export const StickerInfoData = styled.div`
    color: ${({Darkmode})=> Darkmode ? theme.colors.white:theme.colors.black};
    /* color:${theme.colors.white} */
    .NavPrice{
          color:${theme.colors.white}

    }
`

export const StickerPercent = styled.div`
    color: ${({ispositive})=> ispositive?theme.colors.primary:theme.colors.red}
`

export const LauncherinputContainer = styled.div`
    display: flex;
    margin:0 0.5rem;
`
export const LauncherInput = styled.input`
    display: flex;
    padding:0.25rem 0.5rem;
    border-radius:5px;
    width:120px;
    transition:0.4s all ease-in-out;
    :focus{
        width:220px;
    }
    border:0.5px solid gray;
    :focus{
        color: ${theme.colors.blue};
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    } 

`
export const SearchButton = styled.button`
border:none;
    display: flex;
    text-decoration:none;
    color: ${theme.colors.primary};
    cursor: pointer;
    align-items:center;
    justify-content: center;
    border-radius:15px;
    /* border:1px solid; */
    background: ${theme.colors.white};
    padding:0.25rem 0.75rem;
    transition:all 0.3s ease;
    margin-left:0.5rem;
    box-shadow: inset 0 -5px 5px rgba(0,0,0,0.1),
              0 5px 10px rgba(0,0,0,0.1),
              0 10px 15px rgba(0,0,0,0.1);
  font-family:arial, sans-serif;
  letter-spacing:1.5px;
    padding:8px 12px;
    margin:12px;
  :hover{
        background:${theme.colors.primary};
        color:#fff;
    transform:scale(1.08);

    }
    :active {
    transform:scale(1);
    /* color:${theme.colors.primary}; */
    color:#fff;

    box-shadow: inset 0 -7px 5px rgba(0,0,0,0.02),
                inset 0 5px 10px rgba(0,0,0,0.15) ;
  }
`