import React from "react"
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation__item"><NavLink to="/profile" activeClassName="navigation__item-active">Home</NavLink></li>
            <li className="navigation__item"><NavLink to="/music" activeClassName="navigation__item-active">Music</NavLink></li>
            <li className="navigation__item"><NavLink to="/news"  activeClassName="navigation__item-active">News</NavLink></li>
            <li className="navigation__item"><NavLink to="/dialogs" activeClassName="navigation__item-active">Message</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;