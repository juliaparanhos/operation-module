
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
           Object.keys(this.state.projects).map((project,i) => (
                  <div key={i}>
                      {this.state.projects[project].map((nome)=>
                          api.get(`/p/${nome.slug}/occupations`).then(res => {
                              console.log(JSON.stringify(res.data))
                              this.setState({occupations: res.data})
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
          occupations: [],
        };
        
        }
    render(){
        const {projects} = this.state;
        const {occupations} = this.state;
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
                                        <CardTitle className="font-weight-light" tag="h1" key={ind}>
                                            Funções - {nome.name} &nbsp;
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