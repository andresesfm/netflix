import React from "react";
import { Route, Navigate } from "react-router-dom";
import * as ROUTES from '../constants/routes'
export const IsUserRedirect = ({ user, loggedIdPath, children, ...rest }) => {
    return (!user ?
        children :
        <Navigate to={{ pathname: loggedIdPath }} />
    )
}

export const ProtectedRoute = ({ user, children, location, ...rest }) => {
    return (user ?
        children :
        <Navigate to={{ pathname: ROUTES.SIGN_IN, state: { from: location } }} />);
};
