import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import isAuth from './VerifyAuth'

const UsersAuthRoute = ({render, ...rest}) => {
    return (
        <Route {...rest} render={props =>(
            isAuth() ?
            render()
            : <Redirect to="/login" />
        )} />
    );
};

export default UsersAuthRoute;

// <Component {...props} />