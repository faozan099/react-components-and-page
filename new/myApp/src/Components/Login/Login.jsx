import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  
  const navigate = useNavigate();

  const username = useRef();
  const password = useRef();


  const handleClick = (e) => {
    e.preventDefault();
    let user = localStorage.getItem("dataUser");
    let userData = JSON.parse(user)
    console.log(userData)
    console.log(username)
    if (username.current.value == userData.username && password.current.value == userData.password) {
      navigate("/home");
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="container-fluid login template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary m-0">
      <div className="w-45 p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Login</h3>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Enter Username" className="form-control" ref={username}/>
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter Password" className="form-control" ref={password}/>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label mx-2">
              Remember me
            </label>
            <div className="d-grid mt-2">
              <button className="btn btn-primary SignIn" style={{ padding: "4px 88px" }} onClick={handleClick}>
                Masuk
              </button>
            </div>
            <p className="pt-3">
              belum punya <a href="/register">Akun</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
