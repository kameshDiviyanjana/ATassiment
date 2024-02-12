import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React,{Suspense} from "react";
import Home from '../page/Home'
import Heder from '../page/Herder'

const LayzAbout = React.lazy(()=>import("../page/About"))
const LayzContact = React.lazy(()=>import("../page/Contact"))
const LayzCareers = React.lazy(()=>import("../page/Creears"))
const Routerpage = ()=>{


     return(
        <>
         <Router>
      <Heder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={ <Suspense> <LayzAbout /></Suspense> } />
        <Route path="contact" element={<Suspense> <LayzContact /></Suspense>} />
        <Route path="careers" element={<Suspense> <LayzCareers /></Suspense>} />
      </Routes>
    </Router>
        </>
     )
}


export default Routerpage