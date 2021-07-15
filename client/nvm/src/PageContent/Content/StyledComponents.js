import styled from "styled-components";
import {theme} from '../../utils/Theme'
export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
`
export const ContentImage = styled.img`
    max-width: 500px;
    width:100%;
    @media screen and  (max-width:768px){
        display: none;
    }
`
export const Content = styled.div`
@media screen and  (max-width:768px){
       padding:0;
       align-items: center;
       text-align:center;
    }
    display: flex;
    padding-left: 100px;
    flex-direction:column;
    line-height:1.2;
    
    
  
    div, h5, h6 {
    font-weight: 400;
    margin: 0;
    h4{
        span{
            color:${theme.colors.green}

        }
    }
    
}
`



export const ContentInfo = styled.div`
font-size:24px;
span{
        color:${theme.colors.green}
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content:flex-start;
    align-items:center;
    @media screen and  (max-width:768px){
        display: grid;
        align-items: center;    
        justify-items:center;
        row-gap:2rem;
    }
    
`

export const ButtonBound = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    width: 200px;
    padding:1rem 2rem;
    cursor:pointer;
    color:#fff;
    background: ${theme.colors.green};
    border-radius:1rem;
    /* :hover{
        background:#fff;
        color: ${theme.colors.green};
    } */
`

export const ImageButton = styled.image`
    background:transparent;
    width: 100px;
    height: 100%;
    object-fit:contain; 
`