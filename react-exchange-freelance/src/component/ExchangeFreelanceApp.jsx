import React, { Component } from 'react';
import ListOffersComponent from './ListOffersComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import MenuComponent from './MenuComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import ProfileComponent from './ProfileComponent';
import UserOffersComponent from './UserOffersComponent';
import FeedbackComponent from './FeedbackComponent';
import UserResponseComponent from './UserResponseComponent';
import OfferComponent from './OfferComponent';
import UserComponent from './UserComponent';
import FormComponent from './FormComponent';
import RegistrationComponent from './RegistrationComponent';


class ExchangeFreelanceApp extends Component {
    render() {
        return (<>
              <Router>
                    <>
                        <MenuComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/registration" exact component={RegistrationComponent}/>
                            <AuthenticatedRoute path="/profile" exact component={ProfileComponent} />
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                            <AuthenticatedRoute path="/offers" exact component={ListOffersComponent} />
                            <AuthenticatedRoute path="/offers/user" exact component={UserOffersComponent}/>
                            <AuthenticatedRoute path="/offers/user/:id" component={FeedbackComponent}/>
                            <AuthenticatedRoute path="/offers/:id" component={OfferComponent}/>
                            <AuthenticatedRoute path="/create" component={FormComponent}/>
                            <AuthenticatedRoute path="/user/:id" component={UserComponent}/>
                            <AuthenticatedRoute path="/responses/user" component={UserResponseComponent}/>
                            <AuthenticatedRoute path="/response/offer/create/:id" component={ListOffersComponent}/>
                        </Switch>
                    </>
                </Router>
              </>
        )
    }
}

export default ExchangeFreelanceApp