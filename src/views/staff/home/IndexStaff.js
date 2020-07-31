/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  CardImg,
  Container,
  Row,
  Col,
  CardTitle
} from "reactstrap";
import Header from "components/Headers/Header.js";
import api from "../../../api/api.js";
import bckg from '../../../assets/img/theme/staff-card.jpg';
import bckg1 from '../../../assets/img/theme/staffs-card.jpg';
import bckg2 from '../../../assets/img/theme/operation-card.jpg';

class IndexStaff extends React.Component{
    render(){
        return(
            <>
                <Header/>
            <Container className="mt--7" fluid> 
          <Col md="12">
            <Card>
              <CardBody>
                <CardTitle className="font-weight-light" tag="h1">
                  Olá, Staff
                </CardTitle>
                <hr style={{marginTop: '-15px'}}/>
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
                          <CardImg className="" src={bckg2} style={{height: '196px'}} alt="Card image cap" />
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
export default IndexStaff;