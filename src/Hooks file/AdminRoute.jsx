import { useContext } from "react";
import { AuthContext } from "../../Authintaction file/AuthProvider";
import { Navigate } from "react-router-dom";
import useAdmin from "./useAdmin";
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    if (loding || isAdminLoading) {
        return <>
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
        </>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to={`/`} state={{ from: location }} replace ></Navigate>
};

AdminRoute.propTypes = {
    children: PropTypes.object
}

export default AdminRoute;