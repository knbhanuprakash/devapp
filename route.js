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
                        <Route exact  path="/login" name="Login Page" component={Login}/>
                        <Route path="/" name="Home" component={AppFull}/>
                        </Switch>
                    </HashRouter >
                </Provider>
                )
    }
}
export default Routes;