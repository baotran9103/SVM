import React from 'react'
import {NavLink,NavDiscord} from '../NavbarLeft/StyledComponents'
import styled from 'styled-components'
// import { theme } from '../../utils/Theme'
import {StickerInfo,StickerInfoData,StickerPercent,LauncherinputContainer,LauncherInput,SearchButton} from '../NavbarRight/StyledComponents'
import Toggle from '../NavbarRight/Toggle'
import {useSelector} from 'react-redux'
function Sidebar(props) {
    const [launcherid, setlauncherid] = React.useState("")
    const [showchart, setshowchart] = React.useState(false)
    const Darkmode = useSelector(state => state.Utils.Darkmode)
    function InputChangeHandler(e){
        e.preventDefault();
        setlauncherid(e.target.value)
    }
    return (
        <SidebarContainer  sidebar={props.sidebar}>
            <LinksContainer Darkmode={Darkmode}>
       
           
             <NavLink to='/'>Home</NavLink>
            <NavDiscord href='https://discord.gg/hq5HKjYn2G' target='_blank'>Discord</NavDiscord>
            <NavLink to='/leaderboard'>LeaderBoard</NavLink>
            <div style={{display:'flex'}}>
            <Toggle />
            <StickerInfo href='https://coinmarketcap.com/currencies/chia-network/' >
                <StickerInfoData Darkmode={Darkmode}> XCH $231.79</StickerInfoData>
                <StickerPercent ispositive={1.16>0}>1.16%</StickerPercent>
                
                
            </StickerInfo>
            </div>
            <LauncherinputContainer>
                <LauncherInput value={launcherid}  onChange={InputChangeHandler} type='text' placeholder='Launcher Id or alias'/>

            </LauncherinputContainer>
            <SearchButton to={`/account/${launcherid}`}> Search</SearchButton>
            </LinksContainer>
           

            
        </SidebarContainer>
    )
}

export default Sidebar

export const SidebarContainer = styled.div`
    display: flex;   
    height:${({sidebar})=> sidebar?'100%':'0'};
    opacity:${({sidebar})=> sidebar?'1':'0'};
    z-index:${({sidebar})=> sidebar?'100':'-1'};
    transform: ${({sidebar})=> sidebar?'translate(0,0)':'translateY(-120%)'};
    transition:all 0.4s ease-in-out;
    position:relative;
    @media screen and (min-width:768px){
        display:none;
    }

`

const LinksContainer = styled.div`
    display: grid;
    padding: 1rem 2rem;
    flex-direction: column;
    justify-items: start;
    align-items: start;
    background:transparent;
    width:100%;
    row-gap:1rem;
  
`

