
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

class ViewTimerows extends React.Component{
    constructor(props){
        super(props)
        api.get(`/p/${this.props.match.params.slug}/timerows`).then(res => {
            this.setState({timerows: res.data})
            if (res.ok){
                return res.json();
            }
        })
        this.state = {
            timerows: [],
        }
    }
    render(){
        const {timerows} = this.state;
        return(
            <>
                <Header/>
                <Container className="mt--7" fluid>
                    <Col md="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="font-weight-light" tag="h1">
                                    Lista de horários - {this.props.match.params.slug} &nbsp;
                                </CardTitle>
                                <Table hover responsive>
                                    <thead>
                                        <tr className="text-center" >
                                            <th>Inicio</th>
                                            <th>Final</th>
                                            <th>Data</th>
                                            <th>Nome</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                    Object.keys(timerows).map((x,i) => (
                                        
                                    <> 
                                    <Fragment key={i}>
                                        {timerows[x].map((time)=> 
                                        <Fragment>
                                            <tr className="text-center text-dark" >
                                                <td>{time.date_start}</td>
                                                <td>{time.date_end}</td>
                                                <td>{time.day.date}</td>
                                                <td>{time.day.name}</td>
                                                <td>
                                                <Link to={{pathname: `/admin/${this.props.match.params.slug}/horario/${time.id}`}}>
                                                         <Button size="sm" className="btn-link icon-shape rounded-circle" style={{height: '15px', marginTop: '-6px'}}> 
                                                             <i className="ni ni-bold-right"/>
                                                         </Button>
                                                    </Link>
                                                </td>
                                            </tr> 
                                    </Fragment>    
                                            )}
                                        </Fragment> 
                                        </> 
                                        
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
export default ViewTimerows;