import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { useUserAuth } from "./contexts/UserAuthContextProvider";

const ProtectedRoute = (props) => {
  const { userData } = useUserAuth();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem("user");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return navigate("/error");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
export default ProtectedRoute;
