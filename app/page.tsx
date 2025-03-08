import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import TeckStack from "./components/tech-stack";
import AboutMe from "./components/about-me";
import Journey from "./components/journey";
import Projects from "./components/projects";

export default function Home() {

  return (
    <>
      <div className="w-full bg-[#ffffff] flex flex-col justify-center items-center text-black p-5">
        <div className="w-[60%] p-2 flex gap-5 outfit">
          <div className="w-[30%] flex flex-col items-center justify-center gap-5">
            <div className="boder shadow-md solid rounded p-5 w-full flex flex-col">
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
                {/* <div className="mt-5 w-full text-white flex items-center justify-center font-bold text-[1rem] px-2">
                  <button className="bg-black w-full rounded p-1 cursor-pointer hover:bg-[#464343]">CONTACT ME</button>
                </div> */}
                <hr className="mt-5 text-[#3a3939]" />
                <div className="mt-5 flex flex-col items-start justify-start gap-1">
                  <a className="flex gap-2 items-center justify-center" href="https://github.com/GheloHappy"><FaGithub />/GheloHappy</a>
                  <a className="flex gap-2 items-center justify-center" href="https://www.linkedin.com/in/ghelonico-maligaya-52a3bb204/"><FaLinkedin />ghelonico-maligaya</a>
                  <span className="flex gap-2 items-center justify-center"><SiGmail />ghelonicomaligaya111@gmail.com</span>
                </div>
              </div>
            </div>
            <TeckStack />
          </div>

          <div className="w-[70%] flex flex-col items-center gap-5">
            <AboutMe />
            <Journey />
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
