/*eslint-disable*/
import React, {Fragment} from 'react';
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

class CreateOccupation extends React.Component{
    constructor(props){
        super(props);
        api.get(`/p/${this.props.match.params.slug}/occupation_types`).then(res => {
            console.log(res.data)
            this.setState({occupationstypes: res.data})
            if (res.ok){
                return res.json();
                }
        }) 
        this.state = {
            occupationstypes: [],
        }
       
    }

 

    render(){
        const {occupationstypes} = this.state;
        return(
            <>
            <Header/>
                <Container className="mt--7">
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0"> Função - Operação </h3> 
                                   </Col>
                                </Row>   
                            </CardHeader>
                            <CardBody>
                                <Form>
                                <h6 className="heading-small text-muted mb-4">
                                    Adicionar Função
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
                                            Descrição
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Descrição"
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
                                           Tipo
                                            </label>
                                            <Input 
                                             className="form-control-alternative"
                                             type="select"
                                             
                                            >
                                                {Object.entries(occupationstypes).map(([key,type], i) => (
                                                <Fragment key={i}> 
                                                    <option>---</option>
                                                    <option value={type.id}>{type.name}</option>
                                                </Fragment>
                                                ))}
                                               
                                            </Input>
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Button color="success" type="submit">Nova Função</Button>
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

export default CreateOccupation;