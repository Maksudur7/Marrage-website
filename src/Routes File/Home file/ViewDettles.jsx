// import { useContext } from "react";
import useAxiousPublic from "../../Hooks file/useAxiousPublic";
// import { AuthContext } from "../Firebase file/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ChackoutForm from "./ChackoutForm";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const ViewDettles = () => {
    // const { users } = useContext(AuthContext)
    // const data = JSON.parse(localStorage.getItem('viewProfile'))
    const [data, setData] = useState([])
    console.log(data)
    // const data = JSON.parse(localStorage.getItem('viewProfile'))
    useEffect(() => {
        fetch('http://localhost:5000/viewProfiles')
            .then(res => res.json())
            .then(pdatas => {

                console.log(pdatas)
                pdatas.find(Element => setData(Element))
            })
    }, [])

    console.log(data)
    const { age, dateOfBirth, fathersName, gender, height, mothersName, name, occupation, patnerAge, patnerHeight, patnerWeight, permanentDivision, presentDivision, race, weight } = data
    const { image, _id, members } = data
    const axiousPublic = useAxiousPublic()
    const handelAddFavourites = () => {
        axiousPublic.post(`/addFavourites`, data)
            .then(res => {
                console.log(res)
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This biodata saved your favourite card",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handelPremium = (premiumData) => {
        axiousPublic.post(`/premium`, premiumData)
            .then(res => {
                console.log(res)
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Send your premium request",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="m-5">
                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* Biodata type  */}
                    <div className="relative z-0 w-full mb-5 group">
                        <h1>Gender : {gender}</h1>
                    </div>
                    {/* biodata name */}
                    <div className="relative z-0 w-full mb-5 group">
                        <h1>Name : {name}</h1>
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
                    {
                        members === 'premium' ?
                            <>
                                <div className="relative z-0 w-full mb-5 group">
                                    <h1>Contact Email</h1>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <h1>Mobile Number</h1>
                                </div>
                            </>
                            : ''
                    }
                </div>
                <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            {/* which biodata contact do you need */}
                            <div className="grid grid-cols-2">
                                <h1> her biodataId :{_id} </h1>
                                {/* who want to contact */}
                                <h1> your biodataId</h1>
                            </div>
                            {/* who went to contact// */}
                            {/* <h2 className="mt-3">Email : {users.email}</h2> */}
                            <div className="mt-4">
                                <Elements stripe={stripePromise}>
                                    <ChackoutForm data={data}></ChackoutForm>
                                </Elements>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                {
                    members === 'premium' ? '' : <button onClick={() => handelPremium(data)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">premium</button>

                }
                <button type="submit" onClick={handelAddFavourites} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Add to favourites</button>
                {
                    members === 'premium' ? '' : <button onClick={() => document.getElementById('my_modal_1').showModal()} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Request Contact </button>
                }
            </div>
        </div>
    );
};

export default ViewDettles;