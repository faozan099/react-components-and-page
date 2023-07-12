import "./TodosPage.css";

function TodosPage() {
  return (
    <div className="container-fluid login template d-flex justify-content-center align-items-centerbg-dark m-0">
      <div className="Box p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Todo List</h3>
          <div className="mb-2 d-flex">
            <input type="text" name="username" className="form-control" />
            <button className="btn btn-primary ms-2">Add</button>
          </div>
        </form>
        <div className="d-flex py-5">
          <input type="checkbox" className="custom-control custom-checkbox " id="check" width={32}/>
          <h6 className="m-0 justify-content-center align-item-center mx-auto">hallo</h6>
          <img src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png" alt="" width={24} className="mx-3"/>
          <img src="https://cdn-icons-png.flaticon.com/512/266/266146.png" alt="" width={24}/>
        </div>
      </div>
    </div>
  );
}

export default TodosPage;
