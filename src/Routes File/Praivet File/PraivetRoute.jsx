import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase file/AuthProvider";
import PropTypes from 'prop-types';

const PraivetRoute = ({ children }) => {
    const { users, loding } = useContext(AuthContext)
    const location = useLocation()
    if (loding) {
        return <>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </>
    }
    if (users) {
        return children
    }
    return <Navigate to={`/login`} state={{ from: location }} replace></Navigate>;
};

PraivetRoute.propTypes = {
    children: PropTypes.object
}

export default PraivetRoute;