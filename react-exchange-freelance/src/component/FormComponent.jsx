import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import OfferService from '../service/OfferService';

class FormComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: '',
            description: '',
            summary: '',
            price: '',
            status: 1,
            date: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        console.log("offer form");      
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Введите название предложения'
        } else if (values.name.length < 5) {
            errors.name = 'Название предложения должно содержать не менее 5 символов'
        }
        return errors
    }

    onSubmit(values) {

        let offer = {
            name: values.name,
            category: values.category,
            description: values.description,
            summary: '',
            price: values.price,
            status: 1,
            date: ''
        }

        OfferService.createOffer(offer)
            .then(() => this.props.history.push('/offers/user')
        )

        console.log(values);
    }

    render() {

        let { date, status, price, summary, description, category, name } = this.state

        return (
            <div>
                <h3 className="text-center mt-5">Предложение о работе</h3>
                <div className="container">
                    <Formik
                        initialValues={{name, category, description, summary, price, status, date }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="name" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Название</label>
                                        <Field className="form-control" type="text" name="name"  />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Категория</label>
                                        <Field className="form-control" type="text" name="category" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Описание</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Оплата (в долларах)</label>
                                        <Field className="form-control" type="text" name="price" />
                                    </fieldset>
                                    
                                    <button className="btn btn-primary" type="submit">Сохранить</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default FormComponent