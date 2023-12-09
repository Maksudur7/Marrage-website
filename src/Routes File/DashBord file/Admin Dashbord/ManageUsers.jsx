import { FaUsers, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks file/useAxiosSecure';
import useAxiousPublic from '../../../Hooks file/useAxiousPublic';

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure()
    const axiousPublic = useAxiousPublic()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiousPublic.get('/users');
            return res.data
        }
    })
    const handleDelete = id => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
        });

    }

    const handelMakeAdmin = id => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${users.name} is an admin now`,
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
                            <th>User Name</th>
                            <th>User Email</th>

                            <th>Makse Admin</th>
                            <th>Make Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {/* <tr>
                            <th>1</th>
                            <td>Maksudur Rahaman</td>
                            <td>maksudurrahamanmihsu7@gmail.com</td>
                            <td>
                                {element.role === 'admin' ? 'Admin' : <button
                                    onClick={() => handelMakeAdmin(element._id)}
                                    className="btn btn-ghost btn-lg bg-red-600">
                                    <FaUsers className="text-white"></FaUsers>
                                </button>}
                            </td>
                            <td>Premium</td>
                        </tr> */}
                        {
                            users.map((element, indexid) => <tr key={element._id}>
                                <th>{indexid + 1}</th>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>
                                    {element.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handelMakeAdmin(element._id)}
                                        className="btn btn-ghost btn-lg bg-red-600">
                                        <FaUsers className="text-white"></FaUsers>
                                    </button>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(element._id)}
                                        className="btn btn-ghost btn-lg  bg-red-600">
                                        <FaTrashAlt className=" text-white"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );


}
export default ManageUsers;