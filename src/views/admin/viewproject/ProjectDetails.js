/*eslint-disable*/
import React from "react";
import {
Button,
Card,
CardHeader,
CardBody,
Container,
Input,
FormGroup,
Row,
Form,
Col,
CardTitle
} from "reactstrap";
import api from '../../../api/api.js';
import Header from "components/Headers/Header.js";
class ProjectDetails extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSlugChange = this.handleSlugChange.bind(this);
        api.get(`/projects`).then(res => {
            this.setState({projects: res.data})
          })
        this.state = { 
            disabled: true,
            name: undefined,
            slug: undefined,
            projects: [],
            message: undefined,
         }
      }
      handleGameClik() {
        this.setState( {disabled: !this.state.disabled} )
      }
      handleNameChange(e){
        this.setState({
            name: e.target.value
        })
      }
      handleSlugChange(e){
        this.setState({
            slug: e.target.value
        })
      }
      handleSubmit(){
        let dataToSend = {
            name: this.state.name,
            slug: this.state.slug
    };

    console.log(JSON.stringify(dataToSend))
        var token = JSON.parse(localStorage.getItem('operation_token'))['access_token']
        fetch(`http://op.aurora.planoaeventos.com.br/api/projects`,{
            method: 'PUT',
            body: JSON.stringify(dataToSend),
            headers: new Headers ({
              'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',  
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }),
        }).then(response => {
            if(response.ok) {
              return response.json()
            }
            throw new Error("Error ao criar")
          })
          .then(token => {
            console.log(token);
               // localStorage.setItem('operation_token', token);
               localStorage.setItem('operation_token', JSON.stringify(token));
          })
          .catch(e => {
            this.setState({message: e.message})
          });
      }
    render(){
        const {projects} = this.state
        console.log(this.state)
        console.log(this.props)
        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0"> Informações</h3> 
                                    </Col>
                                </Row> 
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleSubmit}> 
                                    <h6 className="heading-small text-muted mb-4">
                                       Informações do projeto
                                    </h6>
                                    <div className="pl-lg-4">
                                                
                                    {
                                        Object.keys(projects).map((project,i) => (   
                                        <div key={i}>
                                            {projects[project].map((nome,ind)=>

                                        <Row key={ind}>
                                        <Col md="6">
                                            <FormGroup>
                                                <Input name="nome" type="text" placeholder="Nome" defaultValue={nome.name} onChange={this.handleNameChange} disabled = {(this.state.disabled)? "disabled" : ""}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Input name="slug" type="text" placeholder="Slug" defaultValue={nome.slug} onChange={this.handleSlugChange} disabled = {(this.state.disabled)? "disabled" : ""}/>
                                            </FormGroup>
                                        </Col>
                                        </Row>
                                        )}
                                        </div> 
                                        
                                        ))
                                        }  
                                    </div>
                                    <Button className="btn-success text-uppercase" type="submit" >Atualizar</Button>
                                    <Button color="primary" className="text-uppercase" type="button"  onClick = {this.handleGameClik.bind(this)} >Editar</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </>
        )
    }
}

export default ProjectDetails;