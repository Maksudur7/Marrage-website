import { NavLink } from "react-router-dom";
import './Public css/Public.css'
import { useContext } from "react";
import { AuthContext } from "./Firebase file/AuthProvider";

const NavBar = () => {
    const { users, logOut, name, photo, } = useContext(AuthContext)
    const allNavigation = <>
        <nav id="sidebar" className="menu menu-horizontal px-1" >
            <NavLink className='px-3 py-1 rounded-lg' to={`/`}><li>Home</li></NavLink>
            <NavLink className='px-3 py-1 rounded-lg' to={`/biodatas`}><li tabIndex={0}>
                Biodatas
            </li></NavLink>
            <NavLink className='px-3 py-1 rounded-lg' to='/aboutus'><li>About Us</li></NavLink>
            <NavLink className='px-3 py-1 rounded-lg' to={`/dashbord`}><li>Dashboard</li></NavLink>
            <NavLink className='px-3 py-1 rounded-lg' to='/contact'><li>Contact</li></NavLink>
            <li>
                {
                    users ? <button onClick={logOut}>LogOut</button> : <NavLink className='px-3 py-1 rounded-lg' to={`/login`}><li>Login</li></NavLink>
                }
            </li>

            <li>
                {
                    users ? <>
                        <li>{name}</li>
                    </> :
                        ''
                }
            </li>

            {
                users ? <>
                    <img className="h-12 w-12 rounded-full" src={photo} alt="" />
                </> :
                    ''
            }

        </nav>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {allNavigation}
                    </ul>
                </div>
                <img className="btn btn-ghost text-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF20QsqPj9Z7U4-xTAmDkmSGZ_FaqoXKS1YQ&usqp=CAU" alt="" />
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {allNavigation}
                </ul>
            </div>

        </div>
    );
};

export default NavBar;