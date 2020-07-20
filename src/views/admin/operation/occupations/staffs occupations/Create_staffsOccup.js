/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
import {
Button,
Card,
CardHeader,
CardBody,
Table,
Container,
Form,
FormGroup,
Input,
Label,
Row,
Col,
CardTitle
} from "reactstrap";
import Header from "components/Headers/Header.js";

class CreateStaffOccup extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        category: props.product.category,
        price: props.product.price,
      }
    }
    
    componentWillReceiveProps(nextProps){
      if(nextProps.product.category != this.state.category){
        this.setState({category: nextProps.product.category});
      }
      if(nextProps.product.price != this.state.price){
        this.setState({price: nextProps.product.price});
      }
    }
    
    render(){
      return(
        <Row>
          <Col lg="3">
            <h3 className="text-muted mb-4"> Produto: <span class="badge badge-dark">{this.state.category}</span></h3>
          </Col>
          <Col lg="2">
          <i className="ni ni-bold-right"/>
          </Col>
          <Col lg="2">
            <h3 className="text-muted mb-4">Qtd: <span class="badge badge-success">{this.state.price}</span></h3>
          </Col>
          <Col lg="1">
            <p className='name'>{this.state.name}</p>
          </Col>
        </Row>
      );
    }
  } 
  
  
  class NewItemTab extends React.Component {
    constructor() {
      super();
      this.state = {
        formErrors: {
          category: false,
          price: false,
        }
      }
    }
    
    checkForm(){
      let category = document.getElementById('newItemForm-category').value;
      let price = document.getElementById('newItemForm-price').value;
      let product = {category: category,price: price};
      let errors = this.state.formErrors;
      category.length == 0 ? errors.category = true : errors.category = false;
      price.length == 0 ? errors.price = true : errors.price = false;
      
      let image = new Image();
      image.onerror = () =>{
        this.finalizeForm(false, product);
      }
      image.onload = () =>{
        this.finalizeForm(true, product);
      }
      this.setState({formErrors: errors});
    }
    
    finalizeForm(isImageURLValid, product){
      
      if(isImageURLValid == false){
        let errors = this.state.formErrors;
        errors.imageURL = true;
        this.setState({formErrors: errors});
      } else {
        this.props.addNewProduct(product);
      }
    }
    
    renderCategorySelections(inventory){
      const categoryKeys = Object.keys(inventory.categories);
      const CKLength = categoryKeys.length;
      let options = [];
      
      const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      for(let i = 0; i<CKLength; i++){
        options.push(<option>{capitalize(categoryKeys[i])}</option>);
      }
      return options;
    }
    
    updateForm(){
      let category = document.getElementById('newItemForm-category').value;
      //let name = document.getElementById('newItemForm-name').value;
      let price = document.getElementById('newItemForm-price').value;
      //let imageURL = document.getElementById('newItemForm-imageURL').value;
      let errors = this.state.formErrors;
      if(this.props.formData.category != category){
        errors.category = false;
      }
      if(this.props.formData.price != price){
        errors.price = false;
      }
      this.setState({formErrors: errors});
      
      this.props.changeForm({category: category, price: price});
    }
    
    render(){
      return(
        <div className='NewItemTab'>
          <div className='newItem-input'>
              <br/>
            <Row>
            <Col lg="6">
            <FormGroup>
            <p>
              <label className="form-control-label">Produto</label>
              <Input type="select" className={this.state.formErrors.category == true ? 'formCheck-err' : ''} id='newItemForm-category' value={this.props.formData.category} onChange={() => this.updateForm()}>
                <option></option>{this.renderCategorySelections(this.props.inventory)}
              </Input>
            </p>
            </FormGroup>
            </Col>
            <Col lg="6">
            <FormGroup>   
            <p>
              <label className="form-control-label">Quantidade</label>
              <Input className={this.state.formErrors.price == true ? 'formCheck-err' : ''} type='number' required id='newItemForm-price' value={this.props.formData.price} onChange={() => this.updateForm()}/>
            </p>
            </FormGroup>
            </Col>
            </Row>
          </div>
          <div className='newItem-preview'>
         
            <h6 className="heading-small text-muted mb-4">
                Resumo
            </h6>
            
            <CreateStaffOccup product={this.props.formData} />
          
          </div>
          <Button color="success" onClick={() => this.checkForm()}>Confirmar Produto</Button>
        </div>
      );
    }
  }
  

  class MyRouter extends React.Component {
    
    route(active){
      switch(active){
        case 0:
          return <NewItemTab 
                   inventory={this.props.inventory}
                   formData={this.props.newItemFormData}
                   changeForm={this.props.changeNewItemForm}
                   addNewProduct={this.props.addNewProduct}
                   />
          break;
      }
    }
    
    render(){
      return(
        <div className='MyRouter'>
          {this.route(this.props.activeTab)}
        </div>
      );
    }
  }
  
  const Sidebar = (props) => {
    return(
      <div className="Sidebar">
          <Button size="sm" color="info" className='add-new-item' onClick={() => props.changeTab(0)}><span>Adicionar Produto</span></Button>
      </div>
    );
  }
  
  
  class InventoryManagementApp extends React.Component{
    constructor(){
      super();
      this.state = {
        activeTab: 1,
        inventory: {
          categories:{
            dresses:[],
            shirts:[],
            pants:[],
            accessories:[]
          }
        },
        newItemForm: {
          category: '',
          price: '',
        }
      };
    }
    
    changeActiveTab(index){
      this.setState({activeTab: index});
    }
    
    changeNewItemForm(formData){
      this.setState({newItemForm: formData});
    }
    
    addNewProduct(product){
      
      this.setState({newItemForm: {category: '',price: ''}});
      
      const decapitalize = (string) => {
        return string.charAt(0).toLowerCase() + string.slice(1);
      }
      
      product.category = decapitalize(product.category);
      let inventory = this.state.inventory;
      inventory.categories[product.category].push(product);
      
      this.setState({inventory:inventory});
    }
    
    render(){
      return(
        <>  
        <Header/>
        <Container className="mt--7">
        <Col className="order-xl-1" xl="12">
        <Card className="bg-secondary shadow ">
        <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
                <Col xs="8">
                    <h3 className="mb-0"> Definir estoque </h3> 
            </Col>
            </Row>   
        </CardHeader>
        <CardBody> 
        <Form>
        <h6 className="heading-small text-muted mb-4">
            Novo Estoque 
        </h6> 
          <div className="pl-lg-4">
            <Sidebar activeTab={this.state.activeTab} changeTab={this.changeActiveTab.bind(this)}/>
            <MyRouter 
              activeTab={this.state.activeTab} 
              inventory={this.state.inventory}
              newItemFormData={this.state.newItemForm}
              changeNewItemForm={this.changeNewItemForm.bind(this)}
              addNewProduct={this.addNewProduct.bind(this)}
              />
          </div>
        </Form> 
        </CardBody> 
        </Card>
        </Col>
        </Container>
        </>
      );
    }
  }
  
  

   export default InventoryManagementApp;