import Home from '../Pages/Home';
import Login from '../Pages/Login';
import { Routes, Route} from 'react-router-dom';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import RegistrationForm from '../Pages/Register';
import TripSelector from '../Components/TripSelector';

const Routers = () => {
  return (
  
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/home"  element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<RegistrationForm />}/>
      <Route path='/trip' element={<TripSelector />}/>
    </Routes>

  )
}

export default Routers