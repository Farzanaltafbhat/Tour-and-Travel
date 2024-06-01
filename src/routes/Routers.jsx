import Home from '../Pages/Home';
import Login from '../Pages/Login';
import { Routes, Route} from 'react-router-dom';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import About from '../Pages/About';

const Routers = () => {
  return (
  
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/home"  element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>

  )
}

export default Routers