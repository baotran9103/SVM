import React from 'react'
import {NavLinks,NavLink,NavDropdown,NavDiscord} from './StyledComponents'
function NavbarLeft({Darkmode}) {
    return (
        <NavLinks Darkmode={Darkmode} >
            <NavDiscord href='/'  >Home</NavDiscord>
            <NavDiscord href='https://discord.gg/hq5HKjYn2G' target='_blank'>Discord</NavDiscord>
            <NavDiscord href='/leaderboard' >LeaderBoard</NavDiscord>
            {/* <NavDropdown >
                <div>Language</div>
                <div></div>
            </NavDropdown> */}
        </NavLinks>
    )
}

export default NavbarLeft
