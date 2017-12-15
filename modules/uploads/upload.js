import React from 'react';
import * as uploadActions from '../../actions/uploadaction';
import {bindActionCreators} from 'redux';

import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBlock, Label, Input, Table,
  Pagination,
  PaginationItem,
  PaginationLink} from "reactstrap";
  import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";
import ImageUploader from 'react-images-upload';

import {connect} from 'react-redux';

class Upload extends React.Component {

    constructor(props) {
        super(props);
         this.state = {
            name: '',
            decription: '',
            images:[],
        }

        this.uploadImage = this.uploadImage.bind(this);
        this.updateState = this.updateState.bind(this);
          this.onDrop = this.onDrop.bind(this);
    }
    uploadImage(){
        var formData = new FormData();
//        for (var i=0; i < this.state.images; i++) {
//       formData.append('picture', this.state.images[i]);
//    } 
    this.state.images.filter(function(val){
         formData.append('image', val);
    })
    formData.append('name', this.state.name);
    formData.append('gender', this.state.decription);
        this.props.actions.addproduct(formData).then(data => {
            this.setState({name:'', decription:'',images:[]});
        });
    }
    onDrop(picture) {
        this.setState({
            images: this.state.images.concat(picture),
        });
    }
     updateState(type, event) {
        var obj = {};
        obj[type] = event.target.value;
        this.setState(obj);
    }
    render() {
        const moveright={
            'marginLeft':'300px'
        }
        return (
         <div className="animated fadeIn" style={moveright}>
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Upload</strong>
                <small> Products</small>
              </CardHeader>
              <CardBlock className="card-body">
               
                <FormGroup row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="city">Product Name</Label>
                      <Input type="text" id="city" placeholder="Name" value={this.state.name} onChange = {(e) => this.updateState('name', e)}/>
                    </FormGroup>
                  </Col>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="postal-code">Product Description</Label>
                      <Input type="text" id="postal-code" placeholder="description" value={this.state.decription} onChange = {(e) => this.updateState('decription', e)}/>
                    </FormGroup>
                  </Col>
                  <Col xs="8">
                     <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
                  </Col>
                </FormGroup>
                <FormGroup>
                <button onClick={this.uploadImage}>Submit</button>
                </FormGroup>
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
        actions: bindActionCreators(uploadActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Upload);

