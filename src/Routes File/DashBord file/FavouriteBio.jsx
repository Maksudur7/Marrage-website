import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const FavouriteBio = () => {

    const [favouritData, setFavouriteData] = useState([])
    console.log(favouritData)
    useEffect(() => {
        fetch('http://localhost:5000/addFavourites')
            .then(res => res.json())
            .then(data => {
                setFavouriteData(data)
            })
    }, [])

    const handelDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(` http://localhost:5000/addFavourites/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(dataR => {
                        console.log(dataR)
                        window.location.reload();
                    })
            }
        });
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
                            <th>Biodata Id</th>
                            {/* aprove|panding */}
                            <th>Permanent Address</th>
                            <th>Occupation</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            favouritData.map((element, indexOf) => <tr key={element.id}>
                                <th>{indexOf + 1}</th>
                                <td>{element.name}</td>
                                <td>{element.id}</td>
                                <td>{element.permanentDivision}</td>
                                <td>{element.occupation}</td>
                                <td><button onClick={() => handelDelete(element._id)} className="btn btn-primary">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FavouriteBio;