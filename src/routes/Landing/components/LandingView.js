import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
  Button,
  Label,
  ButtonGroup,
} from 'reactstrap';

class LandingView extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }

  render() {

    return (
      <Container>
        <Row>
          <Col xs='12'>
            <Label>{`Count: ${this.props.count}`}</Label>
          </Col>
          <Col>
            <ButtonGroup>
              <Button color='success' onClick={this.props.increment}>Increment</Button>
              <Button color='primary' onClick={this.props.incrementAsync}>Increment async</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LandingView;
