import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
        const{ user,loading}=useContext(AuthContext)
        const location=useLocation()
        console.log(location)

    if(loading){
        return <span className="loading loading-spinner mt-60 ml-[500px] text-error"></span>
    }
      if(user){
          return children
      }
    return <Navigate state={location.pathname} to="/login"></Navigate>
}
PrivateRoute.propTypes={
    children:PropTypes.node
}
export default PrivateRoute;