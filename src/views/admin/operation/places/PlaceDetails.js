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
        this.state = {
          places: [],
          disabled: true,
        };
        }
        handleClik() {
            this.setState( {disabled: !this.state.disabled} )
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
                        <Form>
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
                                            <Button color="danger">Excluir </Button>
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