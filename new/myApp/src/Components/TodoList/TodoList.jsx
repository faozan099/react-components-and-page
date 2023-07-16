import { useEffect, useState } from "react";
import "./TodoList.css";
import Axios from "axios";

function TodosList() {
  const [data, setData] = useState([]);
  const [todos, setTodos] = useState("");

  // get data from API
  useEffect(() => {
    Axios.get("https://64afffbbc60b8f941af50a86.mockapi.io/api")
      .then((res) => {
        console.log("getting from", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // post data to API
  const handleClick = (e) => {
    e.preventDefault();
    Axios.post("https://64afffbbc60b8f941af50a86.mockapi.io/api", {
      todos: todos,
    })
      .then((res) => {
        console.log("post data", res);
        setData([...data, res.data]);
        setTodos("");
      })
      .catch((err) => console.log(err));
  };

  // delete data form API
  const dataDelete = (id) => {
    Axios.delete(`https://64afffbbc60b8f941af50a86.mockapi.io/api/${id}`)
      .then((res) => console.log("delete data", res))
      .catch((err) => console.log(err));
  };

  // mapping data from API
  const arr = data.map((data) => {
    return (
      <div key={data.id} className="d-flex py-2">
        <input type="checkbox" className="custom-control custom-checkbox " id="check" width={32} />
        <h6 className="m-0 justify-content-center align-item-center mx-auto">{data.todos}</h6>
        <img src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png" alt="tempat sampah" width={24} className="mx-3" onClick={(e) => dataDelete(data.id, e)} />
        <img src="https://cdn-icons-png.flaticon.com/512/266/266146.png" alt="edit" width={24} />
      </div>
    );
  });

  return (
    <div className="container-fluid login template d-flex justify-content-center align-items-centerbg-dark m-0">
      <div className="Box p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Todo List</h3>
          <div className="mb-2 d-flex">
            <input type="text" name="todos" id="todos" className="form-control" value={todos} onChange={(e) => setTodos(e.target.value)} />
            <button className="btn btn-primary ms-2" onClick={handleClick}>
              Add
            </button>
          </div>
        </form>
        {arr}
      </div>
    </div>
  );
}

export default TodosList;
