import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listActions from '../../actions/listaction';

class ShowList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: '',
            email: '',
            listData: []
        }
        this.updateState = this.updateState.bind(this);
        this.savedata = this.savedata.bind(this);
    }
    updateState(type, event) {
        var obj = {};
        obj[type] = event.target.value;
        this.setState(obj);
    }
    savedata() {
        this.props.actions.createItem({name: this.state.data, email: this.state.email}).then(data => {
            var fetcharray = this.state.listData.slice();
            fetcharray.push({name: this.state.data, email: this.state.email});
            this.setState({listData: fetcharray, data: '', email: ''});
        });
    }
    componentDidMount() {
        this.props.actions.loadlist();
    }
    render() {
        return (
                <div>
                    <input type='text' className="form-control" value={this.state.data} onChange = {(e) => this.updateState('data', e)}/>
                    <input type='text' className="form-control" value={this.state.email} onChange = {(e) => this.updateState('email', e)}/>
                    <input type='submit' className="form-control" onClick={this.savedata}/>
                    <div>
                        <table border='0'>
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listData.map((dynamicComponent, i) => <Content 
                                key = {i} componentData = {dynamicComponent}/>)}
                            </tbody>
                
                        </table>
                    </div>
                </div>

                );
    }
}
class Content extends React.Component {
    render() {
        return (
                 <tr>
                    <td>{this.props.componentData.name}</td>    
                    <td>{this.props.componentData.email}</td>     
                </tr>
                );
    }
}
function mapStateToProps(state, ownProps) {
    let cat = {
        data: '',
        email: '',
        listData: []
    };
    return {data: cat};
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(listActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowList);