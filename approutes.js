import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import ShowList from './modules/Listing/list';
import Gallery from './modules/Gallery/gallery';
import Upload from './modules/uploads/upload';
import Shipping from './modules/shipping/shipping';
import Header from './modules/Header/header';
import Sidebar from './modules/sidebar/sidebar';
class AppFull extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Gallery}/>
                  <Route path="/list" name="Dashboard" component={ShowList}/>
                            <Route path="/gallery" name="Dashboard" component={Gallery}/>
                            <Route path="/upload" name="Dashboard" component={Upload}/>
                            <Route path="/cart" name="Dashboard" component={Shipping}/>
                            <Route path="/dashboard" name="Dashboard" component={AppFull}/>
              </Switch>
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default AppFull;
