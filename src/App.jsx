import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Vacancie from './Pages/Vacancie';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/vacancie' element={<Vacancie/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
