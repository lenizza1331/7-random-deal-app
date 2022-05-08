import { Routes, Route, useLocation } from 'react-router-dom';
import Main from '../pages/Main';
import StartPage from '../pages/StartPage';
import { AnimatePresence } from "framer-motion";




function AnimatedRoutes (){
    const location = useLocation()

    return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/main' element={<Main/>}/>
    </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes;








