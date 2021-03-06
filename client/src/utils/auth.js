import { useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

import api from "./api";
import { useStoreContext, getStoreAction } from "../store";
import { LOGIN_USER, LOGOUT_USER } from "../store/actions";

const setAuthToken = token => {

    storeAuthToken( token );
    applyAuthToken( token );

    return token ? jwt_decode(token) : undefined;

}

const storeAuthToken = token => {

    token

        ? localStorage.setItem("jwtToken", token)
        
        : localStorage.removeItem( "jwtToken" );

}

const applyAuthToken = token => {

    token

        // Apply authorization token to every request if logged in
        ? axios.defaults.headers.common["Authorization"] = token

        // Delete auth header
        : delete axios.defaults.headers.common["Authorization"];

};

export const useAuthTokenStore = () => {

    const [ store, dispatch ] = useStoreContext();

    useEffect(() => {
        // Check for token to keep user logged in
        if (localStorage.jwtToken) {
            
            // Set auth token header auth
            const token = localStorage.jwtToken;
            
            // Decode token and get user info and exp
            const userAuth = jwt_decode(token);
            
            // Check for expired token
            const currentTime = Date.now() / 1000; // to get in milliseconds

            const invalidate = () => {

                // Logout user
                setAuthToken( false );
                dispatch(getStoreAction( LOGOUT_USER ));
                
                // Redirect to login
                window.location.href = "./";

            }
            
            if (userAuth.exp < currentTime) {
                
                invalidate();

            } else {

                applyAuthToken(token);

                // Validate the token with the server
                api
                    .authenticated()
                    .then( () => dispatch(getStoreAction( LOGIN_USER, userAuth )) )
                    .catch( invalidate );

            }

        }
    }, [])

}

export const useIsAuthenticated = () => {

    const [ { userAuth } ] = useStoreContext();

    return userAuth && userAuth.exp > Date.now() / 1000;

}

export const useLogin = () => {

    const [ store, dispatch ] = useStoreContext();

    return async ( credential ) => {
    
        const { data: { token } } = await api.login( credential );

        const userAuth = setAuthToken( token );

        dispatch(getStoreAction( LOGIN_USER, userAuth ));

        return userAuth;
        
    }
    
}

export const useLogout = () => {

    const [ store, dispatch ] = useStoreContext();

    return () => {

        setAuthToken( false );
        dispatch(getStoreAction(LOGOUT_USER));

        window.location.href = "./";

    }
    
}