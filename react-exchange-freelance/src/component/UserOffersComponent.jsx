import React, {Component} from 'react'
import UserOfferService from '../service/UserOfferService';
import OfferService from '../service/OfferService';

class UserOffersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            offers: [],
            responses: [],
            message: null
        }
        this.refreshOffers = this.refreshOffers.bind(this)
        this.feedbackClicked = this.feedbackClicked.bind(this)
        this.closeOffer = this.closeOffer.bind(this)        
        this.offerClicked = this.offerClicked.bind(this)
    }

    componentDidMount() {
        this.refreshOffers();
    }

    refreshOffers() {
        UserOfferService.retrieveUserOffers()
            .then(
                response => {
                    console.log(response.data);
                    if (response.data !== null){
                        this.setState({offers: response.data})
                    }
                    
                }
            )
    }

    feedbackClicked(id){
        console.log('feedback ' +id)
        this.props.history.push(`/offers/user/${id}`)
    }

    closeOffer(id){
        OfferService.closeOffer(id)
            .then(
                response => {
                    this.setState({ message: `Close offer ${id} successful`})
                    this.refreshOffers()
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
                <h3 className="text-center mt-5">Мои предложения</h3>
                {this.state.offers[0] === null ?
                <p className="text-center mt-5">Предложений нет</p> :
                    this.state.offers.map(
                        offer =>
                            <div className ="card mt-4" key = {offer.idJobOffer}>
                                <div className="card-header">
                                    {offer.category}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="" className="text-decoration-none text-dark" onClick={() => this.offerClicked(offer.idJobOffer)}>{offer.nameJobOffer}</a></h5>
                                        <p className="card-text">{offer.description}</p>
                                        <p className="card-text">Оплата: <span>{offer.price === null ? "не установлена" : offer.price+" $"}</span></p>
                                        {offer.status == 1 ?
                                        <button className="btn btn-danger mr-5" onClick={() => this.closeOffer(offer.idJobOffer)}>Закрыть предложение</button> :
                                        <span></span>
                                        }
                                        <button className="btn btn-primary" onClick={() => this.feedbackClicked(offer.idJobOffer)}>Просмотреть заявки</button>
                                </div>
                            </div>
                    )                  
                                                    
                }
            
            </div>
        )
    }
}

export default UserOffersComponent