function Users() {    
  
  return (
    <main>
      <h2 className="text-center">Users</h2>
      <div className="d-flex border pt-3">
        <div className="mb-3">
          <img className="mx-3" src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Users-Guest-icon.png" alt="" width={36} />
        </div>
        <div className="flex-coloumn mb-3">
          <div>
            <p className="px-3 fw-bolder">Name</p>
          </div>
          <div>
            <p className="px-3">Username</p>
          </div>
          <div>
            <p className="px-3">Email</p>
          </div>
          <div>
            <p className="px-3">Phone</p>
          </div>
          <div>
            <p className="px-3">Website</p>
          </div>
          <div>
            <p className="px-3">Company</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Users;
