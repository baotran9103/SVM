import logo from './logo.svg';
import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar/Navbar'
import PageContent from './PageContent/PageContent'
import Sidebar from './Navbar/Sidebar/Sidebar'
import {useSelector} from 'react-redux'
import {theme} from './utils/Theme'
function App() {
  const Darkmode = useSelector(state => state.Utils.Darkmode)
  const [sidebar, setsidebar] = React.useState(false)
  return (
    <AppContainer Darkmode = {Darkmode}>
      <Navbar sidebar={sidebar} setsidebar={setsidebar}/>
      <Sidebar sidebar={sidebar} />
      <PageContent />
      <BackgroundImage Darkmode = {Darkmode}  src="/background-landing.png" alt="" />
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  
  color: ${({Darkmode})=> Darkmode ? theme.colors.white:theme.colors.black};
  height:100%;
  width:100%;
/* background:transparent; */
/* background: ${({Darkmode}) => Darkmode ? theme.colors.black:theme.colors.white};
background-image: url('/background-landing.png');
background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 'contain';
    width:100%;
    height: auto; */
    
`
const BackgroundImage = styled.img`
position:fixed;
z-index:-1;
top:0;
left:0;
width:100%;
object-fit:contain;
/* height:auto; */
background: ${({Darkmode}) => Darkmode ? theme.colors.black:theme.colors.white};
/* min-height:100vh; */
max-width:100vw;
`