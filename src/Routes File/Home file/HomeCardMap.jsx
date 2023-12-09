import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import useAxiousPublic from "../../Hooks file/useAxiousPublic";
// import { useQuery } from "@tanstack/react-query";

const HomeCardMap = ({ element }) => {
    const axiousPublic = useAxiousPublic()
    // const { refetch } = useQuery()
    console.log(element.data)
    const { age, occupation, permanentDivision, gender } = element
    const { image, _id } = element
    console.log(element)
    const handelProfileLocalStor = profile => {
        fetch('http://localhost:5000/viewProfiles')
            .then(res => res.json())
            .then(pdatas => {
                console.log(pdatas)
                if (profile._id === pdatas[0]._id) {
                    return
                }
                else {
                    fetch(`http://localhost:5000/viewProfiles/${pdatas[0]._id}`, {
                        method: "DELETE",
                    })
                        .then(res => {
                            console.log(res)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    axiousPublic.post('/viewProfiles', profile)
                        .then(res => {
                            console.log(res)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }


            })


    }
    return (
        <div>
            <div className="card w-96 mt-5 bg-base-100 shadow-xl">
                <figure ><img className='w-full h-96' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Biodata Id
                        <div className="badge badge-secondary">{_id}</div>
                    </h2>
                    <h6>Biodata Type : {gender}</h6>
                    <h6>Permanent Division name : {permanentDivision} </h6>
                    <h6>Age : {age}</h6>
                    <h6>Occupation : {occupation}</h6>
                </div>
                <Link to={`/viewprofiledettles/viewdettles`}><button onClick={() => handelProfileLocalStor(element)} className='btn btn-success w-full'>View Profile</button></Link>
            </div>
        </div>
    );
};
HomeCardMap.propTypes = {
    element: PropTypes.object.isRequired
};

export default HomeCardMap;