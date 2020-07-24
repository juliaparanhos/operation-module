
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

class ViewPlaces extends React.Component{
    constructor (props){
        super(props);
        api.get('/projects').then(res => {
            console.log(res.data)
            this.setState({projects: res.data})
            if (res.ok){
                return res.json();
                }
        })

        api.get(`/p/${this.props.match.params.slug}/occupations`).then(res => {
            console.log(JSON.stringify(res.data))
            this.setState({occupations: res.data})
            if (res.ok){
                return res.json();
            }
        })
        this.state = {
          projects: [],
          occupations: [],
        };
        
        }
    render(){
        const {occupations} = this.state;
        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="font-weight-light" tag="h1">
                                    Funções - {this.props.match.params.slug} &nbsp;
                                </CardTitle>
                                <Table hover responsive>
                                    <thead>
                                        <tr className="text-center" >
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Descrição</th>
                                            <th>Tipo</th>
                                            <th>Opções</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                           Object.keys(occupations).map((occupation,i) => (
                                  
                                        <div key={i}>
                                        {occupations[occupation].map((use,ind)=>
                                            <tr className="text-center text-dark" >
                                                <div key={ind}>
                                                <td>{use.id}</td>
                                                <td>{use.name}</td>
                                                <td>{use.description}</td>
                                                <td>{use.type}</td>
                                                <td>
                                                    <Button color="danger"><i className="ni ni-fat-delete"/></Button>
                                                </td>
                                                </div>
                                            </tr>
                                        )}
                                        </div>
                                     
                                         ))
                                      }    
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
export default ViewPlaces;