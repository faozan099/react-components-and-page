import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const username = useRef();
  const password = useRef();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})

  };

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem("dataUser", JSON.stringify(formData))
    localStorage.setItem("signUp", username.current.value);
    alert("pendaftaran berhasil silahkan masukan username dan kata sandi yang anda buat sebelumnya di halaman login")
    navigate("/");
  };

  return (
    <div className="container-fluid login template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary m-0">
      <div className="w-45 p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Register</h3>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Enter Username" className="form-control" onChange={handleChange} ref={username} />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter Password" className="form-control" ref={password} onChange={handleChange}/>
          </div>
          <div className="mb-2">
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label mx-2">
              Remember me
            </label>
            <div className="d-grid mt-2">
              <button className="btn btn-primary SignIn" style={{ padding: "4px 88px" }} onClick={handleClick}>
                Daftar
              </button>
            </div>
            <p className="pt-3">
              sudah punya <a href="/login">Akun</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
