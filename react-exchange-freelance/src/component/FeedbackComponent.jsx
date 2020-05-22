import React, {Component} from 'react'
import ResponseService from '../service/ResponseService'

class FeedbackComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            responses: []
        }
        this.retrieveResponsesByOffer = this.retrieveResponsesByOffer.bind(this)
        this.hireFreelancer = this.hireFreelancer.bind(this)
        this.refuseFreelancer = this.refuseFreelancer.bind(this)
        this.freelancerClicked = this.freelancerClicked.bind(this)
    }

    componentDidMount() {
        console.log(this.state.id)
        this.retrieveResponsesByOffer(this.state.id)
    }

    retrieveResponsesByOffer(id) {
        ResponseService.retrieveResponsesByOffer(id)
            .then(
                response => {
                    console.log(response);
                    this.setState({responses: response.data})
                }
            )
    }

    hireFreelancer(id){
        ResponseService.hireFreelancer(id)
            .then(
                response => {
                    this.setState({ message: `A freelancer is employed to response ${id} successful`})
                    this.retrieveResponsesByOffer(this.state.id)
                }
            )
    }

    refuseFreelancer(id){
        ResponseService.refuseResponse(id)
            .then(
                response => {
                    this.setState({ message: `A freelancer is refused to response ${id} successful`})
                    this.retrieveResponsesByOffer(this.state.id)
                }
            )
    }

    freelancerClicked(id) {
        console.log("user " + id)
        this.props.history.push(`/user/${id}`)
    }

    render() {
        let {responses, id} = this.state

        return(
            <div>
                <h1 className="text-center mt-5">Заявки</h1>
                <div className="container">
                    <p>{console.log(responses)}</p>
                    <p className="text-center mt-5">{this.state.responses.length === 0 ? "Заявок нет" : ""}</p>
                    {
                        this.state.responses.map(
                            response  =>
                                <div className ="card mt-4" key = {response.id}>                               
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a href="" className="text-decoration-none text-dark" onClick={() => this.freelancerClicked(response.freelancerId)}>
                                                {response.freelancer.surname + " " + response.freelancer.name}
                                            </a>
                                        </h5>
                                        <p className="card-text">Специализация:{response.freelancer.speciality === null || response.freelancer.speciality== "" ? " не указана" : " " + response.freelancer.speciality}</p>
                                        <p className="card-text">Статус: <span>{response.status == 1 ? " нанят" : " не нанят"}</span></p>
                                            {response.status == 1 || response.jobOffer.status == 0 ?
                                        <span>
                                            {
                                                response.status == 1 && response.jobOffer.status == 1 ?
                                                <button className="btn btn-danger mr-5" onClick={() => this.refuseFreelancer(response.id)}>Отказать</button> :
                                                <span></span>
                                            }
                                        </span> :
                                        <button className="btn btn-primary mr-5" onClick={() => this.hireFreelancer(response.id)}>Нанять</button>                                        
                                        }                                        
                                    </div>
                                </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default FeedbackComponent