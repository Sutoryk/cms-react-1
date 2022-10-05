
import Main from './components/MainComponent'
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import React from 'react';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Test from './components/TestComponent';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/home" element={<Main />}></Route>
      <Route exact path="/kategoria/złączki" element={<Test />}></Route>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
