import React from 'react'
import {NavLinks,NavLink,NavDropdown,NavDiscord} from './StyledComponents'
function NavbarLeft({Darkmode}) {
    return (
        <NavLinks Darkmode={Darkmode} >
            <NavLink to='/'>Home</NavLink>
            <NavDiscord href='https://discord.gg/hq5HKjYn2G' target='_blank'>Discord</NavDiscord>
            <NavLink to='/leaderboard'>LeaderBoard</NavLink>
            {/* <NavDropdown >
                <div>Language</div>
                <div></div>
            </NavDropdown> */}
        </NavLinks>
    )
}

export default NavbarLeft
