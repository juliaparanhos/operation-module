/*eslint-disable*/
import React from 'react';
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
          console.log(res.data)
          this.setState({projects: res.data})
        })
        this.state = {
          projects: [],
        };
        
        }
    render(){
        const { projects } = this.state;
        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                        <CardBody>
                        {
                          Object.keys(projects).map((project,i) => (
                              
                          <div key={i}>
                            {projects[project].map((nome,ind)=>
                                <CardTitle className="font-weight-light" tag="h1" key={ind}>Projeto - {nome.name} </CardTitle>
                            )}
                          </div> 
                         
                          ))
                        }

                        
                            <hr style={{marginTop: '-15px'}}/>
                            <Row className="justify-content-md-center">
                            <Col md="4">
                            <Card>
                                <CardImg  src={bckg1} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle className="text-uppercase"> Operação</CardTitle>
                                        <div className="text-center">
                                        {
                                            Object.keys(projects).map((project,i) => (
                                                
                                            <div key={i}>
                                                {projects[project].map((nome,ind)=>
                                                    <Link key={ind} to={{pathname: `/admin/projetos/${nome.slug}/estoque`}}>
                                                        <Button className="btn-success">Atualizar</Button>
                                                    </Link>
                                                )}
                                            </div> 
                                            
                                            ))
                                        }
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
                                        {
                                            Object.keys(projects).map((project,i) => (
                                                
                                            <div key={i}>
                                                {projects[project].map((nome,ind)=>
                                                    <Link key={ind} to={{pathname: `/admin/projetos/${nome.slug}/staffs`}}>
                                                        <Button className="btn-success">Atualizar</Button>
                                                    </Link>
                                                )}
                                            </div> 
                                            
                                            ))
                                        }                                                
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