
/*eslint-disable*/
import React, {useState, Fragment} from "react";
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
            api.get(`/p/${this.props.match.params.slug}/places`).then(res => {
                this.setState({places: res.data})
                if (res.ok){
                    return res.json();
                }
            })
        this.state = {
          places: [],
        };
        
        }
    render(){
        const {places} = this.state;
        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="font-weight-light" tag="h1">
                                    Lugares - {this.props.match.params.slug} &nbsp;
                                </CardTitle>
                                   
                                <Table hover responsive>
                                    <thead>
                                        <tr className="text-center" >
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Descrição</th>
                                            <th>Endereço</th>
                                            <th>Opção</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {Object.keys(places).map((x,i) => (
                                        <Fragment key={i}>
                                            {places[x].map((place, ind)=> <Fragment> 
                                            <tr key={ind} className="text-center text-dark" >
                                                    <td>{place.id}</td>
                                                    <td>{place.name}</td>
                                                    <td>{place.description}</td>
                                                    <td>{place.address}</td>
                                                    <td> 
                                                        <Link to={{pathname: `/admin/${this.props.match.params.slug}/local/${place.id}`}}>
                                                            <Button size="sm" className="btn-link icon-shape rounded-circle" style={{height: '15px', marginTop: '-6px'}}> 
                                                                <i className="ni ni-bold-right"/>
                                                            </Button>
                                                        </Link>
                                                    </td>
                                            </tr> 
                                            </Fragment>
                                            )}
                                            </Fragment>
                                               ))}     
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