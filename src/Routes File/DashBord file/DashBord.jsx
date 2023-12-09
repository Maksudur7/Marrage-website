import { NavLink, Outlet } from "react-router-dom";
import './../Public css/Public.css'
import useAdmin from "../../Hooks file/useAdmin";

const DashBord = () => {
    const [isAdmin] = useAdmin()
    console.log(isAdmin)
    // const isAdmin = true
    return (
        <div className="grid relative grid-cols-4 max-w-7xl mx-auto">
            <nav id="sidebar" className="col-span-1 fixed w-96 h-[1280px] bg-amber-600">
                {
                    isAdmin ?
                        <ul className="menu menu-vertical px-1 mt-40 gap-4 ">
                            <NavLink to={`admindashboard`}><li className="mx-5 my-2">Admin Dashboard</li></NavLink>
                            <NavLink to={`manageusers`}><li className="mx-5 my-2">Manage Users</li></NavLink>
                            <NavLink to={`approvedpremium`}><li className="mx-5 my-2">Approved Premium</li></NavLink>
                            <NavLink to={`approvedcontact`}><li className="mx-5 my-2">Aproved Contact Request</li></NavLink>
                            <button className="btn btn-neutral w-full">Logout</button>
                            <NavLink to={`/`}><li className="mx-5 my-2">Home</li></NavLink>
                        </ul>
                        :
                        <ul className="menu menu-vertical px-1 mt-40 gap-4">
                            <NavLink to={`editBiodata`}><li className="mx-5 my-2">Edit Biodata</li></NavLink>
                            <NavLink to={`viewBio`}><li className="mx-5 my-2">View Biodata</li></NavLink>
                            <NavLink to={`contactRequst`}><li className="mx-5 my-2">My Contact Request</li></NavLink>
                            <NavLink to={`favouriteBio`}><li className="mx-5 my-2">Favourites Biodata</li></NavLink>
                            <button className="btn btn-neutral w-full">Logout</button>
                            <NavLink to={`/`}><li className="mx-5 my-2">Home</li></NavLink>
                        </ul>
                }

            </nav>
            <div className="col-span-3  absolute right-0 left-96 mx-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBord;