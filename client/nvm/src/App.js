import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './Navbar/Navbar'
import PageContent from './PageContent/PageContent'
import Sidebar from './Navbar/Sidebar/Sidebar'
function App() {
  const [sidebar, setsidebar] = React.useState(false)
  return (
    <div className="App">
      <Navbar sidebar={sidebar} setsidebar={setsidebar}/>
      <Sidebar sidebar={sidebar} />
      <PageContent />
      <img style={{position:'absolute',zIndex:'-1',top:'0',left:'0',width:'100%',objectFit:'contain'}}  src="/background-landing.png" alt="" />
    </div>
  );
}

export default App;
