import { useLocation, Navigate, Outlet} from "react-router-dom"
import useAuth from "../hooks/useAuth"

import React from 'react'

const RequireAuth = ({allowedRoles}) => {
  const {auth} = useAuth();
  const location = useLocation();

  return (
    auth?.roles?.find(role => allowedRoles?.includes(role))
    ? <Outlet />
    //in navigation history, change to /login for non-user
    : auth?.user 
        ? 
        <Navigate to="/unauthorized" state={{from: location}} replace />
        :<Navigate to="/login" state={{from: location}} replace />
        
  );
}

export default RequireAuth