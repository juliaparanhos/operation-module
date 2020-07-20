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


class CreateStaff extends React.Component{
    
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
                                    <Form>
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
                                                type="tel"
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
                                                placeholder="Nome"
                                                type="email"
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
                                                > 
                                                <option> --- </option>
                                                <option> Admin </option>
                                                <option> Moderador </option>
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
                                                > 
                                                <option> ---</option>
                                                <option> Sim</option>
                                                <option> Não </option>
                                                </Input>
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button color="success">Criar Staff</Button>
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