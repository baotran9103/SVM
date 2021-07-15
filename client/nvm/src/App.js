import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar'
import PageContent from './PageContent/PageContent'
function App() {
  return (
    <div className="App">
      <Navbar />
      <PageContent />
      <img style={{position:'absolute',zIndex:'-1',top:'0',left:'0',width:'100%',objectFit:'contain'}}  src="/background-landing.png" alt="" />
    </div>
  );
}

export default App;
