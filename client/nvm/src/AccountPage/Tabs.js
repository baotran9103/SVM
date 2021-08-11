import React,{useState} from 'react'
import styled from 'styled-components'
import { theme } from "../utils/Theme";

function Tabs(props) {
    const Tabs = ["Payouts","Partials"]
    return (
        <TabsContainer>
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
border-bottom: 1px solid ${theme.colors.graydark};
margin:1rem ;
flex-wrap:wrap;
`
const Tab = styled.div`
    display: flex;
    

    color: ${({isActive})=> isActive ? `${theme.colors.white}`:''};
    padding:0.5rem 1rem;
    cursor: pointer;
    background:${({isActive})=> isActive ? `${theme.colors.green}`:'transparent'};
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border: ${({isActive})=> isActive ? `1px solid ${theme.colors.gray}`:'1px solid transparent'};
    :hover{
    border: 1px solid ${theme.colors.gray}
    }
`