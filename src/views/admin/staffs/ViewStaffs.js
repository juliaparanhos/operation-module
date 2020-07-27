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
import Header from "components/Headers/Header";

  
   
 class ViewStaffs extends React.Component{
  componentDidMount(){
        const { match: { params } } = this.props;
       return api.get(`/p/${params.slug}/staffs`).then(res => {
            console.log(res.data)
            this.setState({staffs: res.data})
        }).catch(error => {
          console.log(JSON.parse(JSON.stringify(error)))
        })
}
    constructor (props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
          staffs: [],
          error: undefined
        };
        
        }
    render(){
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
                                        
                                        
                                            {/*
                                                Object.keys(staffs).map((staff,i) => (
                                                    
                                                <> 
                                                <div key={i}>
                                                    {staffs[staff].map((nome,ind)=> */
                                                        <tr  className="text-center">
                                                            <td  >---</td>
                                                            <td  ></td>
                                                            <td  ></td>
                                                            <td  ></td>
                                                            <td  >---</td>
                                                            <td  ></td>
                                                            <td>
                                                                <Link to={{pathname: `/admin/projetos/${this.props.match.params.slug}/staffs/${this.props.match.params.id}`}}>
                                                                    <Button size="sm" className="btn-link icon-shape rounded-circle" style={{height: '15px', marginTop: '-6px'}}> 
                                                                        <i className="ni ni-bold-right"/>
                                                                    </Button>
                                                                </Link> 
                                                        
                                                            </td>
                                                        </tr>
                                                   /* )}
                                                   </div> 
                                                </> 
                                                
                                                ))
                                                    */}
                                        
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