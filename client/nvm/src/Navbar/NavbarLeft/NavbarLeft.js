import React from 'react'
import {NavLinks,NavLink,NavDropdown} from './StyledComponents'
function NavbarLeft() {
    return (
        <NavLinks>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Discord</NavLink>
            <NavLink to='/'>LeaderBoard</NavLink>
            {/* <NavDropdown >
                <div>Language</div>
                <div></div>
            </NavDropdown> */}
        </NavLinks>
    )
}

export default NavbarLeft
