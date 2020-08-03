/*eslint-disable*/
import React from 'react';
import {Link} from 'react-router-dom';
import {
Button,
Card,
CardHeader,
CardBody,
Table,
Label,
Form,
FormGroup,
Container,
Input,
Row,
Col,
CardTitle
} from "reactstrap";
import api from "api/api.js"
import Header from "components/Headers/Header.js";

class CreateTypeOccupation extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.state = {
            name: undefined,
            message: undefined,
        };
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let dataToSend = {
            name: this.state.name,
        };
        console.log(JSON.stringify(dataToSend))
        var token = JSON.parse(localStorage.getItem('operation_token'))['access_token']
        fetch(`http://op.aurora.planoaeventos.com.br/api/p/${this.props.match.params.slug}/occupation_types`,{
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
               this.props.history.push(`/admin/${this.props.match.params.slug}/tipos-funcao`);
               return;
          })
          .catch(e => {
            this.setState({message: e.message})
          });
    }
    render(){
        return(
            <>
            <Header/>
                <Container className="mt--7">
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0"> Tipo de Função - Operação </h3> 
                                   </Col>
                                </Row>   
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleSubmit}>
                                <h6 className="heading-small text-muted mb-4">
                                    Adicionar Tipo de Função
                                </h6>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Nome
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Nome"
                                            type="text"
                                            onChange={this.handleNameChange}
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Button color="success" type="submit">Novo Tipo</Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </>
        )
    }
}

export default CreateTypeOccupation;