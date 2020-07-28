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
import ReactDataSheet from 'react-datasheet';
import api from '../../api/api.js';
import Header from "components/Headers/Header.js";
class TableOperation extends React.Component{
    constructor(props) {
        super(props);
        api.get(``).then(res => {
            this.setState({})
          })
        this.state = { 
            grid: [
                [
                  { readOnly: true, value: '' },
                  { value: 'A', readOnly: true },
                  { value: 'B', readOnly: true },
                  { value: 'C', readOnly: true },
                  { value: 'D', readOnly: true },
                  { value: 'E', readOnly: true },
                ],
                [
                  { readOnly: true, value: 1 },
                  { value: '' },
                  { value: '' },
                  { value: ''},
                  { value: '' },
                  { value: '' },
                ],
                [
                  { readOnly: true, value: 2 },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                ],
                [
                  { readOnly: true, value: 3 },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                ],
                [
                  { readOnly: true, value: 4 },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                ],
                [
                  { readOnly: true, value: 5 },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                  { value: '' },
                ],
              ],
         }
      };

      valueRenderer = cell => cell.value;
  onCellsChanged = changes => {
    const grid = this.state.grid;
    changes.forEach(({ cell, row, col, value }) => {
      grid[row][col] = { ...grid[row][col], value };
    });
    this.setState({ grid });
  };
  onContextMenu = (e, cell, i, j) =>
    cell.readOnly ? e.preventDefault() : null;
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
                                        <h3 className="mb-0"> Tabela de Operação</h3> 
                                    </Col>
                                </Row> 
                            </CardHeader>
                            <CardBody>
                                <Form> 
                                    <h6 className="heading-small text-muted mb-4">
                                       Operação
                                    </h6>
                                  
                                    <ReactDataSheet
                                            data={this.state.grid}
                                            valueRenderer={this.valueRenderer}
                                            onContextMenu={this.onContextMenu}
                                            onCellsChanged={this.onCellsChanged}
                                            className="col-lg-12"
                                        />
                                 
                                   
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </>
        )
    }
}

export default TableOperation;