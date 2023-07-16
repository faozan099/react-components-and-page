import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Utils/PrivateRoutes";
import LoginPage from "./Page/Login/LoginPage"
import RegisterPage from "./Page/Register/RegisterPage"
import HomePage from "./Page/Home/HomePage"
import TodosPage from "./Page/Todos/TodosPage"
import CommentsPage from "./Page/Comment/CommentsPage"
import PostPage from "./Page/Post/PostPage";
import UserPage from "./Page/User/UserPage";

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
          <Route path="/post" element={<PostPage/>} />
          <Route path="/users" element={<UserPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
