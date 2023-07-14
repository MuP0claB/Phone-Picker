import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const storedExpDate = localStorage.getItem("expDate");

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  
  const userIsLoggedIn = !!token;
  
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    const storedToken = localStorage.getItem("token");
    console.log(storedToken);
  };

  const logoutHandler = () => {};

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
