import React from 'react'
import { NavLink, NavDiscord } from '../NavbarLeft/StyledComponents'
import styled from 'styled-components'
// import { theme } from '../../utils/Theme'
import { StickerInfo, StickerInfoData, StickerPercent, LauncherinputContainer, LauncherInput, SearchButton } from '../NavbarRight/StyledComponents'
import Toggle from '../NavbarRight/Toggle'
import { useSelector } from 'react-redux'
import { useQuery } from "react-query";
import { useHistory } from 'react-router-dom'
import LoadingPage from '../../utils/LoadingPage'
import ErrorPage from '../../utils/ErrorPage'
function Sidebar(props) {
    const [launcherid, setlauncherid] = React.useState("")
    const [showchart, setshowchart] = React.useState(false)
    const Darkmode = useSelector(state => state.Utils.Darkmode)
    const history = useHistory()

    function InputChangeHandler(e) {
        e.preventDefault();
        setlauncherid(e.target.value)
    }
    const apikey = "4896458c-8163-4bc0-8807-b6be27c405ce";

    return (
        <SidebarContainer sidebar={props.sidebar}>
            <LinksContainer Darkmode={Darkmode}>


                <NavLink to='/'>Home</NavLink>
                <NavDiscord href='https://discord.gg/hq5HKjYn2G' target='_blank'>Discord</NavDiscord>
                <NavLink to='/leaderboard'>LeaderBoard</NavLink>
                <div style={{ display: 'flex' }}>
                    <Toggle />
                    <StickerInfo href='https://www.coingecko.com/en/coins/chia' >
                        <StickerInfoData Darkmode={Darkmode}> ${props.data?props.data?.market_data?.current_price.usd:''}</StickerInfoData>
                        <StickerPercent ispositive={1.16 > 0}>USD/XCH</StickerPercent>


                    </StickerInfo>
                </div>
                <form onSubmit={(e)=>{e.preventDefault();history.push(`/account/${launcherid}`) }}>
                <LauncherinputContainer>
                    <LauncherInput value={launcherid} onChange={InputChangeHandler} type='text' placeholder='Launcher Id or alias' />

                </LauncherinputContainer>
                <SearchButton to={`/account/${launcherid}`}> Search</SearchButton>
                </form>
              
            </LinksContainer>



        </SidebarContainer>
    )
}

export default Sidebar

export const SidebarContainer = styled.div`
    display: flex;   
    height:${({ sidebar }) => sidebar ? '100%' : '0'};
    opacity:${({ sidebar }) => sidebar ? '1' : '0'};
    z-index:${({ sidebar }) => sidebar ? '100' : '-1'};
    transform: ${({ sidebar }) => sidebar ? 'translate(0,0)' : 'translateY(-120%)'};
    transition:all 0.4s ease-in-out;
    position:relative;
    /* background:black; */
    /* color:#fff; */
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
    /* background:black; */
    width:100%;
    row-gap:1rem;
    /* color:white; */

    a{
        color:${({Darkmode})=> Darkmode?"white":"black"};
    }
  
`

