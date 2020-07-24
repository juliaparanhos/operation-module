/*eslint-disable*/
import React from "react";
import {Redirect, Link} from "react-router-dom";
import {
Button,
Card,
CardHeader,
CardBody,
Row,
Col,
Input,
Form,
FormGroup,
CardTitle,
Container
} from "reactstrap";
import Header from "components/Headers/Header.js";
import SweetAlert from 'react-bootstrap-sweetalert';
import api from "api/api";


class CreateProject extends React.Component{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSlugChange = this.handleSlugChange.bind(this);
        this.state = {
          alert: null,
          name: undefined,
          slug: undefined,
          message: undefined
        };
      } 
    
      thisGoal() {
        const getAlert = () => (
          <SweetAlert 
            success 
            title="Novo Projeto" 
            onConfirm={() => this.hideAlert()}
          >
            Criado com Sucesso
          </SweetAlert>
        );
    
        this.setState({
          alert: getAlert()
        });
      }

      hideAlert() {
        this.setState({
          alert: null
        });
      }

      handleNameChange(e){
          this.setState({
              name: e.target.value
          })
      }

      handleSlugChange(e){
          this.setState({
              slug: e.target.value
          })
      }

      handleSubmit(e){
        e.preventDefault();
        let dataToSend = {
                name: this.state.name,
                slug: this.state.slug
        };
        console.log(JSON.stringify(dataToSend))
        var token = JSON.parse(localStorage.getItem('operation_token'))['access_token']
        fetch('http://op.aurora.planoaeventos.com.br/api/projects',{
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: new Headers ({
              'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',  
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }),
        })
        .then(response => {
            if(response.ok) {
              return response.json()
            }
            throw new Error("Error ao criar")
          })
          .then(token => {
            console.log(token);
               // localStorage.setItem('operation_token', token);
               localStorage.setItem('operation_token', JSON.stringify(token));
          })
          .catch(e => {
            this.setState({message: e.message})
          });
      }

    render(){
        return(
            <>
            <Header/>
                <Container className="mt--7" fluid>
                    <Col className="order-xl-1" xl="12">
                        <Card  className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0"> Novo Projeto</h3> 
                                    </Col>
                                    </Row>   
                                </CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                        Criar Projeto
                                    </h6>
                                    <div className="pl-lg-4">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Input name="nome" type="text" placeholder="Nome" onChange={this.handleNameChange}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Input name="slug" type="text" placeholder="Slug" onChange={this.handleSlugChange} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    </div>
                                    <Button className="btn-success text-uppercase" type="submit"  onClick={() => this.thisGoal()}>Criar Projeto</Button>
                                    {this.state.alert}
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </>
        )
    }
}

export default CreateProject;