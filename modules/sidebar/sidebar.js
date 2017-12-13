import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Badge, Nav, NavItem} from 'reactstrap';
import classNames from 'classnames';
//import nav from './_nav'

 class Sidebar extends Component {

    handleClick(e) {
        e.preventDefault();
        e.target.parentElement.classList.toggle('open');
    }

    activeRoute(routeName, props) {
        // return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
        return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';

    }

    // todo Sidebar nav secondLevel
    // secondLevelActive(routeName) {
    //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    // }


    render() {

        return (
                <div className="sidebar">
                
                </div>
                )
    }
}

export default Sidebar;