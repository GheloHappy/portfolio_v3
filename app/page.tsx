
export default function Home() {
  return (
    <>
      <div className="w-full bg-[#ffffff] flex flex-col justify-center items-center h-screen text-black p-5">
        <div className="w-[60%] h-full p-2 flex  gap-5 outfit">
          <div className="boder-[#a0a4ad] shadow-md solid rounded p-5 w-[30%] flex flex-col">
            <div className="w-full bg-[#a0a4ad] rounded-full flex items-center justify-center flex-col">
              <img src="https://ik.imagekit.io/ghelowee/Portfolio/img-removebg.png?updatedAt=1741418335430" alt="profile"
                className="w-full h-full rounded-full" />
            </div>
            <div className="mt-10 flex flex-col">
              <h1 className="text-2xl font-bold">Ghelonico Maligaya</h1>
              <span className="text-lg text-[#3a3939]">Programmer</span>
              <div className="mt-5 text-[#3a3939]">
                <p>A dedicated programmer committed to empowering businesses by transforming conventional apps into exceptional digital experiences that foster growth.</p>
              </div>
              <div className="mt-5 w-full text-white flex items-center justify-center font-bold text-[1.2rem] px-2">
                <button className="bg-black w-full rounded p-1 cursor-pointer hover:bg-[#464343]">CONTACT ME</button>
              </div>
              <hr  className="mt-5"/>
            </div>
          </div>
          <div className="w-[70%] h-full border-[#e5e7eb] shadow-md rounded p-2">

          </div>
        </div>
      </div>
    </>
  );
}
