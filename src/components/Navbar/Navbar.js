import {Link} from "react-router-dom";

import style from './Navbar.module.css'
import {AppRoutes} from "../../routing/AppRoutes";

import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        const buttons = [
            {
                Label: 'Main',
                route: AppRoutes.MAIN
            },
            {
                Label: 'Cars',
                route: AppRoutes.CARS
            },
            {
                Label: 'Posts',
                route: AppRoutes.POSTS
            },
            {
                Label: 'Comments',
                route: AppRoutes.COMMENTS
            },
        ]
        return (
            <div className={style.navbar}>
                {buttons.map((btn, idx) =>
                    <button key={idx}>
                        <Link key={idx} to={btn.route} style={{textDecoration: 'none', color: 'yellow'}}>
                            {btn.Label}
                        </Link>
                    </button>
                )}
            </div>
        );
    }
}

export {Navbar};