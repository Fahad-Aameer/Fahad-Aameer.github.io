import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Contact } from '../pages/contact';
import { NoPage } from '../pages/nopage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export function AnimatedRoutes() {
  const location = useLocation();
    
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<NoPage />} />
        </Routes>
    </AnimatePresence>
  )
}