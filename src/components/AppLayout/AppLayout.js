import {Outlet} from "react-router";
import {Navbar} from "../Navbar/Navbar";

import React, {Component} from 'react';

class AppLayout extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        );
    }
}

export {AppLayout};