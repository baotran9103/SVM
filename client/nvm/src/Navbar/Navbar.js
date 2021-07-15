import React from 'react'
import {NavBarContainer,Navbar_logo,MenuContainer} from './StyledComponents'
import NavbarLeft from './NavbarLeft/NavbarLeft'
import NavbarRight from './NavbarRight/NavbarRight'
import {Menu} from '../utils/Icons'

function Navbar(props) {
    return (
        <NavBarContainer>
            <Navbar_logo>SVM Pool</Navbar_logo>
            <NavbarLeft />
            <div style={{marginRight:'auto'}}></div>
            <NavbarRight />
            <MenuContainer onClick={()=> props.setsidebar(!props.sidebar)} >
                <Menu />
            </MenuContainer>
            
        </NavBarContainer>
    )
}

export default Navbar


