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


class StaffsDetails extends React.Component{
    constructor (props){
        super(props);
        api.get(`/p/${this.props.match.params.slug}/staffs/${this.props.match.params.id}`).then(res => {
            this.setState({staffs: res.data})
        })
        api.get(`/p/${this.props.match.params.slug}/staffs/${this.props.match.params.id}/occupations`).then(res => {
            console.log(res.data)
            this.setState({occupationstaff: res.data})
        })
        this.state = {
          staffs: [],
          disabled: true,
        };
        }
        handleClik() {
            this.setState( {disabled: !this.state.disabled} )
          }
    render(){
        const {staffs} = this.state;
        return(
            <>
            <Header/>
                <Container className="mt--7">
                <Col className="order-xl-1" xl="12">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                            <Col xs="8">
                            <h3 className="mb-0">Staff - {this.props.match.params.slug} &nbsp;
                                
                            </h3>
                            </Col>
                        </Row>
                        </CardHeader>
                        <CardBody>
                        <Form>
                                <h6 className="heading-small text-muted mb-4">
                                Informações - Staff
                                </h6>
                                    <div className="pl-lg-4">
                                    {Object.entries(staffs).map(([key, staff], i) => (
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
                                            defaultValue={staff.name}
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
                                            Imagem URL
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Imagem URL"
                                            defaultValue={staff.image}
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
                                            Email
                                            </label>
                                            <Input
                                            className="form-control-alternative"    
                                            placeholder="Email"
                                            defaultValue={staff.email}
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
                                            Senha
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Senha"
                                            defaultValue={staff.password}
                                            type="text"
                                            disabled = {(this.state.disabled)? "disabled" : ""}
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                   
                                    <hr className="my-4" />
                                    <h6 className="heading-small text-muted mb-4">
                                    Adicional
                                    </h6>
                                   
                                    <Row>
                                        <Col lg="4">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Telefone
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Telefone"
                                            defaultValue={staff.phone}
                                            type="text"
                                            disabled = {(this.state.disabled)? "disabled" : ""}
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
                                            defaultValue={staff.type}
                                            type="text"
                                            disabled = {(this.state.disabled)? "disabled" : ""}
                                            />
                                        </FormGroup>
                                        </Col>
                                        <Col lg="4">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Status
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            defaultValue={staff.active}
                                            type="text"
                                            disabled = {(this.state.disabled)? "disabled" : ""}
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    </Fragment>  ))}
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

export default StaffsDetails;