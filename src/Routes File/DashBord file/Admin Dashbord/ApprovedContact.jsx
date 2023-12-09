import { useState } from "react";
import useAxiousPublic from "../../../Hooks file/useAxiousPublic";
import { useEffect } from "react";
import Swal from "sweetalert2";


const ApprovedContact = () => {
    const axiousPublic = useAxiousPublic()
    const [pandingPayment, setPayndingPayment] = useState([])
    useEffect(() => {
        axiousPublic.get('/profileCard')
            .then(data => {
                const paymentMatch = data.data.filter(Element => Element.payment === 'panding')
                console.log(paymentMatch)
                setPayndingPayment(paymentMatch)
            })
    }, [axiousPublic])
    const handelAproved = approvedAdmin => {
        const {
            _id,
            age,
            dateOfBirth,
            fathersName,
            gender,
            height,
            mothersName,
            name,
            occupation,
            patnerAge,
            patnerHeight,
            patnerWeight,
            permanentDivision,
            presentDivision,
            race,
            weight,
            image,
            phone,
            email,
            members
        } = approvedAdmin
        const payment = 'aproved'
        const aproveData = {
            _id,
            age,
            dateOfBirth,
            fathersName,
            gender,
            height,
            mothersName,
            name,
            occupation,
            patnerAge,
            patnerHeight,
            patnerWeight,
            permanentDivision,
            presentDivision,
            race,
            weight,
            image,
            phone,
            email,
            members,
            payment
        }
        console.log(aproveData)
        fetch(` http://localhost:5000/profileCard/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(aproveData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.reload();
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Biodata Id</th>
                            <th>Approved contact request</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            pandingPayment.map(datas => <tr key={datas._id}>
                                <th>1</th>
                                <td>{datas.name}</td>
                                <td>{datas.email}</td>
                                <td>{datas._id}</td>
                                <td><button onClick={() => handelAproved(datas)} className="btn btn-primary">Approved</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovedContact;