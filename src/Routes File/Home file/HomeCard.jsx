// import img from '../../../public/jolakha.png'

import { useEffect, useState } from "react";
import HomeCardMap from "./HomeCardMap";

const HomeCard = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/profileCard')
            .then(res => res.json())
            .then(datas => setdata(datas))
    }, [])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {
                data.slice(0,6).map(element => <HomeCardMap key={element.id} element={element}></HomeCardMap>)
            }

        </div>
    );
};

export default HomeCard;