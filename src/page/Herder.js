import React,{useState} from "react"
import Atlog from '../Assert/Logo.png'
import bar from '../Assert/Group2.png'
import { NavLink } from "react-router-dom"
const Heder = ()=>{
  const [dis,setdis] = useState(true)

  const navedisss= ()=>{
    setdis(!dis)
  }

     return(

      //   <div>
      //     <nav className="padding-x h-[70px] z-10 bg-primary px-2 py-2 ">
      //   <div className="flex items-center justify-between mt-1">
      //     <img src={Atlog} alt="log" width="160px"  className=" ml-6"/>
        
      //     <ul className="sm:mr-8 flex flex-1 items-center justify-end gap-4 max-lg:hidden space-x-7 mt-3 ">
      //       <li className="text-sm font-normal sm:leading-normal  hover:text-green-300 text-white"><NavLink to=" ">SERVICE</NavLink></li>
      //       <li className="text-sm font-normal leading-normal text-white hover:text-green-300"><NavLink to="About">ABOUT US</NavLink></li>
      //       <li className="text-sm font-normal leading-normal text-white hover:text-green-300"><NavLink to="Contact">CONTACT US</NavLink></li>
          
      //       <li className="text-sm font-normal leading-normal text-white hover:text-green-300"><NavLink to="Careers">CAREERS</NavLink></li>
      //     </ul>
      //     <div className="hidden max-lg:block cursor-pointer"><img src={bar} height="50px" width="50px" /></div>
      //   </div>
      // </nav>
      //   </div>
      <div className=' w-full lg:h-16 bg-primary  flex justify-center'>
      <div className=' bg-primary w-[1350px]  lg:grid lg:grid-cols-2'>
        <div className='  py-3 px-3 bg-primary'>
        
          <div className='   lg:grid grid-cols-2 '>
            <div >
            <img src={Atlog} alt="log" width="160px"  className=" ml-6"/>
        
            </div>
            <div >
            {/* <h1 className='float-end'>Tutlke</h1> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white float-end hidden max-lg:block cursor-pointer"  onClick={navedisss} >
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"  />
</svg>
            </div>
          
          </div>
         {/* <div className=' bg-red-400'>
         <h1 className=''>Tutlke</h1>
         </div> */}
        </div>
        <div className={` lg:flex lg:space-x-1 bg-primary ${dis && 'max-lg:hidden'} `}>
        <ul class= " lg:flex  lg:flex-1 mr-8  items-center justify-end gap-6  bg-primary  text-white font-mono  text-center ">
             <li class="navho "><NavLink to=" ">SERVICE</NavLink></li>
             <li class="navho"><NavLink to="About">ABOUT US</NavLink></li>
             <li class="navho  "><NavLink to="Contact">CONTACT US</NavLink></li>
             <li  class="navho "><NavLink to="Careers">CAREERS</NavLink></li>
          

           </ul>
          <button className=' w-[100px] h-[40px] bg-btn-prime text-white mt-2  max-lg:hidden '>Get Start</button>
          <button className=' w-[100px] h-[40px]  text-white mt-2   border-solid border-2  border-white max-lg:hidden  '>Get Start</button>
         

        </div>
              
      </div>
      </div>
      
     )
}

export default Heder