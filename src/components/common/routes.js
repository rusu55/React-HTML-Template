import React, { Fragment} from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../pages/home/home';
import Contact from "../pages/contact/contact";
import NotFound from "../pages/notFound/notFound";

const Routers = () =>(
    <Fragment>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="*" element={<NotFound/>} />
        </Routes>
    </Fragment>
)

export default Routers