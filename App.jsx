import React from 'react';
import Header from './modules/Header/header';
import ShowList from './modules/Listing/list';
class App extends React.Component {
    render() {
        return (
                <div> 
                    <Header/>
                    <ShowList/>
                </div>
                );
    }
}
export default App;