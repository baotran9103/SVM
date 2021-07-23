import React from 'react'
import {NavLinks,NavLink,NavDropdown,NavDiscord} from './StyledComponents'
function NavbarLeft() {
    return (
        <NavLinks>
            <NavLink to='/'>Home</NavLink>
            <NavDiscord href='https://discord.gg/hq5HKjYn2G' target='_blank'>Discord</NavDiscord>
            <NavLink to='/'>LeaderBoard</NavLink>
            {/* <NavDropdown >
                <div>Language</div>
                <div></div>
            </NavDropdown> */}
        </NavLinks>
    )
}

export default NavbarLeft
