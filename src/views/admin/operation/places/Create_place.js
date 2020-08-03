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

class CreatePlace extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this)
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this)
        this.state = {
            name: undefined, 
            description: undefined,
            image: undefined,
            address: undefined,
            latitude: undefined,
            longitude: undefined,
        };

    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        })
    }

    handleDescriptionChange(e){
        this.setState({
            description: e.target.value
        })
    }

    handleImageChange(e){
        this.setState({
            image: e.target.value
        })
    }

    handleAddressChange(e){
        this.setState({
            address: e.target.value
        })
    }

    handleLatitudeChange(e){
        this.setState({
            latitude: e.target.value
        })
    }

    handleLongitudeChange(e){
        this.setState({
            longitude: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let dataToSend = {
            name: this.state.name,
            description: this.state.description,
            image: this.state.image,
            address: this.state.address,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
        };
        console.log(JSON.stringify(dataToSend))
        var token = JSON.parse(localStorage.getItem('operation_token'))['access_token']
        fetch(`http://op.aurora.planoaeventos.com.br/api/p/${this.props.match.params.slug}/places`,{
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
               this.props.history.push(`/admin/${this.props.match.params.slug}/locais`);
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
                                        <h3 className="mb-0"> Local - Operação </h3> 
                                   </Col>
                                </Row>   
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleSubmit}>
                                <h6 className="heading-small text-muted mb-4">
                                    Adicionar Local
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
                                            onChange={this.handleNameChange}
                                            type="text"
                                            />
                                        </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Descrição
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Descrição"
                                            onChange={this.handleDescriptionChange}
                                            type="text"
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
                                           Endereço
                                            </label>
                                            <Input 
                                             className="form-control-alternative"
                                             placeholder="Endereço"
                                             onChange={this.handleAddressChange}
                                             type="text" 
                                            />
                                            
                                        </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Imagem
                                            </label>
                                            <Input 
                                            className="form-control-alternative" 
                                            type="text"
                                            onChange={this.handleImageChange}
                                            placeholder="Imagem URL"
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
                                            Latitude
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Latitude"
                                            onChange={this.handleLatitudeChange}
                                            type="text"
                                            />
                                        </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Longitude
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Longitude"
                                            onChange={this.handleLongitudeChange}
                                            type="text"
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Button color="success" type="submit">Novo Local</Button>
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

export default CreatePlace;