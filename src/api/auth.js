import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const isAuth = () => {
    if(localStorage.getItem('operation_token') !== null) {
        return true
    }
    return false;
};

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={props => 
            isAuth() ? (
                <Component {...props} />
            ): (
                <Redirect 
                    to={{
                        pathname: '/',
                        state: { message: 'Usuário não autorizado' }
                    }}
                />
            )}
        />
    );
}

export default PrivateRoute;



export const TOKEN_KEY = 'operation_token';
export const isAuthenticated = () => {
    if(localStorage.getItem(TOKEN_KEY) !==null ) {
        return true
    }
    return false;
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};
