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
        console.log('Alerta ok.');
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
            data: {
                name: this.state.name,
                slug: this.state.slug
            }
        };
        console.log(JSON.stringify(dataToSend))
        fetch('http://op.aurora.planoaeventos.com.br/api/projects',{
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
              "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(responseJson => {
        console.log(responseJson);
            if(responseJson.success){
            localStorage.setItem('operation_token', responseJson.token);
            }
     // console.log(response.json())
    })
      }

    render(){
        return(
            <>
            <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="font-weight-light" tag="h1">
                                    Novo Projeto
                                </CardTitle>
                                <hr style={{marginTop: '-15px'}}/>
                                <h5 className="text-muted font-weight-light" style={{marginTop: '-30px'}}>
                                    Complete para criar novo projeto
                                </h5>
                                <Form className="mt-4" onSubmit={this.handleSubmit}>
                                    <Row>
                                        <Col md="4">
                                            <FormGroup>
                                                <Input name="nome" type="text" placeholder="Nome" onChange={this.handleNameChange}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Input name="slug" type="text" placeholder="Slug" onChange={this.handleSlugChange} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Input name="desc" type="text" placeholder="A" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
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