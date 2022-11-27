import React from "react";
import './recentProps.css';
import RecentPropsNavbar from "../recentPropsNavbar/recentPropsNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecentDpto from "../recentDpto/recentDpto";
import RecentHouse from "../recentHouse/recentHouse";

const RecentProps = () => {

    return(
    
    <section className="recentPropsContainer">
        <div className="recentPropsTittleContainer">
            <h1 className="recentPropsTittle"> Ingresos Recientes </h1>
        </div>
    {/* <RecentPropsNavbar/>   */}
    <RecentDpto/>
    <RecentHouse/>
    </section>
    
    )
};

export default RecentProps;