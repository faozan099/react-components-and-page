
function RegisterPage() {
  return (
    <div className="container-fluid login template d-flex justify-content-center align-items-center w-100 vh-100 bg-primary m-0">
      <div className="w-45 p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Register</h3>
          <div className="mb-2">
            <label htmlFor="username">
              Username
            </label>
            <input type="text" name="username" placeholder="Enter Username" className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter Password" className="form-control" />
          </div>
          <div className="mb-2">
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label mx-2">
              Remember me
            </label>
            <div className="d-grid mt-2">
              <a href="/"><button className="btn btn-primary SignIn" style={{padding: "4px 88px"}}>Daftar</button></a>
            </div>
            <p className="pt-3">sudah punya <a href="/">Akun</a></p>
          </div>
        </form>
      </div>
    </div>
    )
}

export default RegisterPage
