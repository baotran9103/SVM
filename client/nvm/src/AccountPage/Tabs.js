import React,{useState} from 'react'
import styled from 'styled-components'
import { theme } from "../utils/Theme";

function Tabs(props) {
    const Tabs = ["Rewards","Payouts","Partials"]
    return (
        <TabsContainer currentIndex={props.currentIndex}>
            {/* <div className='background'>{Tabs[props.currentIndex]}</div> */}
            {
                Tabs.map((tab,id)=> (
                    <Tab key={id} isActive={props.currentIndex===id} onClick={()=> props.setcurrentIndex(id)}>
                        
                        {tab}


                    </Tab>
                ))
            }
            
        </TabsContainer>
    )
}

export default Tabs

const TabsContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom: 1.5px solid #777;
margin:1rem ;
flex-wrap:wrap;
.background{
    position:absolute;
    width:124px;
    height:39.5px;
    background:red;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:1rem 0;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    transform : ${({currentIndex})=> `translateX(${124*currentIndex}px)`}  ;
    background:${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;
    border:1px solid ${theme.colors.primary};
    border-bottom:none;
    transition:0.7s ease all;
    box-shadow: 1px 1px 5px rgba(0, 0,0,0.25)
}
`
const Tab = styled.div`
    display: flex;
    width:90px;
    justify-content: center;
    /* color: ${({isActive})=> isActive ? `${theme.colors.primary}`:'#777'}; */
    /* color:linear-gradient( 45#ff8723 , #cc2e5d); */
    font-weight:${({isActive})=> isActive ? `bold`:''};;
    padding:0.5rem 1rem;
    cursor: pointer;
    margin-right:3px;
    /* background:${({isActive})=> isActive ? `${theme.colors.primary}`:'transparent'}; */
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    /* border: ${({isActive})=> isActive ? `1px solid ${theme.colors.primary}`:'1px solid transparent'}; */
    /* border:1px solid ${theme.colors.primary}; */
    border-bottom:1px solid white;
    transition:0.4s ease all;
    box-shadow: ${({isActive})=> isActive ? ` 1px 1px 5px #777`:``};
      background: ${({isActive})=> isActive ? ` linear-gradient(to right, #777 50%, #ff8723 50%, #cc2e5d)`:`linear-gradient(to right, #777 50%, #ff8723 50%, #cc2e5d)`};;
    background-size: 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    :hover{
    /* border: 1px solid ${theme.colors.gray} */
    background-position: -100%;
    box-shadow: 1px 1px 5px  #f5bb8b;
   
    }
 
`