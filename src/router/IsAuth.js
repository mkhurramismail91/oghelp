import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import isAuth from './VerifyAuth'

// const isAuth = () => {
//     if(localStorage.getItem('user-token') !== null){
//         return true
//     }
//     return false;
// }

const UsersIsAuthRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuth() && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default UsersIsAuthRoute;