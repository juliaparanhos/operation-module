/*eslint-disable*/
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {
Button,
Card,
CardHeader,
CardBody,
Table,
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


class PlaceDetails extends React.Component{
    constructor (props){
        super(props);
        api.get(`/p/${this.props.match.params.slug}/places/${this.props.match.params.id}`).then(res => {
            this.setState({places: res.data})
        })
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this)
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this)
        this.state = {
          places: [],
          disabled: true,
          name: undefined, 
          description: undefined,
          image: undefined,
          address: undefined,
          latitude: undefined,
          longitude: undefined,
        };
        }
        handleClik() {
            this.setState( {disabled: !this.state.disabled} )
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
        fetch(`http://op.aurora.planoaeventos.com.br/api/p/${this.props.match.params.slug}/places/${this.props.match.params.id}`,{
            method: 'PUT',
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
    handleDelete(id){
        api.delete(`/p/${this.props.match.params.slug}/places/${this.props.match.params.id}`).then(res => {
            this.setState({places: res.data})
            this.props.history.push(`/admin/${this.props.match.params.slug}/locais`)
            .catch(err => {
                console.log(err)
            }) 
        })
    } 
    render(){
        const {places} = this.state;
        return(
            <>
            <Header/>
                <Container className="mt--7">
                <Col className="order-xl-1" xl="12">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                            <Col xs="8">
                            <h3 className="mb-0">Local - {this.props.match.params.slug} &nbsp;
                                
                            </h3>
                            </Col>
                        </Row>
                        </CardHeader>
                        <CardBody>
                        <Form onSubmit={this.handleSubmit}>
                                <h6 className="heading-small text-muted mb-4">
                                Informações - Local
                                </h6>
                                    <div className="pl-lg-4">
                                    {Object.entries(places).map(([key, place], i) => (
                                        <Fragment key={i}>
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
                                            defaultValue={place.name}
                                            type="text"
                                            onChange={this.handleNameChange}
                                            disabled = {(this.state.disabled)? "disabled" : ""}
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
                                            defaultValue={place.description}
                                            type="text"
                                            onChange={this.handleDescriptionChange}
                                            disabled = {(this.state.disabled)? "disabled" : ""}
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
                                            defaultValue={place.address}
                                            type="text"
                                            onChange={this.handleAddressChange}
                                            disabled = {(this.state.disabled)? "disabled" : ""}
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
                                            placeholder="Imagem URL"
                                            defaultValue={place.image}
                                            type="text"
                                            onChange={this.handleImageChange}
                                            disabled = {(this.state.disabled)? "disabled" : ""}
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
                                            defaultValue={place.latitude}
                                            type="text"
                                            onChange={this.handleLatitudeChange}
                                            disabled = {(this.state.disabled)? "disabled" : ""}
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
                                           defaultValue={place.longitude}
                                            type="text"
                                            placeholder="Logitude"
                                            onChange={this.handleLongitudeChange}
                                            disabled = {(this.state.disabled)? "disabled" : ""}
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    </Fragment>))}
                                    </div>
                                    <div className="text-center">
                                        <Row>
                                            <Col sm xs="4"> 
                                            <Button color="success">Salvar</Button>
                                            </Col>
                                            <Col sm xs="4">
                                            <Button color="primary" onClick = {this.handleClik.bind(this)}>Editar</Button>
                                            </Col>
                                            <Col sm xs="4">
                                            <Button color="danger" onClick={() => this.handleDelete(this.props.match.params.id)}>Excluir </Button>
                                            </Col>
                                        </Row>
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

export default PlaceDetails;