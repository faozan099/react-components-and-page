import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage/LoginPage";
import RegisterPage from "./Components/RegisterPage.jsx/RegisterPage";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import PostPage from "./Components/PostPage/PostPage";
import CommentsPage from "./Components/CommentPage/CommentsPage";
import TodosPage from "./Components/TodosPage/TodosPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/comments" element={<CommentsPage/>}/>
          <Route path="/todos" element={<TodosPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
