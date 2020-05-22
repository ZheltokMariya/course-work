import React, {Component} from 'react'
import UserOfferService from '../service/UserOfferService';

class OfferComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            offer: [],
            message: null
        }
        this.refreshOffer = this.refreshOffer.bind(this)
        this.userClicked = this.userClicked.bind(this)
    }

    componentDidMount() {
        this.refreshOffer(this.state.id);
    }

    refreshOffer(offerId) {
        UserOfferService.retrieveOffer(offerId)
            .then(
                response => {
                    console.log(response);
                    this.setState({offer: response.data})
                }
            )
    }

    userClicked(id) {
        console.log("user " + id)
        this.props.history.push(`/user/${id}`)
    }
        
    render() {
        return (
            <div className="container">
                <h3 className="text-center mt-5"></h3>            
                    <div className ="card mt-4"> 
                    {
                    this.state.offer.map(
                        offer =>                                          
                        <div className="card-body" key = {offer.jobOfferId}>
                            <h5 className="card-title">{offer.nameJobOffer}</h5>
                            <p className="card-text">Категория:{offer.category === null ? " не указана" : " "+offer.category}</p>
                            <p className="card-text">{offer.description === null ? "" : " "+offer.description}</p>
                            <p className="card-text">Оплата:{offer.price === null ? " не указана" : " "+offer.price+"$"}</p>
                            <h6>Автор: </h6>
                            <p><a href="" className="card-title text-decoration-none text-dark" onClick={() => this.userClicked(offer.userId)}>{offer.surname +" "+offer.name}</a></p>
                        </div>
                    ) 
                    }
                    </div>                            
            </div>
        )
    }
}

export default OfferComponent