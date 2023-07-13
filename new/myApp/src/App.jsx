import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import Comments from "./Components/Comments/Comments";
import TodosList from "./Components/TodoList/TodoList";

function App() {
  return (
    <>
      <Routes>
        {/* public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* sudah login */}
        <Route path="/home" element={<Home />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/post" element={<Post />} />
        <Route path="/todo-list" element={<TodosList />} />

      </Routes>
    </>
  );
}

export default App;
