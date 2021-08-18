import React from 'react'
import {NavBarContainer,Navbar_logo,MenuContainer} from './StyledComponents'
import NavbarLeft from './NavbarLeft/NavbarLeft'
import NavbarRight from './NavbarRight/NavbarRight'
import {Menu} from '../utils/Icons'
import {useSelector} from 'react-redux'

function Navbar(props) {
    const Darkmode = useSelector(state=> state.Utils.Darkmode)
   
 
    return (
        <NavBarContainer Darkmode={Darkmode}>
            <Navbar_logo Darkmode={Darkmode}>VastPool</Navbar_logo>
            <NavbarLeft Darkmode={Darkmode} />
            {/* <div style={{marginRight:'auto'}}></div> */}
            <NavbarRight  data={props.data} Darkmode={Darkmode} />
            <div style={{display:'flex',justifyContent:'flex-end'}}>
            <MenuContainer onClick={()=> props.setsidebar(!props.sidebar)} >
                <Menu />
            </MenuContainer>
            </div>
         
            
        </NavBarContainer>
    )
}

export default Navbar


