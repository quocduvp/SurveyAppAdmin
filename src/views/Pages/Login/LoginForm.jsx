import React, {Component} from 'react';
import { Button, CardBody, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

//redux
import  {connect} from 'react-redux'
import {loginToAdmin} from "../../../redux/actions/actionsToken";

class LoginForm extends Component {
    state = {
        username : "",
        password : "",
        grant_type : "password"
    }
    changeForm(e){
        e.preventDefault()
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name] : value
        })
    }
    LoginAdmin(e){
        e.preventDefault()
        console.log(this.state)
        this.props.dispatch(loginToAdmin(this.state))
    }
    render() {
        return (
            <CardBody>
                <h1>Login</h1>
                <p className="text-muted">Sign In to your account</p>
                <form onSubmit={this.LoginAdmin.bind(this)}>
                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-user"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input name={'username'} onChange={this.changeForm.bind(this)} type="text" placeholder="Username" />
                </InputGroup>
                <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-lock"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input name={'password'} onChange={this.changeForm.bind(this)} type="password" placeholder="Password" />
                </InputGroup>
                <Row>
                    <Col className={'d-flex justify-content-end'} >
                        <Button type={'submit'} color="primary" className="px-4">Login</Button>
                    </Col>
                </Row>
                </form>
            </CardBody>
        );
    }
}



export default connect()(LoginForm);