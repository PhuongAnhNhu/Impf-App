import React from "react";
import { Row, Col } from "react-bootstrap";

export interface LoginScreenProps {
  username?: string;
  password: string;
}

const LoginScreen = ({ username, password }: LoginScreenProps) => {
  return (
    <div>
      LoginScreen
     
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
   
    </div>
  );
};

export default LoginScreen;
