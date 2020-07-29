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
  Container,
  Row,
  Col,
  CardTitle
} from "reactstrap";
import Header from "components/Headers/Header.js";
import bckg from "../../../assets/img/theme/bg-4.svg";
import api from "../../../api/api.js";

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
                <div className="text-left">
                  <h4 className="card-title text-uppercase text-muted"> Minha alocação</h4>
                </div>  
                <div className="text-center">
                  <h1 className="text-muted font-weight-light"> Em breve </h1>
                </div>
              </CardBody>
            </Card>
          </Col>
          
        </Container>
            </>
        )
    }
}
export default IndexStaff;