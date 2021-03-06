
import React ,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import PageContent from './FrontPage/PageContent'
import ViewAllFarm from './FrontPage/Content/ViewAllFarm'
import AccountPage from './AccountPage/AccountPage'
import LeaderBoard from './LeaderBoard/LeaderBoard'
import Sidebar from './Navbar/Sidebar/Sidebar'
import { useSelector } from 'react-redux'
import { theme } from './utils/Theme'
import { Route, Switch } from 'react-router-dom'
import store from './redux/Store'
import { getPrice } from './redux/utils/Action'
import { useQuery } from "react-query";
import { animateScroll as scroll,Link as LinkS } from 'react-scroll'
import LoadingPage from './utils/LoadingPage'
import ErrorPage from './utils/ErrorPage'
import queryString from 'query-string';
import {createBrowserHistory} from 'history'

import Test from './Logo/Test'
function App() {
  const Darkmode = useSelector(state => state.Utils.Darkmode)
  const [sidebar, setsidebar] = useState(false)
const [isloaded, setisloaded] = useState(false)
useEffect(() => {
  const loadscreen = setInterval(function(){ setisloaded(true) }, 2.4*1000);
}, [isloaded])
var requestOptions = {
  method: "GET",
 
  qs: {
start: 1,
limit: 5000,
convert: "USD"
  },
  json: true,
  gzip: true
};
var url="https://api.coingecko.com/api/v3/coins/chia";
  const { data, isLoading, isError } = useQuery("ChiaPrice", () => fetch(url, requestOptions).then((res) => res.json()), {
    onSuccess: (res) => {store.dispatch(getPrice(res))}
  }
  );
  // if (isLoading) {
  //   return (<LoadingPage />)
  // } else if (isError) {
  //   return (<ErrorPage />)
  // }
  return (
    <AppContainer Darkmode={Darkmode}>
        {
        
        !isloaded &&<Test Darkmode={Darkmode}/>
        }
        {/* <Test /> */}
      <Navbar data={data} sidebar={sidebar} setsidebar={setsidebar} />
      <Sidebar data={data} sidebar={sidebar} />
      <Switch>
      
        
        <Route  path="/account/:launcherid">
          <AccountPage />
        </Route>
        <Route path="/viewallfarmed">
          <ViewAllFarm Darkmode={Darkmode} />
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
      {/* <BackgroundImage Darkmode = {Darkmode}  src="/background3.jpeg" alt="" /> */}
      <ScrollIcon smooth={true} duration={1000} onClick={() => scroll.scrollToTop()}>
      <svg xmlns="http://www.w3.org/2000/svg" 
     xlink="http://www.w3.org/1999/xlink" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg>
      </ScrollIcon>
    </AppContainer>
  );
}

export default App;

const ScrollIcon = styled(LinkS)`
position:fixed;
bottom:0;
right:0;
margin:1rem;
cursor: pointer;
width:20px;
height:20px;
justify-content:center;
border-radius:50%;
  display:flex;
  padding:0.5rem;
  background:transparent;
  border:0.5px solid ${theme.colors.primary};
  :hover{
    /* opacity:0.8; */
    background:${theme.colors.primary};
    color:${theme.colors.white}
  }
`

const AppContainer = styled.div`
  color: ${({ Darkmode }) => Darkmode ? theme.colors.white : theme.colors.black};
  height:100%;
  width:100%;
  transition:0.1s all ease;
/* background:transparent; */
background: ${({ Darkmode }) => Darkmode ? theme.colors.black : theme.colors.lightsecondary};
/* background-image: url('/background-landing.png');
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
background: ${({ Darkmode }) => Darkmode ? theme.colors.black : theme.colors.white};
/* min-height:100vh; */
max-width:100vw;
`