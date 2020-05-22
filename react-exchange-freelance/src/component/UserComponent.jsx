import React, {Component} from 'react'
import UserDataService from '../service/UserDataService';

class UserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            user: [],
            message: null
        }
        this.refreshUser = this.refreshUser.bind(this)
    }

    componentDidMount() {
        this.refreshUser(this.state.id);
    }

    refreshUser(userId) {
        UserDataService.retrieveUserById(userId)
            .then(
                response => {
                    console.log(response);
                    this.setState({user: response.data})
                }
            )
    }
        
    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-5"></h3>            
                    <div className ="card mt-4"> 
                                                             
                        <div className="card-body" key = {this.state.user.id}>
                            <h5 className="card-title">{this.state.user.surname + " "+ this.state.user.name}</h5>
                            <p className="card-text">Email:{ " " + this.state.user.email}</p>
                            <p className="card-text">Телефон:{this.state.user.phone === null || this.state.user.phone=="" ? " не указан" : " "+this.state.user.phone}</p>
                            <p>Страна:{this.state.user.country === null || this.state.user.country==""  ? " не указана" : " "+this.state.user.country}</p>
                            <p>Специализация:{this.state.user.speciality === null ? " не указана" : " "+this.state.user.speciality}</p>
                            <p>{this.state.user.description === null ? "" : " "+this.state.user.description}</p>
                        </div>
                    
    
                    </div>                            
            </div>
        )
    }
}

export default UserComponent