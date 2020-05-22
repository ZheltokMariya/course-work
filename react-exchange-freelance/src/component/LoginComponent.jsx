import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        this.registrationClicked = this.registrationClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    registrationClicked(){
        this.props.history.push(`/registration`)
    }

    loginClicked() {

        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/offers`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }

    render() {
        return (
            <div>                
                <div className="container">
                    <h1 className="text-center mt-5">Вход</h1>
                        <div className="form-group">
                            {this.state.hasLoginFailed && <div className="alert alert-warning">Имя пользователя и/или пароль указаны неверно</div>}
                            {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                            <label>Имя пользователя:</label> 
                            <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                            <label>Пароль:</label> 
                            <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} />                    
                        </div>
                        <button className="btn btn-primary" onClick={this.loginClicked}>Войти</button>
                </div>
                <div className="container">
                    <p className="text-center mt-5">Не зарегестрированы?</p>
                    <button className="btn btn-primary" onClick={this.registrationClicked}>Зарегестрироваться</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent