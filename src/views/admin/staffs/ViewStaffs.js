/*eslint-disable*/
import React from 'react';
import {Link} from 'react-router-dom';
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
import api from '../../../api/api.js';

import Header from "components/Headers/Header.js";

class ViewStaffs extends React.Component{
    constructor (props){
        super(props);
          api.get('/projects').then(res => {
          console.log(res.data)
          this.setState({projects: res.data})
         Object.keys(this.state.projects).map((project,i) => (
                <div key={i}>
                    {this.state.projects[project].map((nome,ind)=>
                        api.get(`/p/${nome.slug}/staffs`).then(res => {
                            console.log(res.data)
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
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                            <CardBody>
                            {
                                Object.keys(projects).map((project,i) => (
                                    
                                <div key={i}>
                                    {projects[project].map((nome,ind)=>
                                        <CardTitle className="font-weight-light" tag="h1" key={ind}>Staffs - {nome.name} &nbsp;
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
                                        
                                        <tr className="text-center text-dark">
                                            <th>Foto</th>
                                            <th>ID</th>
                                            <th>Tipo</th>
                                            <th>Nome</th>
                                            <th>Telefone</th>
                                            <th>Email</th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        
                                            {
                                                Object.keys(staffs).map((staff,i) => (
                                                    
                                                <> {/*div key={i}*/}
                                                    {staffs[staff].map((nome,ind)=>
                                                        <tr  className="text-center" key={ind}>
                                                            <td  key={ind}>---</td>
                                                            <td  key={ind}>{nome.id}</td>
                                                            <td  key={ind}>{nome.type}</td>
                                                            <td  key={ind}>{nome.name}</td>
                                                            <td  key={ind}>---</td>
                                                            <td  key={ind}>{nome.email}</td>
                                                        </tr>
                                                    )}
                                                </> 
                                                
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

export default ViewStaffs;