/*eslint-disable*/
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
Button,
Card,
CardHeader,
CardBody,
Table,
Container,
Row,
Col,
CardTitle
} from "reactstrap"; 
import Header from "components/Headers/Header.js";
import api from "api/api.js";

class StockIndex extends React.Component{
    constructor (props){
        super(props);
          api.get('/projects').then(res => {
          console.log(res.data)
          this.setState({projects: res.data})
          if (res.ok){
            return res.json();
          }
         Object.keys(this.state.projects).map((project,i) => (
                <div key={i}>
                    {this.state.projects[project].map((nome,ind)=>
                        api.get(`/p/${nome.slug}/stock_storages`).then(res => {
                            console.log(res.data)
                            this.setState({stock: res.data})
                            if (res.ok){
                                return res.json();
                              }
                        })
                    )}
                </div>                
            )
       )
         
          })
        this.state = {
          projects: [],
          staffs: [],
          stock: [],
        };
        
        }
    render(){
        const {projects} = this.state;
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
                                        <CardTitle className="font-weight-light" tag="h1" key={ind}>Estoque - {nome.name} &nbsp;
                                            <Button size="sm" className="btn-info icon-shape text-white border rounded-circle">
                                                    <i className="ni ni-fat-add"/>
                                            </Button>
                                        </CardTitle>
                                    )}
                                </div> 
                                
                                ))
                             }
                                <Table hover responsive>
                                    <thead>
                                        <tr className="text-center" >
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Consumivel</th>
                                            <th>Qtd</th>
                                            <th>Check Out</th>
                                            <th>Check In</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-center text-dark">
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>---</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </>
        )
    }
}
export default StockIndex;