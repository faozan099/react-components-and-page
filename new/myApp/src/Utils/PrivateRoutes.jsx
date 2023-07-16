import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  let user = localStorage.getItem("signUp");
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default PrivateRoute;
