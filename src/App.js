
import Main from './components/MainComponent'
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Kontakt from './components/KontaktComponent';
import WidokPrzedmiotu from './CategoryComponents/WidokPrzedmiotu';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/home" element={<Main />}></Route>
      <Route exact path="/kategoria/First category" element={<WidokPrzedmiotu />}></Route>
      <Route exact path="/kategoria/Second category" element={<WidokPrzedmiotu />}></Route>
      <Route exact path="/kategoria/Third category" element={<WidokPrzedmiotu />}></Route>
      <Route path="/aboutus" element={<Kontakt />}></Route>

      
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
