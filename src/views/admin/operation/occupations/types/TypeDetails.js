/*eslint-disable*/
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {
Button,
Card,
CardHeader,
CardBody,
Table,
Form,
FormGroup,
Container,
Input,
Row,
Col,
CardTitle
} from "reactstrap";
import api from "api/api.js"
import Header from "components/Headers/Header.js";


class TypeOccupationDetails extends React.Component{
    constructor (props){
        super(props);
        api.get(`/p/${this.props.match.params.slug}/occupation_types/${this.props.match.params.id}`).then(res => {
            this.setState({occupationstypes: res.data})
        })
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this) 
        this.state = {
          occupationstypes: [],
          disabled: true,
          name: undefined,
          message: undefined,
        };
        }
          handleClik() {
            this.setState( {disabled: !this.state.disabled} )
            }
        
          handleNameChange(e){
            this.setState({
                name: e.target.value
            })
        }

        handleSubmit(e){
            e.preventDefault();
            let dataToSend = {
                name: this.state.name,
            };
            console.log(JSON.stringify(dataToSend))
            var token = JSON.parse(localStorage.getItem('operation_token'))['access_token']
            fetch(`http://op.aurora.planoaeventos.com.br/api/p/${this.props.match.params.slug}/occupation_types/${this.props.match.params.id}`,{
                method: 'PUT',
                body: JSON.stringify(dataToSend),
                headers: new Headers ({
                  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',  
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                }),
            })
            .then(response => {
                if(response.ok) {
                  return response.json()
                }
                throw new Error("Error ao editar")
              })
              .then(token => {
                console.log(token);
                   // localStorage.setItem('operation_token', token);
                   localStorage.setItem('operation_token', JSON.stringify(token));
                   this.props.history.push(`/admin/${this.props.match.params.slug}/tipos-funcao`);
                   return;
              })
              .catch(e => {
                this.setState({message: e.message})
              });
        }  

        handleDelete(id){
           api.delete(`/p/${this.props.match.params.slug}/occupation_types/${this.props.match.params.id}`).then(res => {
            this.setState({occupationstypes: res.data})
            this.props.history.push(`/admin/${this.props.match.params.slug}/tipos-funcao`)
            .catch(err => {
                console.log(err)
            }) 
        })
        }
    render(){
        const {occupationstypes} = this.state;
        return(
            <>
            <Header/>
                <Container className="mt--7">
                <Col className="order-xl-1" xl="12">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                            <Col xs="8">
                            <h3 className="mb-0">Tipo de Função - {this.props.match.params.slug} &nbsp;
                                
                            </h3>
                            </Col>
                        </Row>
                        </CardHeader>
                        <CardBody>
                        <Form onSubmit={this.handleSubmit}>
                                <h6 className="heading-small text-muted mb-4">
                                Informações - Tipo de Função
                                </h6>
                                    <div className="pl-lg-4">
                                    {Object.entries(occupationstypes).map(([key, occupationtype], i) => (
                                    <Fragment key={i}>
                                    <Row>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Nome
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Nome"
                                            defaultValue={occupationtype.name}
                                            onChange={this.handleNameChange}
                                            type="text"
                                            disabled = {(this.state.disabled)? "disabled" : ""}
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    </Fragment>))}
                                    </div>
                                    <div className="text-center">
                                        <Row>
                                            <Col sm xs="4"> 
                                            <Button color="success">Salvar</Button>
                                            </Col>
                                            <Col sm xs="4">
                                            <Button color="primary" onClick = {this.handleClik.bind(this)}>Editar</Button>
                                            </Col>
                                            <Col sm xs="4">
                                            <Button color="danger" onClick={() => this.handleDelete(this.props.match.params.id)}>Excluir </Button>
                                            </Col>
                                        </Row>
                                    </div>
                        
                        </Form>
                        </CardBody>
                    </Card>
            </Col>
                </Container>
            </>
        )
    }
}

export default TypeOccupationDetails;