import logo from './logo.svg';
import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import PageContent from './FrontPage/PageContent'
import ViewAllFarm from './FrontPage/Content/ViewAllFarm'
import AccountPage from './AccountPage/AccountPage'
import LeaderBoard from './LeaderBoard/LeaderBoard'
import Sidebar from './Navbar/Sidebar/Sidebar'
import {useSelector} from 'react-redux'
import {theme} from './utils/Theme'
import {Route,Switch} from 'react-router-dom'
function App() {
  const Darkmode = useSelector(state => state.Utils.Darkmode)
  const [sidebar, setsidebar] = React.useState(false)
  return (
    <AppContainer Darkmode = {Darkmode}>
      <Navbar sidebar={sidebar} setsidebar={setsidebar}/>
      <Sidebar sidebar={sidebar} />
      <Switch>
     
      <Route path="/account/:launcherid">
        <AccountPage />
      </Route>
      <Route path="/viewallfarmed">
        <ViewAllFarm />
      </Route>
      <Route path="/leaderboard">
        <LeaderBoard />
      </Route>
      <Route exact path="/">
      <PageContent />
      </Route>
      <Route exact path="*">
      <PageContent />
      </Route>
    </Switch>
      <Footer />
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
height:100%;
background: ${({Darkmode}) => Darkmode ? theme.colors.black:theme.colors.white};
/* min-height:100vh; */
max-width:100vw;
`