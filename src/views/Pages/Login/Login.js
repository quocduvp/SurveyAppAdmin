import React, { Component } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'reactstrap';
import LoginForm from "./LoginForm";

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <LoginForm/>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
