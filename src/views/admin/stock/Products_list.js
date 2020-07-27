/*eslint-disable*/
import React from "react";
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

class ProductsList extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="font-weight-light" tag="h1">
                                    Produtos
                                </CardTitle>
                                <Table hover responsive>
                                    <thead>
                                        <tr className="text-center">
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Descrição</th>
                                            <th className="text-right">
                                                Opções
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-center">
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td className="text-right">
                                                <Link to={{pathname: `/admin/${this.props.match.params.slug}/produto/${this.props.match.params.id}`}}>
                                                <Button size="sm" className="btn-link border" style={{marginTop: '-10px'}}> <i className="ni ni-bold-right" /></Button>
                                                </Link>
                                            </td>
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

export default ProductsList;