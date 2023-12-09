import { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
import ViewProfileCard from "./ViewProfileCard";
import ViewDettles from "./ViewDettles";


const ViewProfileDettles = () => {
    const [datass, setData] = useState([])
    console.log(datass)
    // const data = JSON.parse(localStorage.getItem('viewProfile'))
    useEffect(() => {
        fetch('http://localhost:5000/viewProfiles')
            .then(res => res.json())
            .then(pdatas => {
                console.log(pdatas)
                pdatas.find(Element => setData(Element))
            })
    }, [])
    // console.log(data)
    const { gender } = datass
    const [datas, setdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/profileCard')
            .then(res => res.json())
            .then(datas => {
                const genderMatchData = datas.filter(matchData => matchData.gender === gender)
                setdata(genderMatchData)
            })
    }, [gender])
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-1 ">
                <ViewDettles></ViewDettles>
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-2">
                    {
                        datas.map(Element => <ViewProfileCard key={Element.id}
                            Element={Element}

                        ></ViewProfileCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ViewProfileDettles;