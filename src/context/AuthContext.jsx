import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  handleLogin: () => {},
});

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    token: localStorage.getItem("token") || null,
    isAuthenticated: false,
  });

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setState({ ...state, token: token });
    } else {
      setState({ isAuthenticated: false, token: null });
    }
  }, [setState]);

  return (
    <AuthContext.Provider value={{ ...state, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
