import Nav from "./components/nav"


export default function Home() {
  return (
    <>
      <div className="w-full bg-[#171717] flex flex-col justify-center items-center h-screen">
        <div className="w-[70%] h-full p-2">
          <Nav />
          <h1 className="text-2xl text-white">Hello World</h1>
        </div>
      </div>
    </>
  );
}
