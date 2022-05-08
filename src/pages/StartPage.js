import wiseCat from '../images/wiseCat.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



function StartPage (){
    
return (
<motion.div
    className='center'
    initial={{opacity:0,  x: -1000}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0,  x: 1000,  delay:0.5}}
    transition={{duration:1,}}
>
    <h1 className='title'>If you're bored and don't know what to do, ask a wise cat for advice!</h1>
    <motion.img
        src={wiseCat} 
        alt='wiseCat'  
        className='wiseCat'
    />
    <motion.div
        className='firstBtn'
        whileHover={{ 
            scale: 1.1,
            transition:{duration:.5, ease: 'easeInOut'},
        }}
        
    >
    <Link to='/main' className='firstBtn__link'>Let's start</Link>
    </motion.div>
</motion.div>
)
};

export default StartPage;