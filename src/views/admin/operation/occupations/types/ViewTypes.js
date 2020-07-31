
/*eslint-disable*/
import React, {Fragment} from "react";
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

class ViewTypesOccupation extends React.Component{
    constructor (props){
        super(props);
        api.get(`/p/${this.props.match.params.slug}/occupation_types`).then(res => {
            this.setState({occupationstypes: res.data})
            if (res.ok){
                return res.json();
                }
        })    
        this.state = {
          occupationstypes: [],
        };
        
        }
    render(){
        const {occupationstypes} = this.state;
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
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                    Object.keys(occupationstypes).map((x,i) => (
                                        
                                    <> 
                                    <Fragment key={i}>
                                        {occupationstypes[x].map((occupationtype)=> 
                                        <Fragment>
                                            <tr className="text-center text-dark" >
                                                <td>{occupationtype.id}</td>
                                                <td>{occupationtype.name}</td>
                                                <td>
                                                <Link to={{pathname: `/admin/${this.props.match.params.slug}/tipo-funcao/${occupationtype.id}`}}>
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
export default ViewTypesOccupation;