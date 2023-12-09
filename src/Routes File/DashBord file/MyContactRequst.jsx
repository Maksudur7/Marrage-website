import { useEffect } from "react";
import useAxiousPublic from "../../Hooks file/useAxiousPublic";
import { useState } from "react";


const MyContactRequst = () => {
    const axiousPublic = useAxiousPublic()
    const [pandingPayment, setPayndingPayment] = useState([])
    useEffect(() => {
        axiousPublic.get('/profileCard')
            .then(data => {
                const paymentMatch = data.data.filter(Element => Element.payment)
                console.log(paymentMatch)
                setPayndingPayment(paymentMatch)
            })
    }, [axiousPublic])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Biodata Id</th>
                            {/* aprove|panding */}
                            <th>Status</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            pandingPayment.map(element => <tr key={element._id}>
                                <th>1</th>
                                <td>{element.name}</td>
                                <td>{element._id}</td>
                                <td>{element.payment}</td>
                                <td>{element.members}</td>
                                <td>{element.email}</td>
                                <td><button className="btn btn-primary">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyContactRequst;