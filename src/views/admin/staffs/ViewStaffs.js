/*eslint-disable*/
import React, {Fragment} from 'react';
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
import Header from "components/Headers/Header";

  
   
 class ViewStaffs extends React.Component{
    constructor (props){
        super(props);
        const { match: { params } } = this.props;
        api.get(`/p/${params.slug}/staffs`).then(res => {
             console.log(res.data)
             this.setState({staffs: res.data})
             return res;
         }).catch(error => {
           console.log(JSON.parse(JSON.stringify(error)))
         })
        this.state = {
          staffs: [],
          error: undefined
        };
        
        }
    render(){
        const {staffs} = this.state;
       console.log(this.props)
       console.log(this.state)
       console.log(window.location.href)
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
                                        <Fragment>
                                        <tr className="text-center text-dark">
                                            <th>Foto</th>
                                            <th>ID</th>
                                            <th>Tipo</th>
                                            <th>Nome</th>
                                            <th>Telefone</th>
                                            <th>Email</th>
                                            <th></th>
                                        </tr>
                                        </Fragment>
                                    </thead>
                                    <tbody>
                                        
                                            {
                                                Object.keys(staffs).map((staff,i) => (
                                                    
                                                <> 
                                                <Fragment key={i}>
                                                    {staffs[staff].map((nome)=> 
                                                    <Fragment>
                                                        <tr className="text-center">
                                                            <td>---</td>
                                                            <td>{nome.id}</td>
                                                            <td>{nome.type}</td>
                                                            <td>{nome.name}</td>
                                                            <td>{nome.phone}</td>
                                                            <td>{nome.email}</td>
                                                            <td>
                                                                <Link to={{pathname: `/admin/projetos/${this.props.match.params.slug}/staffs/${this.props.match.params.id}`}}>
                                                                    <Button size="sm" className="btn-link icon-shape rounded-circle" style={{height: '15px', marginTop: '-6px'}}> 
                                                                        <i className="ni ni-bold-right"/>
                                                                    </Button>
                                                                </Link> 
                                                            </td>
                                                        </tr>
                                                    </Fragment>    
                                                   )}
                                                   </Fragment> 
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