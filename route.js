import { Provider } from 'react-redux';
import React from 'react';

import configureStore from './storecreate';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './modules/login/Login';
import ShowList from './modules/Listing/list';

const store = configureStore();
const history = createBrowserHistory();

class Routes extends React.Component {
    render() {
        return (
                <Provider store={store}> 
                    <Router history={history}>
                        <Switch>
                        <Route  path="/login" name="Login Page" component={Login}/>
                        <Route path="/list" name="Dashboard" component={ShowList}/>
                        <Redirect from="/" name="Home"  to="/list"/>
                        </Switch>
                    </Router>
                </Provider>
                )
    }
}

export default Routes;