import "./Home.css";
function Home() {
  return (
    <section className="container-fluid warna d-flex justify-content-center pt-5">
      <div className="px-5 ">
        <p className="px-5 deskripsi fs-4">
         Terimakasih sudah berkunjung.
        </p>
      </div>
      <div>
        <img
          className="avatar pl-5"
          src="https://img.freepik.com/free-vector/cute-people-playing-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4043.jpg?size=626&ext=jpg&ga=GA1.1.374328479.1678416409&semt=sph"
          alt=""width={360}
        />
      </div>
    </section>
  );
}

export default Home;
