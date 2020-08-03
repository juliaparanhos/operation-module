/*eslint-disable*/
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {
Card,
CardBody,
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

class OperationIndex extends React.Component{
    constructor (props){
        super(props);
         
        this.state = {
          projects: [],
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
                                <CardTitle className="font-weight-light" tag="h1" >
                                    Operação - {this.props.match.params.slug} &nbsp;
                                </CardTitle>
                               
                                <Row className="justify-content-around"> 
                                    
                                <UncontrolledDropdown>
                                        <DropdownToggle color="primary">
                                                Locais
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem className="noti-title" header tag="div">
                                                <h6 className="text-overflow m-0">Locais</h6>
                                            </DropdownItem>
                                                <Fragment>
                                                    <DropdownItem  to={{pathname: `/admin/${this.props.match.params.slug}/novo-local`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                            
                                                    <DropdownItem  to={{pathname: `/admin/${this.props.match.params.slug}/locais`}} tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>
                                                </Fragment>    
                                         </DropdownMenu>
                                    </UncontrolledDropdown>



                                    <UncontrolledDropdown>
                                        <DropdownToggle color="primary">
                                                Funções
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem className="noti-title" header tag="div">
                                                <h6 className="text-overflow m-0">Funções</h6>
                                            </DropdownItem>
                                                    <Fragment>
                                                    <DropdownItem to={{pathname: `/admin/${this.props.match.params.slug}/nova-funcao`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                                    <DropdownItem to={{pathname: `/admin/${this.props.match.params.slug}/funcoes`}} tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem className="noti-title" header tag="div">
                                                        <h6 className="text-overflow m-0"> Tipos de Função</h6>
                                                    </DropdownItem>
                                                    <DropdownItem  to={{pathname: `/admin/${this.props.match.params.slug}/novo-tipo-funcao`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                                    <DropdownItem to={{pathname: `/admin/${this.props.match.params.slug}/tipos-funcao`}} tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem className="noti-title" header tag="div">
                                                        <h6 className="text-overflow m-0"> Funções - Staffs</h6>
                                                    </DropdownItem>
                                                    <DropdownItem to="/admin" tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                                    <DropdownItem to="/admin" tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>
                                                    </Fragment>
                                                  
                                         </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown>
                                        <DropdownToggle color="primary">
                                                Horários
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem className="noti-title" header tag="div">
                                                <h6 className="text-overflow m-0">Horários</h6>
                                            </DropdownItem>
                                                    <Fragment>
                                                    <DropdownItem to={{pathname: `/admin/${this.props.match.params.slug}/definir-tabela-horarios`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                                    <DropdownItem to={{pathname: `/admin/${this.props.match.params.slug}/tabela-horarios`}} tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>
                                                    </Fragment>
                                                    
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
export default OperationIndex;