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
import api from "api/api.js"

class ProductsList extends React.Component{
    constructor(props){
        super(props);
        api.get(`/p/${this.props.match.params.slug}/products`).then(res => {
            this.setState({products: res.data})
            if (res.ok){
                return res.json();
              }
        })
        this.state = {
          products: [],
        };
    }
    render(){
        const {products} = this.state;
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
                                            <th>Imagem</th>
                                            <th>Consumível</th>
                                            <th className="text-right">
                                               
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       { Object.keys(products).map((x,i) => (             
                                    <>
                                    <Fragment key={i}>
                                        {products[x].map((product)=>  
                                        <Fragment>
                                        <tr className="text-center">
                                            <td>{product.id}</td>
                                            <td>{product.name}</td>
                                            <td>{product.description}</td>
                                            <td>{product.image}</td>
                                            <td> {product.consumable}</td>
                                            <td className="text-right">
                                                <Link to={{pathname: `/admin/${this.props.match.params.slug}/produto/${product.id}`}}>
                                                <Button size="sm" className="btn-link border" style={{marginTop: '-10px'}}> <i className="ni ni-bold-right" /></Button>
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

export default ProductsList;