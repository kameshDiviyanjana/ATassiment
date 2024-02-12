import React from "react"
import Atlog from '../Assert/Logo.png'
const Footer = ()=>{
  
  
     return(
        <>
        <div className="  flex-1 row-span-2">
        <div className=" bg-primary w-full h-[324px] lg:flex lg:col-span-2 gap-10" >
           <div className=" lg:w-[800px] h-full bg-primary py-7 px-7">
         <div>
         <img src={Atlog} alt="log" width="160px"  class=" ml-6"/>
         </div>
            <div className=" py-9 px-9">
            <p className=" text-white">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
                              </p>
            </div>
           </div>
           <div className=" lg:w-[900px] lg:h-full  bg-primary lg:flex lg:col-span-2  md:flex md:col-span-2  gap-32">
            <div className=" w-[300px] h-full   bg-primary">
            <div class="lg:col-span-2 md:col-span-4 col-span-12 py-7 px-8">
                     <h5 class=" tracking-wide text-gray-100 font-semibold text-[21px]">Our Technologies</h5>
                     <ul class="list-none mt-6 space-y-2 text-gray-100">
                                <li>
                                  <a href="#" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                  ReactJS
                                  </a>
                                </li>
                                <li>
                                 <a href="#" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                 Gatsby
                                 </a>
                               </li>
                               <li>
                                 <a  href="" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                 NextJS
                                 </a>
                               </li>
                               <li>
                                 <a href="#" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                 NodeJS
                                 </a>
                               </li>
                               <li>
                                 <a href="#" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                 GraphQL
                                 </a>
                               </li>
                               <li>
                                 <a href="#" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                 Laravel
                                 </a>
                               </li>
                               
                     </ul>
             </div>
            </div>
            <div className=" w-[300px] h-full  bg-primary py-7 px-8">
            <div class="lg:col-span-2 md:col-span-4 col-span-12">
                     <h5 class=" tracking-wide text-gray-100 font-semibold text-[21px]">Our Services</h5>
                     <ul class="list-none mt-6 space-y-2 text-gray-100">
                                <li>
                                  <a href="#" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                  Social media Marketing
                                  </a>
                                </li>
                                <li>
                                 <a href="#" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                 Web & Mobile App Development
                                 </a>
                               </li>
                               <li>
                                 <a  href="" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                 Data & Analytics
                                 </a>
                               </li>
                               <li>
                                 <a href="#" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                 Google Marketing solutions
                                 </a>
                               </li>
                               <li>
                                 <a href="#" class="hover:text-gray-400 transition-all duration-150 ease-out">
                                 Search Engine Optimization
                                 </a>
                               </li>
                               
                     </ul>
             </div>
            </div>
           </div>
           
       </div>
       <div className=" lg:h-11 lg:w-full bg-primary justify-center">
        
          <div className=" lg:h-[2px] lg:w-[1190px]  bg-slate-50 lg:ml-36 md: w-auto ">

          </div> 
         <h1 className=" text-center text-white"> 
         Privacy Policy | Terms & Conditions
         </h1>
       </div>
        </div>
      
        </>
     )
}

export default Footer