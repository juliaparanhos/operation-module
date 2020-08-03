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
import api from "api/api";


class CreateStaff extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleActiveChange = this.handleActiveChange.bind(this);
        this.state = {
          name: undefined,
          phone: undefined,
          email: undefined,
          password: undefined,
          image: undefined,
          type: undefined,
          active: undefined,
          message: undefined,
        };
      } 

    handleNameChange(e){
        this.setState({
            name: e.target.value
        })
    }
    handlePhoneChange(e){
        this.setState({
            phone: e.target.value
        })
    }
    handleEmailChange(e){
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        })
    }
    handleImageChange(e){
        this.setState({
            image: e.target.value
        })
    }
    handleTypeChange(e){
        this.setState({
            type: e.target.value
        })
    }
    handleActiveChange(e){
        this.setState({
            active: e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        let dataToSend = {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                password: this.state.password,
                image: this.state.image,
                type: this.state.type,
                active: this.state.active,
        };
        console.log(JSON.stringify(dataToSend))
        var token = JSON.parse(localStorage.getItem('operation_token'))['access_token']
        fetch(`http://op.aurora.planoaeventos.com.br/api/p/${this.props.match.params.slug}/staffs`,{
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: new Headers ({
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',  
            'Authorization': `Bearer ${token}`
            }),
    }).then(response => {
        if(response.ok) {
          return response.json()
        }
        throw new Error("Error ao criar")
      })
      .then(token => {
        console.log(token);
           localStorage.setItem('operation_token', JSON.stringify(token));
           this.props.history.push(`/admin/projetos/${this.props.match.params.slug}/staffs`);
           return;
      })
      .catch(error => {
        console.log(JSON.parse(JSON.stringify(error)))
      })
        
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
                                            <h3 className="mb-0"> Criar Staff </h3> 
                                    </Col>
                                    </Row>   
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit}>
                                    <h6 className="heading-small text-muted mb-4">
                                       Novo Staff
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
                                            <Col lg="6">
                                            <FormGroup>
                                                <label
                                                className="form-control-label"
                                                >
                                                Telefone
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                placeholder="Telefone"
                                                type="text"
                                                onChange={this.handlePhoneChange}
                                                />
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                            <FormGroup>
                                                <label
                                                className="form-control-label"
                                                >
                                                Email
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                placeholder="Email"
                                                type="text"
                                                onChange={this.handleEmailChange}
                                                />
                                            </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                            <FormGroup>
                                                <label
                                                className="form-control-label"
                                                >
                                                Senha
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                placeholder="Senha"
                                                type="text"
                                                onChange={this.handlePasswordChange}
                                                />
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="4">
                                            <FormGroup>
                                                <label
                                                className="form-control-label"
                                                >
                                                Foto
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                placeholder="Imagem URL"
                                                type="text"
                                                onChange={this.handleImageChange}
                                                />
                                            </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                            <FormGroup>
                                                <label
                                                className="form-control-label"
                                                >
                                                Tipo
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                type="select"
                                                onChange={this.handleTypeChange}
                                                > 
                                                <option> --- </option>
                                                <option value="1"> Admin </option>
                                                <option value="0"> Moderador </option>
                                                </Input>
                                            </FormGroup>
                                            </Col>
                                            <Col lg="4">
                                            <FormGroup>
                                                <label
                                                className="form-control-label"
                                                >
                                                Ativo
                                                </label>
                                                <Input
                                                className="form-control-alternative"
                                                type="select"
                                                onChange={this.handleActiveChange}
                                                > 
                                                <option> ---</option>
                                                <option value="1"> Sim</option>
                                                <option value="0"> Não </option>
                                                </Input>
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button type="submit" color="success">Criar Staff</Button>
                                        <Button color="primary">Importar CSV</Button>
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

export default CreateStaff;