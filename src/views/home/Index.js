/*eslint-disable*/
import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle
} from "reactstrap";
import Header from "components/Headers/Header.js";
import bckg from "../../assets/img/theme/bg-4.svg";
import api from "../../api/api.js";

class Index extends React.Component {   
  constructor (props){
    super(props);
      api.get('/projects').then(res => {
      this.setState({projects: res.data})
      return res;
    }) 
    this.state = {
      projects: [],
      isLoading: false,
    };
    
    }
  render() {
    const { projects } = this.state;
    let estado 
    if (this.state.isLoading){
        estado = <> 
            <Header/>
            <Container className="mt--7" fluid>
          <Col md="12">
            <Card>
              <CardBody>
                <CardTitle className="font-weight-light" tag="h1">
                  Projetos 
                </CardTitle>
                <hr style={{marginTop: '-15px'}}/>
                <div className="text-center">
                  <h4 className="card-title text-uppercase text-muted"> Nenhum projeto em andamento</h4>
                  <img src={bckg}/>
                </div> 
                <div className="text-center mt-4">
                  <Link to="/admin/novo-projeto">
                    <Button className="btn-success">
                        Novo Projeto
                    </Button> 
                  </Link>
                </div> 
              </CardBody>
            </Card>
          </Col>
          
        </Container>
        </>
    } else {
      const bl = '/admin/projetos/:id'
      estado = <> 
          <Header/>
          <Container className="mt--7" fluid>
          <Col md="12">
            <Card>
              <CardBody>
                <CardTitle className="font-weight-light" tag="h1">
                  Projetos &nbsp;
                  <Link to="/admin/novo-projeto">
                      <Button size="sm" className="btn-info icon-shape text-white border rounded-circle">
                              <i className="ni ni-fat-add"/>
                      </Button>
                  </Link>
                </CardTitle> 
                <Table hover responsive>
                    <thead>
                      <tr>
                        <th className="text-right">Nome</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td> 
                        {
                          Object.keys(projects).map((project,i) => (
                              <div key={i}>
                                {projects[project].map((nome,ind)=>
                                  <Link key={ind} to={{ pathname:`/admin/projetos/${nome.slug}/${nome.id}`}} >
                                    <h4 className="text-primary text-uppercase text-right" key={ind}>{nome.name} </h4>
                                    <h4 className="text-primary text-uppercase text-right" hidden>{nome.id} </h4>
                                    </Link>
                                )}
                              </div> 
                          )) 
                        }
                       </td>
                      </tr>
                    </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Container>
      </>
    } 

    return estado;
    
    {/*return (
      <>
        <Header />
      
        <Container className="mt--7" fluid>
          <Col md="12">
            <Card>
              <CardBody>
                <CardTitle className="font-weight-light" tag="h1">
                  Estoque 
                </CardTitle>
                <hr style={{marginTop: '-15px'}}/>
                <div>
                 {
                 Object.keys(projects).map((project,i) => (
                 <div key={i}>
                   {projects[project].map((nome,ind)=>
                      <div key={ind}>{nome.name} </div>
                   )}
                 </div> 
                 ))
                   }
                  </div>
                <div className="text-center">
                  <h4 className="card-title text-uppercase text-muted"> Nenhum projeto em andamento</h4>
                  <img src={bckg}/>
                </div> 
                <div className="text-center mt-4">
                  <Link to="/admin/novo-projeto">
                    <Button className="btn-success">
                        Novo Projeto
                    </Button> 
                  </Link>
                </div> 
              </CardBody>
            </Card>
          </Col>
          
        </Container>
      </>
    );*/}
  }
}

export default Index;
