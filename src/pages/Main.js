import { useEffect, useState } from 'react';


function Main() {
    const [activity, setActivity] = useState("");
    const [cat, setCat] = useState("");

    useEffect(() => {
        twoBtn();
    }, []);

    const twoBtn = () => {
        getActivity();
        getCat();
    };

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
        console.log(data1[0].url);
    }

    return (
        <div className="App">
            <p className="tip">{activity.toUpperCase()}</p>
            <p className="up"> </p>
            <p className="middle"> </p>
            {/* <p className="down"> </p> */}
            <img src={cat} alt="cat" className="catt" />
            <button className="btn" onClick={twoBtn}>
                New Advice
            </button>
        </div>
    );
}

export default Main;
