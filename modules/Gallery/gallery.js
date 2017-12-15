import React, {Component} from 'react';
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input} from "reactstrap";
import {connect} from 'react-redux';
import * as galleryactions from '../../actions/galleryactions';
import {bindActionCreators} from 'redux';

class Gallery extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.actions.gettheproducts();
    }
    render() {
        return (
                <div className="animated fadeIn">
                    <Row>
                        <Col xs="12" sm="6" md="4">
                        <Card>
                        <CardHeader onClick={e => this.addcard(e)}>
                          Item
                        </CardHeader>
                        <CardBlock className="card-body">
                           <img src='../../scss/img/avatars/8.jpg'  alt="admin@bootstrapmaster.com"/>
                           <div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </div>
                        </CardBlock>
                        </Card>
                        </Col>
                        <Col xs="12" sm="6" md="4">
                        <Card>
                        <CardHeader onClick={e => this.addcard(e)}>
                          Item
                        </CardHeader>
                        <CardBlock className="card-body">
                           <img src='../../scss/img/avatars/8.jpg'  alt="admin@bootstrapmaster.com"/>
                           <div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </div>
                        </CardBlock>
                        </Card>
                        </Col>
                        <Col xs="12" sm="6" md="4">
                        <Card>
                        <CardHeader onClick={e => this.addcard(e)}>
                          Item
                        </CardHeader>
                        <CardBlock className="card-body">
                           <img src='../../scss/img/avatars/8.jpg'  alt="admin@bootstrapmaster.com"/>
                           <div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </div>
                        </CardBlock>
                        </Card>
                        </Col>
                        <Col xs="12" sm="6" md="4">
                        <Card>
                        <CardHeader onClick={e => this.addcard(e)}>
                          Item
                        </CardHeader>
                        <CardBlock className="card-body">
                           <img src='../../scss/img/avatars/6.jpg'  alt="admin@bootstrapmaster.com"/>
                           <div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </div>
                        </CardBlock>
                        </Card>
                        </Col>
                        <Col xs="12" sm="6" md="4">
                        <Card>
                        <CardHeader onClick={e => this.addcard(e)}>
                          Item
                        </CardHeader>
                        <CardBlock className="card-body">
                           <img src='../../scss/img/avatars/5.jpg'  alt="admin@bootstrapmaster.com"/>
                           <div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </div>
                        </CardBlock>
                        </Card>
                        </Col>
                        <Col xs="12" sm="6" md="4">
                        <Card>
                        <CardHeader onClick={e => this.addcard(e)}>
                          Item
                        </CardHeader>
                        <CardBlock className="card-body">
                           <img src='../../scss/img/avatars/8.jpg'  alt="admin@bootstrapmaster.com"/>
                           <div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </div>
                        </CardBlock>
                        </Card>
                        </Col>
                        <Col xs="12" sm="6" md="4">
                        <Card>
                        <CardHeader onClick={e => this.addcard(e)}>
                          Item
                        </CardHeader>
                        <CardBlock className="card-body">
                           <img src='../../scss/img/avatars/7.jpg'  alt="admin@bootstrapmaster.com"/>
                           <div>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </div>
                        </CardBlock>
                        </Card>
                        </Col>
                
                    </Row>
                
                </div>
                )
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

