import React from 'react'
import {NavBarContainer,Navbar_logo,MenuContainer,LogoImage} from './StyledComponents'
import NavbarLeft from './NavbarLeft/NavbarLeft'
import NavbarRight from './NavbarRight/NavbarRight'
import {Menu} from '../utils/Icons'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
function Navbar(props) {
    const Darkmode = useSelector(state=> state.Utils.Darkmode)
   
    const history = useHistory()
    return (
        <NavBarContainer  Darkmode={Darkmode}>
            <Navbar_logo onClick={()=>history.push('/')} Darkmode={Darkmode}><LogoImage src='/Vastpool_Logo.png' alt='V' /> <h4 style={{textAlign:'end',margin:'1rem 0 0 2.5rem'}}>astPool</h4> </Navbar_logo>
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




