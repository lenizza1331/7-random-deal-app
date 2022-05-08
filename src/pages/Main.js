import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


function Main() {
    const [activity, setActivity] = useState("");
    const [cat, setCat] = useState("");

    const twoBtn = () => {
        getActivity();
        getCat();
    };

    useEffect(() => {
        twoBtn();
        // eslint-disable-next-line 
    }, []);


    async function getActivity() {
        const response = await fetch("http://www.boredapi.com/api/activity/");
        const data = await response.json();
        setActivity(data.activity);
    }

    async function getCat() {
        const response1 = await fetch(
            "https://api.thecatapi.com/v1/images/search"
        );
        const data1 = await response1.json();
        setCat(data1[0].url);
    }

    return (
        <motion.div
            className="center"
            initial={{opacity:0, transition:{duration:1.5,}, x: 1000}}
            animate={{opacity:1, transition:{duration:1,}, x:0}}
            exit={{opacity:0, transition:{duration:1.5,}, x: -1000, delay:0.5}}
        >
            <p className="tip">{activity}</p>
            <p className="up"> </p>
            <p className="down"> </p>
            <img src={cat} alt="cat" className="catt" />
            <button className="btn" onClick={twoBtn}>
                New Advice
            </button>
        </motion.div>
    );
}

export default Main;
