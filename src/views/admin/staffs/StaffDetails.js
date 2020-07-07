/*eslint-disable*/
import React from 'react';
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
          api.get('/projects').then(res => {
          this.setState({projects: res.data})
         Object.keys(this.state.projects).map((project,i) => (
                <div key={i}>
                    {this.state.projects[project].map((nome,ind)=>
                        api.get(`/p/${nome.slug}/staffs`).then(res => {
                            this.setState({staffs: res.data})
                        })
                    )}
                </div>                
            )
       )
         
          })
        this.state = {
          projects: [],
          staffs: [],
        };
        
        }
    render(){
        const { projects } = this.state;
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
                            {
                                Object.keys(projects).map((project,i) => (
                                    
                                <div key={i}>
                                    {projects[project].map((nome,ind)=>
                                        <h3 className="mb-0" key={ind}>Staff - {nome.name} &nbsp;
                                            
                                        </h3>
                                    )}
                                </div> 
                                
                                ))
                            }
                            </Col>
                        </Row>
                        </CardHeader>
                        <CardBody>
                        <Form>
                        {
                            Object.keys(staffs).map((staff,i) => (
                            <div key={i}>
                                {staffs[staff].map((use)=>
                                <>
                                <h6 className="heading-small text-muted mb-4">
                                Informações - Staff
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
                                            value={use.name}
                                            type="text"
                                            />
                                        </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Sobrenome
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Sobrenome"
                                            type="email"
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
                                            value={use.email}
                                            type="text"
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
                                            value="******"
                                            type="text"
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    </div>
                                    <hr className="my-4" />
                                    <h6 className="heading-small text-muted mb-4">
                                    Adicional
                                    </h6>
                                    <div className="pl-lg-4">
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
                                            value={use.type}
                                            type="text"
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
                                            value={use.active}
                                            type="text"
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                
                                    </div>
                                    <Col>
                                        <Button color="primary">Editar</Button>
                                        <Button color="success">Salvar</Button>
                                    </Col>
                             </>       
                          )}           
                        </div>    
                       ))   
                    }    
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