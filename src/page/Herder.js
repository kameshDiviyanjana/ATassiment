import React from "react"
import Atlog from '../Assert/Logo.png'
import bar from '../Assert/Group2.png'
import { NavLink } from "react-router-dom"
const Heder = ()=>{


     return(

        <div>
          <nav className="padding-x h-[70px] z-10 bg-primary px-2 py-2 ">
        <div className="flex items-center justify-between mt-1">
          <img src={Atlog} alt="log" width="160px"  className=" ml-6"/>
        
          <ul className="sm:mr-8 flex flex-1 items-center justify-end gap-4 max-lg:hidden space-x-7 mt-3 ">
            <li className="text-sm font-normal sm:leading-normal  hover:text-green-300 text-white"><NavLink to=" ">SERVICE</NavLink></li>
            <li className="text-sm font-normal leading-normal text-white hover:text-green-300"><NavLink to="About">ABOUT US</NavLink></li>
            <li className="text-sm font-normal leading-normal text-white hover:text-green-300"><NavLink to="Contact">CONTACT US</NavLink></li>
          
            <li className="text-sm font-normal leading-normal text-white hover:text-green-300"><NavLink to="Careers">CAREERS</NavLink></li>
          </ul>
          <div className="hidden max-lg:block cursor-pointer"><img src={bar} height="50px" width="50px" /></div>
        </div>
      </nav>
        </div>
     )
}

export default Heder