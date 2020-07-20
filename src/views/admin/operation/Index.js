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
          api.get('/projects').then(res => {
          console.log(res.data)
          this.setState({projects: res.data})
          if (res.ok){
            return res.json();
          }
         
          })
        this.state = {
          projects: [],
        };
        
        }
    render(){
        const {projects} = this.state;
        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                            <CardBody>
                            {
                                Object.keys(projects).map((project,i) => (
                                    
                                <div key={i}>
                                    {projects[project].map((nome,ind)=>
                                        <CardTitle className="font-weight-light" tag="h1" key={ind}>
                                            Operação - {nome.name} &nbsp;
                                        </CardTitle>
                                    )}
                                </div> 
                                
                                ))
                             }
                                <Row className="justify-content-around"> 
                                    
                                <UncontrolledDropdown>
                                        <DropdownToggle color="primary">
                                                Locais
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem className="noti-title" header tag="div">
                                                <h6 className="text-overflow m-0">Locais</h6>
                                            </DropdownItem>

                                            {
                                            Object.keys(projects).map((project,i) => (
                                                
                                            <div key={i}>
                                                {projects[project].map((nome,ind)=>
                                                <Fragment key={ind}>
                                                    <DropdownItem  to={{pathname: `/admin/${nome.slug}/novo-local`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                            
                                                    <DropdownItem  to={{pathname: `/admin/${nome.slug}/locais`}} tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>
                                                </Fragment>    
                                                     )}
                                            </div> 
                                            
                                            ))
                                        } 
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
                                            {
                                                Object.keys(projects).map((project,i) => (
                                                    
                                                <div key={i}>
                                                    {projects[project].map((nome,ind)=>
                                                    <Fragment key={ind}>
                                                    <DropdownItem to={{pathname: `/admin/${nome.slug}/nova-funcao`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                                    <DropdownItem to={{pathname: `/admin/${nome.slug}/funcoes`}} tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem className="noti-title" header tag="div">
                                                        <h6 className="text-overflow m-0"> Tipos de Função</h6>
                                                    </DropdownItem>
                                                    <DropdownItem  to={{pathname: `/admin/${nome.slug}/novo-tipo-funcao`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                                    <DropdownItem to={{pathname: `/admin/${nome.slug}/tipos-funcao`}} tag={Link}>
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
                                                    )}
                                                </div> 
                                                ))
                                            } 
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
                                            {
                                                Object.keys(projects).map((project,i) => (
                                                    
                                                <div key={i}>
                                                    {projects[project].map((nome,ind)=>
                                                    <Fragment key={ind}>
                                                    <DropdownItem to={{pathname: `/admin/${nome.slug}/definir-tabela-horarios`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                                    <DropdownItem to={{pathname: `/admin/${nome.slug}`}} tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>
                                                    </Fragment>
                                                    )}
                                                </div> 
                                                ))
                                            } 
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