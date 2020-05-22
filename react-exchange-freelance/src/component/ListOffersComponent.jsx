import React, {Component} from 'react'
import UserOfferService from '../service/UserOfferService';
import ResponseService from '../service/ResponseService';
import UserResponseService from '../service/UserResponseService';

class ListOffersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            responses: [],
            offers: [],
            message: null
        }

        this.refreshOffers = this.refreshOffers.bind(this)
        this.createResponse = this.createResponse.bind(this) 
        this.getResponses = this.getResponses.bind(this)       
        this.offerClicked = this.offerClicked.bind(this)
        this.addOffer = this.addOffer.bind(this)
    }

    componentDidMount() {
        this.refreshOffers();
        this.getResponses();
    }

    refreshOffers() {
        UserOfferService.retrieveAllOpenOffers()
            .then(
                response => {
                    console.log(response);
                    this.setState({offers: response.data})
                }
            )
    }

    getResponses() {
        UserResponseService.retrieveAllUserResponse()
            .then(
                response => {
                    console.log(response);
                    this.setState({responses: response.data})
                }
            )
    }

    createResponse(id) {
        let flag = 0;
        this.state.responses.map(
            response =>
            {
                if (response !== null){
                console.log(response.id.jobOfferId)
                console.log(response.id.jobOfferId == id)
                if (response.id.jobOfferId == id){
                    flag = 1;
                }
            }
            }

        )
        console.log(flag)
        if (flag == 0){
            ResponseService.createResponse(id)
                .then(
                    response => {
                    this.setState({ message: `Create response to offer ${id} successful` })
                    this.refreshOffers()
                    }
                )
        }    
    }

    offerClicked(id) {
        console.log("offer " + id)
        this.props.history.push(`/offers/${id}`)
    }

    addOffer() {
        console.log("offer create")
        this.props.history.push(`/create`)
    }  
        
    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-5">Открытые предложения о работе</h3>
                <div className="m-auto">
                    <button className="btn btn-primary" onClick={() => this.addOffer()}>Добавить предложение о работе</button>
                </div>
                {
                    this.state.offers.map(
                        offer =>
                            <div className ="card mt-4" key = {offer.idJobOffer}>
                                <div className="card-header">
                                    {offer.category}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href="" className="text-decoration-none text-dark" onClick={() => this.offerClicked(offer.idJobOffer)}>
                                            {offer.nameJobOffer}
                                        </a>
                                    </h5>
                                    <p className="card-text">{offer.description}</p>
                                    <p className="card-text">Оплата: <span>{offer.price === null ? "не установлена" : offer.price+" $"}</span></p>
                                    <button className="btn btn-info" onClick={() => this.createResponse(offer.idJobOffer)}>Откликнуться</button>
                                </div>
                            </div>
                    )
                }
                
            </div>
        )
    }
}

export default ListOffersComponent