import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase file/AuthProvider";
import Swal from "sweetalert2";
import useAxiousPublic from "../../Hooks file/useAxiousPublic";


const ViewBio = () => {
    const { users } = useContext(AuthContext)
    const axiousPublic = useAxiousPublic()
    const [dData, setDData] = useState([])
    const { age, dateOfBirth, fathersName, gender, height, mothersName, name, occupation, patnerAge, patnerHeight, patnerWeight, permanentDivision, presentDivision, race, weight, image, phone, email, members } = dData
    const aproveData = { age, dateOfBirth, fathersName, gender, height, mothersName, name, occupation, patnerAge, patnerHeight, patnerWeight, permanentDivision, presentDivision, race, weight, image, phone, email, members }
    // const data = dData.data
    console.log(dData)
    useEffect(() => {
        fetch('http://localhost:5000/profileCard')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const match = data.find(Element => Element.email === users.email)
                console.log(match)
                setDData(match)
            })
    }, [users])
    const handelPremiam = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "This Data will you premium",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, premium it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiousPublic.post(`/adminAproveData/`, aproveData)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                // console.log(AproveData)
                Swal.fire({
                    title: "Premium Request Send",
                    text: "Please Weate for admin aproved",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="m-5">
            <div className="grid md:grid-cols-2 md:gap-6">
                {/* Biodata type  */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Gender : {gender} </h1>
                </div>
                {/* biodata name */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Name : {name} </h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                {/* Biodata type  */}
                <div className="relative z-0 w-full mb-5 group">
                    <img src={image} alt="" />
                </div>
                {/* biodata name */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Date of birth : {dateOfBirth}</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                {/* Biodata type  */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Height : {height}</h1>
                </div>
                {/* biodata name */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Weight : {weight}</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                {/* Biodata type  */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Age : {age}</h1>
                </div>
                {/* biodata name */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Occupation : {occupation}</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                {/* Biodata type  */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Race : {race}</h1>
                </div>
                {/* biodata name */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Fathers name : {fathersName}</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                {/* Biodata type  */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Mothers name : {mothersName}</h1>
                </div>
                {/* biodata name */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Permanent Division name : {permanentDivision}</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                {/* Biodata type  */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Present Division name : {presentDivision}</h1>
                </div>
                {/* biodata name */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Expected Partner Age : {patnerAge}</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                {/* Biodata type  */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Expected Partner Height : {patnerHeight}</h1>
                </div>
                {/* biodata name */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Expected Partner Weight : {patnerWeight}</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                {/* Biodata type  */}
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Contact Email : {email}</h1>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <h1>Mobile Number : {phone}</h1>
                </div>

            </div>
            <button onClick={handelPremiam} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">premium</button>
        </div>
    );
};

export default ViewBio;