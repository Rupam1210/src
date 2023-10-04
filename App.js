 
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Coin from './component/Coin';
import Exchnage from './component/Exchnage';
import Coindetail from './component/Coindetails';
import Footer from './component/downfoot'

 

function App() {
  return (
    <Router>
       
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coin" element={<Coin/>} />
        <Route path="/exchange" element={<Exchnage/>} />
        <Route path="/coin/:id" element={<Coindetail/>} />
         
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
