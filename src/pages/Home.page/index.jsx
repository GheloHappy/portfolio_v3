const Home = () => {
    return (
        <div className="w-full h-screen bg-gradient-to-r from-[#070505] to-[#460f0d] flex items-center justify-center">
            <div className="w-[40%] flex items-center justify-center h-full">
                <div className="w-5/6 rounded-full">
                    <img src="https://ik.imagekit.io/ghelowee/Portfolio/img-removebg.png?updatedAt=1721212130447" alt="profile" 
                    className="rounded-full"/>
                </div>
            </div>
            <div className="w-[60%] flex items-start justify-center h-full flex-col">
                <h1 className="font-squada text-white text-[4rem]">HI THERE! I AM</h1>
                <div className="text-[7rem] font-squada p-0 m-0 flex bg-gradient-to-b from-[#fd1008] to-[#5f211f] text-transparent bg-clip-text">
                    <h1>GHELONICO G. MALIGAYA</h1>
                </div>
                <h1 className="font-squada text-white text-[4rem]">SOFTWARE DEVELOPER</h1>
            </div>
        </div>
    )
}

export default Home