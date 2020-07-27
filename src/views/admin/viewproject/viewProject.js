/*eslint-disable*/
import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {
Button,
Card,
CardHeader,
CardBody,
CardImg, 
CardText, 
CardSubtitle,
NavItem,
NavLink,
Nav,
Progress,
Table,
Container,
Row,
Col,
CardTitle
} from "reactstrap";
import api from '../../../api/api.js';
import bckg from '../../../assets/img/theme/staff-card.jpg';
import bckg1 from '../../../assets/img/theme/staffs-card.jpg';

import Header from "components/Headers/Header.js";

class viewProject extends React.Component{
    constructor (props){
        super(props);
          api.get('/projects').then(res => {
          this.setState({projects: res.data})
        })
        this.state = {
          projects: [],
        };
        
        }
        handleRemoveProjects(id) {
            api.delete(`/projects/${id}`).then(res => {
                this.setState({projects: res.data})
            })
           .catch(err => {
               console.log(err)
           }) 
        }
    render( ){
        console.log(this.props)
        const {projects} = this.state;
        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                        <CardBody> 
                            <CardTitle className="font-weight-light" tag="h1">Projeto - {this.props.match.params.slug} </CardTitle>
                            <hr style={{marginTop: '-15px'}}/>
                                <div style={{marginTop: '-20px'}}>
                                    
                                <Link to={{pathname: `/admin/editar-projeto/${this.props.match.params.id}`}}>
                                                <Button size="sm" color="warning"> Editar </Button>
                                                </Link>
                                                
                                        {
                                        Object.keys(projects).map((project,i) => (
                                            
                                        <div key={i}>
                                            {projects[project].map((nome,ind)=>
                                            <Fragment key={ind}>
                                               
                                                <Button onClick={() => this.handleRemoveProjects(nome.id)} size="sm" color="danger"> Deletar </Button>
                                                </Fragment>
                                            )}
                                        </div> 
                                        
                                        ))
                                        }
                              
                                </div>
                            <Row className="justify-content-md-center mt-3">
                            <Col md="4">
                            <Card>
                                <CardImg  src={bckg1} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="text-uppercase"> Estoque</CardTitle>
                                        <div className="text-center">
                                                    <Link to={{pathname: `/admin/projetos/${this.props.match.params.slug}/detalhamento`}}>
                                                        <Button className="btn-success">Atualizar</Button>
                                                    </Link>
                                            </div> 
                                    </CardBody>
                            </Card>
                            </Col>

                            <Col md="4">
                            <Card>
                                <CardImg  src={bckg} style={{height: '196px'}} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="text-uppercase">Staffs</CardTitle>
                                        <div className="text-center">
                                       
                                                    <Link to={{pathname: `/admin/projetos/${this.props.match.params.slug}/staffs`}}>
                                                        <Button className="btn-success">Atualizar</Button>
                                                    </Link>
                                             
                                            </div> 
                                    </CardBody>
                            </Card>
                            </Col>
                            <Col md="4">
                            <Card>
                                <CardImg  src={bckg} style={{height: '196px'}} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="text-uppercase">Operação</CardTitle>
                                        <div className="text-center">
                                            <Link to={{pathname: `/admin/projetos/${this.props.match.params.slug}/detalhamento-operacao`}}>
                                                <Button className="btn-success">Atualizar</Button>
                                            </Link>
                                        </div> 
                                    </CardBody>
                            </Card>
                            </Col>
                            </Row>
                        </CardBody>
                        </Card>
                    </Col>
          
                </Container>
            </>
        )
    }
}

export default viewProject;