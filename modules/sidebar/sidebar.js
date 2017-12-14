import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Badge, Nav, NavItem} from 'reactstrap';
import classNames from 'classnames';
//import nav from './_nav'

class Sidebar extends Component {

    render() {

        return (
                <div className="sidebar">
                    <nav className="sidebar-nav">
                        <ul className="nav">
                            <li className="nav-item open">
                                <a className="nav-link active" href="main.html"><i className="icon-speedometer"></i> Dashboard <span className="badge badge-primary">NEW</span></a>
                            </li>
                
                            <li className="nav-title">
                                UI Elements
                            </li>
                            <li className="nav-item nav-dropdown">
                                <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-puzzle"></i> Components</a>
                                <ul className="nav-dropdown-items">
                                    <li className="nav-item">
                                        <a className="nav-link" href="components/buttons.html"><i className="icon-puzzle"></i> Buttons</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="components/social-buttons.html"><i className="icon-puzzle"></i> Social Buttons</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="components/cards.html"><i className="icon-puzzle"></i> Cards</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="components/forms.html"><i className="icon-puzzle"></i> Forms</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="components/modals.html"><i className="icon-puzzle"></i> Modals</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="components/switches.html"><i className="icon-puzzle"></i> Switches</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="components/tables.html"><i className="icon-puzzle"></i> Tables</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="components/tabs.html"><i className="icon-puzzle"></i> Tabs</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item nav-dropdown">
                                <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-star"></i> Icons</a>
                                <ul className="nav-dropdown-items">
                                    <li className="nav-item">
                                        <a className="nav-link" href="icons/font-awesome.html"><i className="icon-star"></i> Font Awesome <span className="badge badge-secondary">4.7</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="icons/simple-line-icons.html"><i className="icon-star"></i> Simple Line Icons</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="widgets.html"><i className="icon-calculator"></i> Widgets <span className="badge badge-primary">NEW</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="charts.html"><i className="icon-pie-chart"></i> Charts</a>
                            </li>
                            <li className="divider"></li>
                            <li className="nav-title">
                                Extras
                            </li>
                            <li className="nav-item nav-dropdown">
                                <a className="nav-link nav-dropdown-toggle" href="#"><i className="icon-star"></i> Pages</a>
                                <ul className="nav-dropdown-items">
                                    <li className="nav-item">
                                        <a className="nav-link" href="views/pages/login.html" target="_top"><i className="icon-star"></i> Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="views/pages/register.html" target="_top"><i className="icon-star"></i> Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="views/pages/404.html" target="_top"><i className="icon-star"></i> Error 404</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="views/pages/500.html" target="_top"><i className="icon-star"></i> Error 500</a>
                                    </li>
                                </ul>
                            </li>
                
                        </ul>
                    </nav>
                </div>
                )
    }
}

export default Sidebar;