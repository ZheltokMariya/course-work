import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserDataService from '../service/UserDataService';

class RegistrationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],

            username: '',
            password: '',
            active: 1,
            surname: '',
            name: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            country: '',
            speciality: '',
            description: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.getUsers = this.getUsers.bind(this)
    }

    componentDidMount() {
        console.log("registration form");
        this.getUsers();      
    }

    getUsers() {
        UserDataService.retrieveAllUsers()
            .then(
                response => {
                    console.log(response);
                    this.setState({users: response.data})
                }
            )
    }    

    validate(values) {
        let errors = {}
        let userNew = ''
        console.log(this.state.users)

        this.state.users.map(
            user =>
            {
                if (user.username !== null && values.username == user.username){
                    userNew = user.username
                }
            }
        )
        
        if (!values.username) {
            errors.username = 'Введите имя пользователя'
        } else if (values.username.length < 5) {
            errors.username = 'Имя пользователя должно содержать не менее 5 символов'
        } else if (/*this.state.*/userNew !== null && values.username == /*this.state.*/userNew) {
            errors.username = 'Такое имя пользователя уже существует'
        }         
        if (!values.surname) {
            errors.surname = 'Введите фамилию'
        }
        if (!values.name) {
            errors.name = 'Введите имя'
        }
        if (!values.password) {
            errors.password = 'Введите пароль'
        } else if (values.password.length < 5) {
            errors.password = 'Пароль должен содержать не менее 5 символов'
        }
        if (!values.email) {
            errors.email = 'Введите адрес электронной почты'
        } else if (values.email.length < 5) {
            errors.email = 'Адрес электронной почты должен содержать не менее 5 символов'
        }        
        console.log(errors)
        return errors   
    }

    onSubmit(values) {

        let user = {
            username: values.username,
            password: values.password,
            active: 1,
            surname: values.surname,
            name: values.name,
            email: values.email,
            phone: values.phone,
            dateOfBirth: '',
            country: values.country,
            speciality: values.price,
            description: values.description
        }

            UserDataService.createUser(user)
                .then(() => this.props.history.push('/login'))

        console.log(values);
    }

    render() {

        let { description, speciality, country, dateOfBirth, phone, email, name, surname, password, username} = this.state

        return (
            <div>
                <h3 className="text-center mt-5">Регистрация</h3>
                <div className="container">
                    <Formik
                        initialValues={{username, password, surname, name, email, phone, dateOfBirth, country, speciality, description}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="username" component="div"
                                        className="alert alert-warning" />

                                    <ErrorMessage name="password" component="div"
                                        className="alert alert-warning" />

                                    <ErrorMessage name="surname" component="div"
                                        className="alert alert-warning" />

                                    <ErrorMessage name="name" component="div"
                                        className="alert alert-warning" />

                                    <ErrorMessage name="email" component="div"
                                        className="alert alert-warning" />

                                    <fieldset className="form-group">
                                        <label>Имя пользователя: </label>
                                        <Field className="form-control" type="text" name="username"  />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Пароль: </label>
                                        <Field className="form-control" type="password" name="password"  />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Фамилия: </label>
                                        <Field className="form-control" type="text" name="surname"  />
                                    </fieldset>    
                                    <fieldset className="form-group">
                                        <label>Имя: </label>
                                        <Field className="form-control" type="text" name="name"  />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Email: </label>
                                        <Field className="form-control" type="text" name="email" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Номер телефона: </label>
                                        <Field className="form-control" type="text" name="phone" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Страна: </label>
                                        <Field className="form-control" type="text" name="country" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Специализация: </label>
                                        <Field className="form-control" type="text" name="speciality" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Описание: </label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    
                                    <button className="btn btn-primary" type="submit" /*onClick={() => this.getUserByUsername(username)}*/>Сохранить</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default RegistrationComponent