import React, { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

const storedToken = localStorage.getItem('token');
const storedExpDate = localStorage.getItem('expDate');


export const AuthContextProvider = (props) => {
 const [token, setToken] = useState(null);

 const userIsLoggedIn = !!token;

 const loginHandler = () => {};

 const logoutHandler = () => {};

    return <AuthContext.Provider>{props.children}</AuthContext.Provider>
}

export default AuthContext;