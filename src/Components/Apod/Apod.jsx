import {useEffect, useState} from "react";
import './Apod.css';
const API_KEY = '2fpGMb2Ca8Lypbq0WlaDNDMnHvf4Hm5ihN50Y5vk'
const API_IMAGE_URL = 'https://api.nasa.gov/planetary/apod?api_key='+API_KEY;

const Apod = () => {
    const [apod, setApod] = useState([]);

    const fetchData = () => {
        fetch(API_IMAGE_URL)
            .then(res => res.json())
            .then(data => setApod(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, []);


    return(
        <div className="apod">
            <h1 className="apod--title">{apod.title}</h1>
            <img className="apod--image" src={apod.url} alt="Image of the day" />
            <h5 className="apod--date">{apod.date}</h5>
            <p className="apod--description">{apod.explanation}</p>
        </div>
    )
}

export default Apod;