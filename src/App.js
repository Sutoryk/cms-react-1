
import Main from './components/MainComponent'
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Test from './CategoryComponents/ZlaczkiWidokComponent';
import ZlaczkiWidok from './CategoryComponents/ZlaczkiWidokComponent';
import WezeWidok from './CategoryComponents/WezeWidokComponent';
import ZraszaczeWidok from './CategoryComponents/ZraszaczeWidokComponent';
import Kontakt from './components/KontaktComponent';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/home" element={<Main />}></Route>
      <Route exact path="/kategoria/złączki" element={<ZlaczkiWidok />}></Route>
      <Route exact path="/kategoria/węże" element={<WezeWidok />}></Route>
      <Route exact path="/kategoria/zraszacze" element={<ZraszaczeWidok />}></Route>
      <Route path="/aboutus" element={<Kontakt />}></Route>

      
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
