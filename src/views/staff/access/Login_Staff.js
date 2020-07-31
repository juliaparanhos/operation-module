/*eslint-disable*/
import React from "react";
import {
Button,
Card,
CardHeader,
CardBody,
FormGroup,
Form,
Alert,
Input,
InputGroupAddon,
InputGroupText,
InputGroup,
Row,
Col,
CardTitle
} from "reactstrap";
import {Link, withRouter} from "react-router-dom";
import api from "api/api.js";
import imag from "assets/img/brand/planoa.png"



class LoginStaff extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.state ={
      email: undefined, 
      password: undefined,
      message: this.props.location.state?this.props.location.state.message: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let dataToSend = {
      
        email: this.state.email,
        password: this.state.password
    
    };
    console.log(JSON.stringify(dataToSend))
    fetch(`http://op.aurora.planoaeventos.com.br/api/auth/${this.props.match.params.slug}/login`, {
      //credentials: 'include',
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer' +  'operation_token',
      },
    })
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw new Error("Login inválido")
    })
    .then(token => {
      console.log(token);
          // localStorage.setItem('operation_token', token);
          localStorage.setItem('operation_token', JSON.stringify(token));
          this.props.history.push(`/admin/${this.props.match.params.slug}/index/staff`);
          return;
    })
    .catch(e => {
      this.setState({message: e.message})
    });
  }

  handleEmailChange(e){
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange(e){
    this.setState({
      password:  e.target.value
    })
  }
  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent">
              <div className="text-muted text-center mt-2 mb-3">
                  <img src={imag} style={{height: '40px'}}/>           
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Conecte-se <br/><b>Staff</b></small>
                {
                  this.state.message !== ''? (
                  <Alert color="danger" className="text-center">{this.state.message}</Alert>
                  ): ''
                  }
              </div>
              <Form role="form" onSubmit={this.handleSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email"  id="email" onChange={this.handleEmailChange}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Senha" type="password"  id="password" onChange={this.handlePasswordChange} />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Lembrar de mim</span>
                  </label>
                </div>
                <div className="text-center">
                  
                <Button className="my-4 text-uppercase" color="primary" type="submit" /*onClick={this.login}*/>
                    Entrar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default LoginStaff;
