import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "!!style-loader!css-loader!./node_modules/bootstrap/dist/css/bootstrap.css";
import './scss/_custom.scss';
import '!!style-loader!css-loader!./scss/custom.css';
import '!!style-loader!css-loader!./scss/font-awesome.min.css';
import '!!style-loader!file-loader!./scss/simple-line-icons.min.css';
import ShowList from './modules/Listing/list';
import Routes from './route';
import Header from './modules/Header/header';
import Sidebar from './modules/sidebar/sidebar';

ReactDOM.render((
        <div  >
            <div >
                <Routes />
            </div>
        </div>
), document.getElementById('root'));

