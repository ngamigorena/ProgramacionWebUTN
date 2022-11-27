import React from "react";
import { Link } from "react-router-dom";
import './recentPropsNavbar.css';
import RecentDpto from "../recentDpto/recentDpto";
import RecentHouse from "../recentHouse/recentHouse";

const RecentPropsNavbar = () => {

    return(

        <section className="recentPropsNav">
            <ul>
                <li>
                    <Link to="/recentDpto" className="recentPropsOptions">
                        Departamentos
                    </Link>
                </li>
                <li>
                    <Link to="/recentHouse" className="recentPropsOptions">
                        Casas - Chalets
                    </Link>
                </li>
            </ul>
            
    
        </section>  

    )
};

export default RecentPropsNavbar;