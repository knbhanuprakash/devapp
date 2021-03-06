import React from 'react';
import Header from './modules/Header/header';
import Login from './modules/login/Login';
import {Route, Switch, Redirect}
from 'react-router-dom';
import {Container}
from 'reactstrap';

class App extends React.Component {
render() {
return (
<div className="app">
    <Header />
    <Container fluid>
        <div className="app-body">
            <Switch>
            <Route path="/list" name="Dashboard" component={ShowList}/>

            <Redirect from="/" name="Home"  to="/list"/>
            </Switch>
        </div>
        </Container>
</div>
        );
    }
}
export default App;