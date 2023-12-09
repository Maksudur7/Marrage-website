import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BiodataCard = ({ searchFild }) => {
    console.log(searchFild)

    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/profileCard')
            .then(res => res.json())
            .then(datas => {
                const matchData = datas.filter(element => element.age === searchFild.age || element.gender === searchFild.gender || element.permanentDivision === searchFild.division)
                console.log(matchData)
                {
                    matchData.length === 0 ? setdata(datas) : setdata(matchData)
                }

            })
    }, [searchFild.age, searchFild.gender, searchFild.division])
    const handelProfileLocalStor = profile => {
        const item = JSON.parse(localStorage.getItem('viewProfile'))
        if (!item) {
            localStorage.setItem('viewProfile', JSON.stringify(profile))
        } else {
            localStorage.setItem('viewProfile', JSON.stringify(profile))
        }
    }
    return (
        <div className="grid grid-cols-2">
            {
                data.map(element => <div key={element.id} className="card w-96 mt-5 bg-base-100 shadow-xl">
                    <figure ><img className='w-full h-96' src={element.image} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Biodata Id
                            <div className="badge badge-secondary">{element._id}</div>
                        </h2>
                        <h6>Biodata Type : {element.biodataType}</h6>
                        <h6>Permanent Division name : {element.permanentDivision} </h6>
                        <h6>Age : {element.age}</h6>
                        <h6>Occupation : {element.occupation}</h6>
                    </div>
                    <Link to={`/viewprofiledettles/viewdettles`}><button onClick={() => handelProfileLocalStor(element)} className='btn btn-success w-full'>View Profile</button></Link>

                </div>
                )
            }

        </div>
    );
};

BiodataCard.propTypes = {
    searchFild: PropTypes.object
}

export default BiodataCard;