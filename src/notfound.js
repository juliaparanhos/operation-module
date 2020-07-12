import React from "react";
import {
Col,
Card,
Row,
CardTitle
} from "reactstrap";

class NotFound extends React.Component{
    render(){
        return(
            <> 
                <Row className="justify-content-center-md mt-5">
                    <Col md="12">
                        <Card>
                            <CardTitle className="font-weight-light" tag="h1">
                                Not Found | 404
                            </CardTitle>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

export default NotFound;