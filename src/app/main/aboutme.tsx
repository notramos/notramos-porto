import Image from "next/image";

const AboutMe = () => {
  return (
    <div id="aboutme">
      <h2 className="text-center text-4xl font-bold p-5 font-shadow mb-10 mt-32">
        ABOUT ME
      </h2>
      <section className="text-center mb-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 items-center justify-items-center">
        {/* Bagian Kualifikasi */}
        <div className="kualifikasi text-center p-4 rounded-lg shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="card flex flex-col items-center bg-gray-700 text-white p-10 rounded-lg shadow-lg ">
              <Image
                src="/icons/disiplin.svg"
                alt=""
                width={100}
                height={50}
                className="mb-5 "
              />
              <h3 className="text-lg font-medium ">Disiplin</h3>
            </div>
            <div className="card flex flex-col items-center bg-gray-700 text-white p-10 rounded-lg shadow-lg ">
              <Image
                src="/icons/teamwork.svg"
                alt=""
                width={100}
                height={50}
                className="mb-5"
              />
              <h3 className="text-lg font-medium">Kerja Tim</h3>
            </div>
            <div className="card flex flex-col items-center bg-gray-700 text-white p-10 rounded-lg shadow-lg ">
              <Image
                src="/icons/newlearn.svg"
                alt=""
                width={100}
                height={50}
                className="mb-5"
              />
              <h3 className="text-lg font-medium">Belajar Hal Baru</h3>
            </div>
            <div className="card flex flex-col items-center bg-gray-700 text-white p-10 rounded-lg shadow-lg ">
              <Image
                src="/icons/respon.svg"
                alt=""
                width={100}
                height={50}
                className="mb-5"
              />
              <h3 className="text-xl font-medium">Tanggung Jawab</h3>
            </div>
            <div className="card flex flex-col items-center bg-gray-700 text-white p-10 rounded-lg shadow-lg ">
              <Image
                src="/icons/solve.svg"
                alt=""
                width={100}
                height={50}
                className="mb-5"
              />
              <h3 className="text-xl font-medium">Problem Solve</h3>
            </div>
          </div>
        </div>
        {/* Bagian Penjelasan Detail */}
        <div className="penjelasan detail p-4 rounded-lg shadow-xl md:items-start md:self-start md:text-left md:w-full">
          <p className="text-gray-500 font-semibold text-4xl shadow-sm">
            Kualifikasi tersebut menunjukkan kemampuan saya untuk beradaptasi
            dan bekerja secara profesional di berbagai lingkungan kerja. Saya
            percaya bahwa dengan semangat belajar, tanggung jawab, dan kemampuan
            bekerja di bawah tekanan, saya dapat memberikan kontribusi terbaik
            pada tim dan perusahaan.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
