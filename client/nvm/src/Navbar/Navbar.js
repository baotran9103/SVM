import React from 'react'
import {NavBarContainer,Navbar_logo} from './StyledComponents'
import NavbarLeft from './NavbarLeft/NavbarLeft'
import NavbarRight from './NavbarRight/NavbarRight'
function Navbar() {
    return (
        <NavBarContainer>
            <Navbar_logo>SVM Pool</Navbar_logo>
            <NavbarLeft />
            <div style={{marginRight:'auto'}}></div>
            <NavbarRight />

        </NavBarContainer>
    )
}

export default Navbar


