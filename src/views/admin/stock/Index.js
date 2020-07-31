/*eslint-disable*/
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {
Button,
Card,
CardHeader,
CardBody,
Table,
Navbar,
Nav,
Media,
DropdownItem,
DropdownToggle,
UncontrolledDropdown,
DropdownMenu,
Container,
Row,
Col,
CardTitle
} from "reactstrap"; 
import Header from "components/Headers/Header.js";
import api from "api/api.js";

class StockIndex extends React.Component{
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
        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="font-weight-light" tag="h1">
                                    Estoque - {this.props.match.params.slug}  &nbsp;
                                </CardTitle>
                                
                                <Row className="justify-content-around"> 
                                    
                                <UncontrolledDropdown>
                                        <DropdownToggle color="primary">
                                                Produtos
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem className="noti-title" header tag="div">
                                                <h6 className="text-overflow m-0">Produtos</h6>
                                            </DropdownItem>
                                                <Fragment>
                                                    <DropdownItem  to={{pathname: `/admin/${this.props.match.params.slug}/novo-produto`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                            
                                                    <DropdownItem  to={{pathname: `/admin/${this.props.match.params.slug}/produtos`}} tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>

                                                    <DropdownItem  to="/admin/" tag={Link}>
                                                        <i className="ni ni-support-16" />
                                                        <span>Reportar erro</span>
                                                    </DropdownItem>
                                                </Fragment>  
                                         </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown>
                                        <DropdownToggle color="primary">
                                                Estoque
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem className="noti-title" header tag="div">
                                                <h6 className="text-overflow m-0">Estoque</h6>
                                            </DropdownItem>
                                                    <Fragment>
                                                    <DropdownItem to={{pathname: `/admin/${this.props.match.params.slug}/definir-estoque`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Definir</span>
                                                    </DropdownItem>
                                                    <DropdownItem to={{pathname: `/admin/${this.props.match.params.slug}/estoque`}} tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>
                                                    </Fragment>
                                            <DropdownItem to="/admin" tag={Link}>
                                                <i className="ni ni-support-16" />
                                                <span>Reportar erro</span>
                                            </DropdownItem>
                                         </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </>
        )
    }
}
export default StockIndex;