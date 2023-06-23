import {useEffect, useState} from "react";
import './Astros.css';
const API_URL = 'http://api.open-notify.org/astros.json';


const Astros = () => {
    const [astros, setAstros] = useState([]);//[] por un array vacio, {}objeto vacio, 0 para numero

    const fetchData = () => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setAstros(data.people))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const astrosCards = astros.map((astro, index) => (
        <div className="astro--card" key={astro.name}>
            <h1 className="astro--name">
                {astro.name}
            </h1>
            <h3 className="astro--craft">
                {astro.craft}
            </h3>
        </div>
    ))

    return(
        <div className="astros--cards">
            {astrosCards}
        </div>
    )
}

export default Astros;