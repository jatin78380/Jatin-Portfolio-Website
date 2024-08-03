import JPP from "../assets/JPP.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Navbar = () => {
  return (
    <div> 
        <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={JPP} alt="logo"/> 
        </div>
        <div className="m-8 flex itens-center justify-center gap-4 text-2xl">
         <a href="https://www.linkedin.com/in/jatin-parashar-1b1905222/"  className="text-blue-600" target="_blank">
          <FaLinkedin  />
          </a>
          <a href="https://github.com/jatin78380"  target="_blank"> 
          <FaGithub/>
          </a>
          <a href="https://leetcode.com/u/jatinparasharjkadb/" target="_blank">
          <SiLeetcode/>
          </a>

        </div>
        </nav>


      </div>
  )
}