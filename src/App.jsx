import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Vacancie from './Pages/Vacancie';
import Intern from './Pages/Intern';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/vacancie' element={<Vacancie/>}/>
      <Route path='/intern' element={<Intern/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
