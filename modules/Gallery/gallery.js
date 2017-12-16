import React, {Component} from 'react';
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";
import {connect} from 'react-redux';
import * as galleryactions from '../../actions/galleryactions';
import {bindActionCreators} from 'redux';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.props.actions.gettheproducts().then(data => {
            console.log('dta', data.result)
            this.setState({data:data.result});
        });
    }
    render() {
        return (
                <div className="animated fadeIn">
                    <Row>
                        {this.state.data.map((dynamicComponent, i) => <Gallerycontent 
                            key = {i} componentData = {dynamicComponent}/>)}
                    </Row>
                
                </div>
                )
    }
}

class Gallerycontent extends React.Component {
    render() {
        const imagecss={
            width:"300px",
            height:"250px"
        }
        return (
                <Col xs="12" sm="6" md="4">
                <Card>
                <CardHeader onClick={e => this.addcard(e)}>
                <bold>Product Name:</bold>{this.props.componentData.name}
                </CardHeader>
                <CardBlock className="card-body">
                    <img src={this.props.componentData.Path}  alt="admin@bootstrapmaster.com" style={imagecss} />
                    <div>
                       {this.props.componentData.description}
                    </div>
                </CardBlock>
                </Card>
                </Col>
                );
    }
}
function mapStateToProps(state, ownProps) {
    const {listData} = state.list;
    console.log(state.list.listData.length, 'fine-----')
    return {listData};
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(galleryactions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

