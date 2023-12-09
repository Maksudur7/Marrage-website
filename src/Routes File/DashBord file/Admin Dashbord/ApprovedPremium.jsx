import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const ApprovedPremium = () => {
    const [Bio, setBio] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/premium')
            .then(res => res.json())
            .then(data => {
                const allData = data.filter(Element => Element.members !== 'premium')
                console.log(allData)
                setBio(allData)
            })
    }, [])
    const handelPremium = (data) => {
        const id = data._id
        const dateOfBirth = data.dateOfBirth
        const fathersName = data.fathersName
        const gender = data.gender
        const height = data.height
        const mothersName = data.mothersName
        const name = data.name
        const occupation = data.occupation
        const patnerAge = data.patnerAge
        const patnerHeight = data.patnerHeight
        const patnerWeight = data.patnerWeight
        const permanentDivision = data.permanentDivision
        const presentDivision = data.presentDivision
        const race = data.race
        const weight = data.weight
        const email = data.email
        const phone = data.phone
        const age = data.age
        const image = data.image
        const members = 'premium'
        const aproveData = {
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
        }
        console.log(aproveData)
        console.log(data, members)
        fetch(` http://localhost:5000/profileCard/${id}`, {
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
                    window.location.reload();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        fetch(` http://localhost:5000/premium/${id}`, {
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
                    window.location.reload();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
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
                            <th>Make Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            Bio.map((Element, indexCount) => <tr key={Element._id}>
                                <th>{indexCount + 1}</th>
                                <td>{Element.name}</td>
                                <td>{Element.email}</td>
                                <td>{Element._id}</td>
                                <td><button onClick={() => handelPremium(Element)} className="btn btn-primary">Premium</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApprovedPremium;