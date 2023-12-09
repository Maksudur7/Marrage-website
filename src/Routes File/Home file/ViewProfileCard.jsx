
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import useAxiousPublic from "../../Hooks file/useAxiousPublic";
import useCart from "./useCart";


const ViewProfileCard = ({ Element }) => {
    const axiousPublic = useAxiousPublic()
    const { age, occupation, permanentDivision } = Element
    const { image, _id } = Element
    const [viewProfiles] = useCart()

    const handelProfileLocalStor = profile => {
        console.log(viewProfiles[0]._id)

        if (profile._id === viewProfiles[0]._id) {
            return
        }
        else {
            fetch(`http://localhost:5000/viewProfiles/${viewProfiles[0]._id}`, {
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
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error)
                })
        }


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
                    <h6>Biodata Type :</h6>
                    <h6>Permanent Division name : {permanentDivision} </h6>
                    <h6>Age : {age}</h6>
                    <h6>Occupation : {occupation}</h6>
                </div>
                <Link to={`/viewprofiledettles/viewdettles`}><button onClick={() => handelProfileLocalStor(Element)} className='btn btn-success w-full'>View Profile</button></Link>
            </div>
        </div>
    );
};
ViewProfileCard.propTypes = {
    Element: PropTypes.object.isRequired
};

export default ViewProfileCard;