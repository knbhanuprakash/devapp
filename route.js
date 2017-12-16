import { Provider } from 'react-redux';
import React from 'react';

import configureStore from './storecreate';
import {createBrowserHistory} from 'history';
import {Router , Route, Switch, Redirect} from 'react-router-dom';

import AppFull from './approutes';
import Login from './modules/login/login';

const store = configureStore();
const history = createBrowserHistory();
import {HashRouter, Link} from 'react-router-dom';
class Routes extends React.Component {
    render() {
        return (
                <Provider store={store}> 
                    <HashRouter>
                        <Switch>
                        <Route  path="/login" name="Login Page" component={Login}/>
                        <Route  path="/dashboard" name="Login Page" component={AppFull}/>
                        <Redirect from="/" name="Home"  to="login"/>
                        </Switch>
                    </HashRouter >
                </Provider>
                )
    }
}
export default Routes;