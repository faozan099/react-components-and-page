import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Utils/PrivateRoutes";
import LoginPage from "./Page/Login/LoginPage"
import RegisterPage from "./Page/Register/RegisterPage"
import HomePage from "./Page/Home/HomePage"
import TodosPage from "./Page/Todos/TodosPage"
import User from "./Page/User/User";
import CommentsPage from "./Page/Comment/CommentsPage"

function App() {
  return (
    <>
      <Routes>
        {/* public */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* sudah login */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/comments" element={<CommentsPage/>} />
          <Route path="/todos" element={<TodosPage/>} />
          <Route path="/user" element={<User/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
