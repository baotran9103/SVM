import React from 'react'
import {NavLink} from '../NavbarLeft/StyledComponents'
import styled from 'styled-components'
import { theme } from '../../utils/Theme'
import {NavContainer,StickerInfo,StickerInfoData,StickerPercent,LauncherinputContainer,LauncherInput,SearchButton} from '../NavbarRight/StyledComponents'
import Toggle from '../NavbarRight/Toggle'
function Sidebar(props) {
    return (
        <SidebarContainer sidebar={props.sidebar}>
            <LinksContainer>
       
           
             <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Discord</NavLink>
            <NavLink to='/'>LeaderBoard</NavLink>
            <div style={{display:'flex'}}>
            <Toggle />
            <StickerInfo>
                <StickerInfoData> XCH $231.79</StickerInfoData>
                <StickerPercent ispositive={1.16>0}>1.16%</StickerPercent>
                
                
            </StickerInfo>
            </div>
            <LauncherinputContainer>
                <LauncherInput  type='text' placeholder='Launcher Id or alias'/>

            </LauncherinputContainer>
            <SearchButton> Search</SearchButton>
            </LinksContainer>
           

            
        </SidebarContainer>
    )
}

export default Sidebar

export const SidebarContainer = styled.div`
    display: flex;   
    height:${({sidebar})=> sidebar?'100%':'0'};
    opacity:${({sidebar})=> sidebar?'1':'0'};
    transform: ${({sidebar})=> sidebar?'translate(0,0)':'translate(120%)'};
    transition:all 0.4s ease;
    position:relative;
 

`

const LinksContainer = styled.div`
    display: grid;
    padding: 1rem 2rem;
    flex-direction: column;
    justify-items: start;
    align-items: start;
    background:${theme.colors.graydark};
    width:100%;
    row-gap:1rem
`

