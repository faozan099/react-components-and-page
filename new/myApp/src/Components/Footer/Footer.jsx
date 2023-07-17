function Footer() {
    const copyRight = new Date().getFullYear();
  return (
    <section className="bg-dark text-white text-center fixed-bottom">
      <h6 className="mb-0 py-2">&copy; {copyRight} Muhammad Faozan</h6>
    </section>
  )
}

export default Footer
