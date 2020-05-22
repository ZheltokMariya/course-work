import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class MenuComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            
                <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                    <div><a className="navbar-brand text-white">Freelance</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/offers">Предложения о работе</Link></li>
                        
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/responses/user">Мои ответы</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/offers/user">Мои предложения</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/profile">Профиль</Link></li>}
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Войти</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Выйти</Link></li>}                        
                    </ul>
                </nav>
            
        )
    }
}

export default withRouter(MenuComponent)