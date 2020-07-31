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
Label,
Input,
Row,
Col,
CardTitle
} from "reactstrap";
import api from "api/api.js"
import Header from "components/Headers/Header.js";


class ProductDetails extends React.Component{
    constructor (props){
        super(props);
        api.get(`/p/${this.props.match.params.slug}/products/${this.props.match.params.id}`).then(res => {
            this.setState({products: res.data})
            if (res.ok){
                return res.json();
              }
        })
        this.state = {
          products: [],
          disabled: true,
        };
        }
        handleClik() {
            this.setState( {disabled: !this.state.disabled} )
          }
    render(){
        const {products} = this.state;
        return(
            <>
            <Header/>
                <Container className="mt--7">
                <Col className="order-xl-1" xl="12">
                    <Card className="bg-secondary shadow">
                        <CardHeader className="bg-white border-0">
                        <Row className="align-items-center">
                            <Col xs="8">
                            <h3 className="mb-0">Staff - {this.props.match.params.slug} &nbsp;
                            </h3>
                            </Col>
                        </Row>
                        </CardHeader>
                        <CardBody>
                        <Form>
                                <h6 className="heading-small text-muted mb-4">
                                Informações - Produto
                                </h6>
                                    <div className="pl-lg-4">
                                    {Object.entries(products).map(([key, product], i) => (
                                        <Fragment key={i}>
                                    <Row>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label className="form-control-label"> Nome </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Nome"
                                            defaultValue= {product.name}
                                            type="text"
                                            disabled = {(this.state.disabled)? "disabled" : ""}
                                            />
                                        </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Descrição
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Descrição"
                                            type="text"
                                            defaultValue={product.description}
                                            disabled = {(this.state.disabled)? "disabled" : ""}
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Produto p/ Consumo
                                            </label>
                                            <Input 
                                            className="form-control-alternative"
                                            type="text"
                                            defaultValue={product.consumable}
                                            disabled= {(this.state.disabled)? "disabled":""}
                                            />
                                        </FormGroup>
                                        </Col>
                                        <Col lg="6">
                                        <FormGroup>
                                            <label
                                            className="form-control-label"
                                            >
                                            Imagem
                                            </label>
                                            <Input
                                            className="form-control-alternative"
                                            placeholder="Imagem URL"
                                            defaultValue={product.image}
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
                                            <Button color="danger">Excluir </Button>
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

export default ProductDetails;