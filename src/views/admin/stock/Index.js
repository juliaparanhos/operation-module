/*eslint-disable*/
import React, {useState} from "react";
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
          api.get('/projects').then(res => {
          console.log(res.data)
          this.setState({projects: res.data})
          if (res.ok){
            return res.json();
          }
         Object.keys(this.state.projects).map((project,i) => (
                <div key={i}>
                    {this.state.projects[project].map((nome,ind)=>
                        api.get(`/p/${nome.slug}/stock_storages`).then(res => {
                            console.log(res.data)
                            this.setState({stock: res.data})
                            if (res.ok){
                                return res.json();
                              }
                        })
                    )}
                </div>                
            )
       )
         
          })
        this.state = {
          projects: [],
          staffs: [],
          stock: [],
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
                                            Estoque - {nome.name} &nbsp;
                                        </CardTitle>
                                    )}
                                </div> 
                                
                                ))
                             }
                                <Row className="justify-content-around"> 
                                    
                                <UncontrolledDropdown>
                                        <DropdownToggle color="primary">
                                                Produtos
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                            <DropdownItem className="noti-title" header tag="div">
                                                <h6 className="text-overflow m-0">Produtos</h6>
                                            </DropdownItem>

                                            {
                                            Object.keys(projects).map((project,i) => (
                                                
                                            <div key={i}>
                                                {projects[project].map((nome,ind)=>
                                                    <DropdownItem key={ind} to={{pathname: `/admin/${nome.slug}/novo-produto`}} tag={Link}>
                                                        <i className="ni ni-single-02" />
                                                        <span>Cadastrar</span>
                                                    </DropdownItem>
                                                )}
                                            </div> 
                                            
                                            ))
                                        }  
                                            <DropdownItem to="/admin/" tag={Link}>
                                                <i className="ni ni-settings-gear-65" />
                                                <span>Visualizar</span>
                                            </DropdownItem>
                                            <DropdownItem to="/admin/" tag={Link}>
                                                <i className="ni ni-support-16" />
                                                <span>Reportar erro</span>
                                            </DropdownItem>
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
                                            <DropdownItem to="/admin" tag={Link}>
                                                <i className="ni ni-single-02" />
                                                <span>Criar</span>
                                            </DropdownItem>
                                            {
                                                Object.keys(projects).map((project,i) => (
                                                    
                                                <div key={i}>
                                                    {projects[project].map((nome,ind)=>
                                                    <DropdownItem key={ind} to={{pathname: `/admin/${nome.slug}/estoque`}} tag={Link}>
                                                        <i className="ni ni-settings-gear-65" />
                                                        <span>Visualizar</span>
                                                    </DropdownItem>
                                                    )}
                                                </div> 
                                                ))
                                            } 
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