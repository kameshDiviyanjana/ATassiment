import React from "react"
import homeImages from '../Assert/TopImage.png'
import Button from '../componets/Buttone'
import comImage from '../Assert/imagec2.png'
import imageSerch from '../Assert/images1.png'
const Home = ()=>{

    return(
        <div className=" grid  grid-rows-3   ">
          <div className=" w-full lg:h-[600px]  relative    ">
             <img src={homeImages} alt="Home log" className=" w-full lg:h-[600px] md:h-full  absolute  mix-blend-overlay  "/>
               <div className=" lg:w-[450px] lg:h-full    ">
                <div className=" absolute lg:bottom-0 lg:w-[490px] lg:h-[290px]   bg-gradient-to-r from-barkGeen via-barkgren2 to-analogous2 top-[250px]  lg:left-11  lg:px-3  ">
                  <h1 className="  text-5xl text-white font-serif py-3 px-3  ">We crush your competitors, goals, and sales records - without the B.S.</h1>
                  {/* <button className=" py-2 px-5 bg-seconcolor text-white ">Get free consultation</button> */}
                  <Button sty={'buttones'} name={'Get free consultation'} ></Button>
                </div>

               </div>
          </div>
         
           <section class=" grid gap-8 md:grid-cols-2   md:items-center md:text-left text-primary    bg-white  ">
                  <div className="  flex justify-end">
                        <img src={comImage}class="w-[414px] h-[414px]" alt="log" />
                 </div>

                 <div className="  justify-end h-32 " >
              <div className=" lg:w-[524px] lg:h-28 0  ">
                 
              <h1 class="mb-2 text-4xl font-medium">Web & Mobile App Development</h1>

                  <p className=" text-black mb-4">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
                              </p>

             <Button sty={'buttones'} name={'LEARN MORE'} ></Button>
                </div>
   
      </div>
           </section>
          
    
                
          <section class=" grid gap-8 md:grid-cols-2  justify-center md:items-center md:text-left text-primary   bg-white   mt-[100px]">
          <div className="  justify-end    h-32" >
              <div className=" lg:w-[524px] lg:h-28 0 lg:ml-[200px]">
                 
              <h1 class="mb-2 text-4xl font-medium">Digital Strategy Consulting</h1>

                  <p className=" text-black lg:mb-4">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                              </p>

             <Button sty={'buttones'} name={'LEARN MORE'} ></Button>
                </div>
   
      </div>
                         <div className=" sm:mt-16  ml-[70px]">

                          <img src={imageSerch}class="w-[414px] h-[414px]" alt="log" />
                   </div>
             </section>
        </div>
    )  

}


export default Home