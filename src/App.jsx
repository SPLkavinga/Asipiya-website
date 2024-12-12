import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Vacancie from './Pages/Vacancie';
import Intern from './Pages/Intern';
import Microfinance from './Pages/MicroFinance';
import Services from './Pages/Services';
import Prawing from './Pages/Prawing';
import Leasing from './Pages/Leasing';
import ERP from './Pages/ERP';
import UiUxIntern from './Pages/UiUxIntern';
import DigitalMarketingIntern from './Pages/DigitalMarketingIntern';
import QAEngineer from './Pages/QAEngineer';
import SearchEngineOptimizationSpecialist from './Pages/SearchEngineOptimizationSpecialist';
import CustomerCareExecutive from './Pages/CustomerCareExecutive';
import BusinessAnalyst from './Pages/BusinessAnalyst';
import GraphicDesigner from './Pages/Graphic Designer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/vacancie' element={<Vacancie/>}/>
      <Route path='/intern' element={<Intern/>}/>
      <Route path='/UiUxIntern' element={<UiUxIntern/>}/>
      <Route path='/DigitalMarketingIntern' element={<DigitalMarketingIntern/>}/>
      <Route path='/QAEngineer' element={<QAEngineer/>}/>
      <Route path='/SearchEngineOptimizationSpecialist' element={<SearchEngineOptimizationSpecialist/>}/>
      <Route path='/CustomerCareExecutive' element={<CustomerCareExecutive/>}/>
      <Route path='/BusinessAnalyst' element={<BusinessAnalyst/>}/>
      <Route path='/GraphicDesigner' element={<GraphicDesigner/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Microfinance' element={<Microfinance/>}/>
      <Route path='/Prawing' element={<Prawing/>}/>
      <Route path='/Leasing' element={<Leasing/>}/>
      <Route path='/ERP' element={<ERP/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
