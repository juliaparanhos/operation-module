/*eslint-disable*/
import React, { useCallback } from 'react';
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
import axios from "axios"
import Header from "components/Headers/Header";

  
   
 class ViewStaffs extends React.Component{
    componentDidMount(){
        api.get('/projects').then(res => {
            console.log(res.data)
            this.setState({projects: res.data})
        }).catch(error => {
            console.log(JSON.parse(JSON.stringify(error)))
        })
        api.get(`/p/${this.props.match.params.slug}/staffs`).then(res => {
            console.log(res.data)
            this.setState({staffs: res.data})
        }).catch(error => {
          console.log(JSON.parse(JSON.stringify(error)))
      })
}
    constructor (props){
        super(props);
      
        
        this.state = {
          projects: [],
          staffs: [],
          error: undefined
        };
        
        }
    render(){
        const { projects } = this.state;
        const {staffs} = this.state;
       console.log(this.props)
        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="font-weight-light" tag="h1">Staffs - {this.props.match.params.slug}  &nbsp;
                                    <Link to={{pathname: `/admin/${this.props.match.params.slug}/criar-staff`}}>
                                        <Button size="sm" className="btn-info icon-shape text-white border rounded-circle">
                                                <i className="ni ni-fat-add"/>
                                        </Button>
                                    </Link>
                                </CardTitle>
                                <Table hover responsive>
                                    <thead>
                                        
                                        <tr className="text-center text-dark">
                                            <th>Foto</th>
                                            <th>ID</th>
                                            <th>Tipo</th>
                                            <th>Nome</th>
                                            <th>Telefone</th>
                                            <th>Email</th>
                                            <th></th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        
                                        
                                            {
                                                Object.keys(staffs).map((staff,i) => (
                                                    
                                                <> 
                                                <div key={i}>
                                                    {staffs[staff].map((nome,ind)=>
                                                        <tr  className="text-center" key={ind}>
                                                            <td  key={ind}>---</td>
                                                            <td  key={ind}>{nome.id}</td>
                                                            <td  key={ind}>{nome.type}</td>
                                                            <td  key={ind}>{nome.name}</td>
                                                            <td  key={ind}>---</td>
                                                            <td  key={ind}>{nome.email}</td>
                                                            <td>
                                                             {
                                                                Object.keys(projects).map((project,i) => (
                                                                    
                                                                <div key={i}>
                                                                    {projects[project].map((use, ind)=>
                                                                        <Link key={ind} to={{pathname: `/admin/projetos/${use.slug}/staffs/${nome.id}`}}>
                                                                            <Button size="sm" className="btn-link icon-shape rounded-circle" style={{height: '15px', marginTop: '-6px'}}> 
                                                                                <i className="ni ni-bold-right"/>
                                                                            </Button>
                                                                        </Link> 
                                                                    )}
                                                                </div> 
                                                                
                                                                ))
                                                            }
                                                            </td>
                                                        </tr>
                                                    )}
                                                   </div> 
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