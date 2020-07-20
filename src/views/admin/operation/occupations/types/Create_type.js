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
                                <Form>
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