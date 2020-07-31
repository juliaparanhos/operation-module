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

class Stock extends React.Component{
    constructor (props){
        super(props);
          api.get(`/p/${this.props.match.params.slug}/stock_storages`).then(res => {
            console.log(res.data)
            this.setState({stock: res.data})
            if (res.ok){
                return res.json();
              }
        })
        this.state = {
          stock: [],
        };
        
        }
    render(){
        const {stock} = this.state;

        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="font-weight-light" tag="h1">
                                    Estoque - {this.props.match.params.slug} &nbsp;
                                </CardTitle>
                               <Table hover responsive>
                                    <thead>
                                        <tr className="text-center" >
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Consumivel</th>
                                            <th>Qtd</th>
                                            <th>Retirar</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                         {
                                                Object.keys(stock).map((stocks,i) => (
                                                
                                                <Fragment key={i}>
                                                    {stock[stocks].map((item)=> 
                                                    <Fragment>
                                                        <tr className="text-center">
                                                            <td>{item.id}</td>
                                                            <td>{item.product.name}</td>
                                                            <td>{item.product.consumable}</td>
                                                            <td>{item.quantity}</td>
                                                            <td>
                                                                    <Button color="danger" size="sm" style={{marginTop: '-8px'}}>
                                                                        <i className="ni ni-fat-delete"/>
                                                                    </Button>
                                                            </td>
                                                        </tr>
                                                    </Fragment>    
                                                   )}
                                                   </Fragment> 
                                                
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
export default Stock;