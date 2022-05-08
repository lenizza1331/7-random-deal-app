import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';



function App() {
  return (
    <div>
      <AnimatedRoutes/>
    </div>
  )
}

export default App;



// const location = useLocation()
// const transitions = useTransition(location, { ... })
// return transitions((props, item) => (
//   <animated.div style={props}>
//     <Routes location={item}>
//        <Route path='/' element={<StartPage/>}/>
//        <Route path='/main' element={<Main/>}/>
//     </Routes>
//   </animated.div>
// ))
