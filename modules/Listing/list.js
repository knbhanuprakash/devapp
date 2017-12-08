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
        this.updateData = this.updateData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }
    updateState(type, event) {
        var obj = {};
        obj[type] = event.target.value;
        this.setState(obj);
    }
    savedata() {
        this.props.actions.createItem({name: this.state.data, email: this.state.email}).then(data => {
            this.setState({data: '', email: ''});
        });
    }
    updateData(data) {
        this.props.actions.updateItem(data);
    }
    deleteData(data) {
        this.props.actions.deleteItem(data);
    }
    componentDidMount() {
        this.props.actions.loadlist();
    }
    componentWillReceiveProps(props) {
        this.state.listData = props.listData;
    }
    render() {
         const tablecss={
                    marginLeft:'500px'
                }
        return (
                <div>
                    <input style={tablecss} type='text' className="form-control" value={this.state.data} onChange = {(e) => this.updateState('data', e)}/>
                    <input type='text' className="form-control" value={this.state.email} onChange = {(e) => this.updateState('email', e)}/>
                    <input  type='submit' className="form-control" onClick={this.savedata}/>
                    <div>
                        <table border='0' style={tablecss}>
                            <thead>
                                <tr>
                                    <th>
                                        Names{this.props.listData.length}
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.listData.map((dynamicComponent, i) => <Content 
                                key = {i} componentData = {dynamicComponent} updateData={this.updateData} deleteData={this.deleteData}/>)}
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
                    <td onClick={() => this.props.deleteData(this.props.componentData)}><button >Delete</button></td>     
                    <td onClick={() => this.props.updateData(this.props.componentData)}><button >Update</button></td>     
                </tr>
                );
    }
}
function mapStateToProps(state, ownProps) {
    const {listData} = state.list
    return {listData};
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(listActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
