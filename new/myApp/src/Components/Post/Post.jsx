import { useEffect, useState } from "react";
import Axios from "axios";

function Post() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log("getting from", res.data)
        setData(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = data.map((data) => {
    return (
      <main key={data.id}>
        <div className="d-flex border pt-3">
          <div className="mb-3">
            <img className="mx-3" src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Users-Guest-icon.png" alt="" width={36} />
          </div>
          <div className="flex-coloumn mb-3">
            <div>
              <p className="px-3 fw-bolder">{data.title}</p>
            </div>
            <div>
              <p className="px-3">
                {data.body}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  });

  return (
    <main>
      <h2 className="text-center">Post</h2>
      {arr}
    </main>
  );
}

export default Post;
