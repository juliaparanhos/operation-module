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

class CreateTime extends React.Component{
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
                                        <h3 className="mb-0"> Tabela de Horários - Operação </h3> 
                                   </Col>
                                </Row>   
                            </CardHeader>
                            <CardBody>
                                <Form>
                                <h6 className="heading-small text-muted mb-4">
                                    Adicionar Tabela de horários
                                </h6>
                                <div className="pl-lg-4">
                                    <Row>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Data inicial
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Data inicial"
                                            type="date"
                                            />
                                        </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                           Data final
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Data final"
                                            type="date"
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
                                           Intervalo
                                            </label>
                                            <Input 
                                             className="form-control-alternative"
                                             placeholder="Intervalo"
                                             type="number" 
                                            />
                                            
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Button color="success" type="submit">Confirmar</Button>
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

export default CreateTime;