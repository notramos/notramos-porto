const Project = () => {
  return (
    <section className="mb-10">
      <h2 className="text-4xl font-semibold mb-4 text-center">Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li
          className="bg-gray-600 shadow-2xl border border-emerald-500 rounded p-4 bg-cover bg-center flex flex-col justify-end"
          style={{
            backgroundImage: "url('/images/salondwi.png')",
            /* Menjaga gambar tetap utuh */
            backgroundPosition: "center",
            minHeight: "400px",
            /* Menyesuaikan dengan tinggi gambar */
          }}
        >
          <h3 className="text-xl font-bold text-center">Project 1</h3>
          <p className="text-white mt-2 text-center">Project Salon Dwi</p>
        </li>
      </ul>
    </section>
  );
};

export default Project;
