import React, {Component} from 'react'
import UserResponseService from '../service/UserResponseService';
import ResponseService from '../service/ResponseService';

class UserResponseComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            responses: [],
            message: null
        }
        this.refreshResponses = this.refreshResponses.bind(this)
        this.deleteResponse = this.deleteResponse.bind(this)
        this.doneResponse = this.doneResponse.bind(this)
        this.offerClicked = this.offerClicked.bind(this)
    }

    componentDidMount() {
        this.refreshResponses();
    }

    refreshResponses() {
        UserResponseService.retrieveAllUserResponse()
            .then(
                response => {
                    console.log(response.data);
                    if (response.data !== null){
                        this.setState({responses: response.data})
                    }                   
                }
            )
    }

    deleteResponse(id) {
        ResponseService.deleteResponse(id)
        .then(
            response => {
                this.setState({ message: `A response with ${id} delete successful`})
                this.refreshResponses()
            }
        )
    }

    doneResponse(id) {
        ResponseService.doneResponse(id)
        .then(
            response => {
                this.setState({ message: `A response with ${id} mark as done successful`})
                this.refreshResponses()
            }
        )        
    }

    offerClicked(id) {
        console.log("offer " + id)
        this.props.history.push(`/offers/${id}`)
    }
        
    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-5">Мои ответы</h3>
                {this.state.responses[0] === null ?
                <p className="text-center mt-5">Ответов нет</p> :
                    this.state.responses.map(
                        response =>
                            <div className ="card mt-4" key = {response.jobResponseId}>
                                <div className="card-header">
                                    {response.jobOfferStatus == 0 ? "вакансия закрыта" : "вакансия открыта"}
                                </div>
                                <div className="card-body">
                                    <h5><a href="" className="card-title text-decoration-none text-dark" onClick={() => this.offerClicked(response.id.jobOfferId)}>{response.jobOfferName}</a></h5>
                                    <p className="card-text">Статус: <span>{response.status == 1 ?
                                        <span>нанят</span> : 
                                        <span>
                                            {response.jobOfferStatus == 0 ? "не нанят" : "не установлен"}</span>}
                                        </span>
                                    </p>
                                    
                                    <p>{response.jobOfferStatus == 0 || response.status == 0 || (response.status == 1 && response.done == 1) ?
                                        <button className="btn btn-danger" onClick={() => this.deleteResponse(response.jobResponseId)}>Удалить</button> :
                                        {/*<span>{ response.status == 1 && response.done == 0 ?
                                            <button className="btn btn-primary" onClick={() => this.doneResponse(response.jobResponseId)}>Выполнено</button> :
                                            <span></span>
                                            }
                                        </span>*/}
                                    }
                                    </p>   
                                </div>
                            </div>
                    )                                                    
                }
            
            </div>
        )
    }
}

export default UserResponseComponent