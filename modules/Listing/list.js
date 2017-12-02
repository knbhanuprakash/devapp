import React from 'react';
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
        var fetcharray = this.state.listData.slice();
        fetcharray.push({name: this.state.data, email: this.state.email});
        this.setState({listData: fetcharray, data: '',email:''});
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
export default ShowList;