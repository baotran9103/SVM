import styled from "styled-components";
import {theme} from '../../utils/Theme'

export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding:1rem;
`

export const StickerInfo =styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin:0 0.5rem;

    `
export const StickerInfoData = styled.div`

`

export const StickerPercent = styled.div`
    color: ${({ispositive})=> ispositive?theme.colors.green:theme.colors.red}
`

export const LauncherinputContainer = styled.div`
    display: flex;
    margin:0 0.5rem;
`
export const LauncherInput = styled.input`
    display: flex;
    padding:0.25rem 0.5rem;
    border-radius:5px;
    width:220px;
    border:0.5px solid gray;
    :focus{
        color: ${theme.colors.blue};
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    } 

`
export const SearchButton = styled.div`
    display: flex;
    background: transparent;
    color: ${theme.colors.green};
    cursor: pointer;
    align-items:center;
    justify-content: center;
    border-radius:5px;
    border:1px solid;
    padding:0.25rem 0.75rem;
    transition:all 0.3s ease;
    :hover{
        background:${theme.colors.green};
        color:#fff;
    }
`