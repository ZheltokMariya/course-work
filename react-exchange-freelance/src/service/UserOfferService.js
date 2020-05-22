import axios from 'axios'

const API_URL = 'http://localhost:8080'

class UserOfferService {    

    retrieveAllOpenOffers() {
        return axios.get(`${API_URL}/api/offers/open`);
    }

    retrieveUserOffers() {
        return axios.get(`${API_URL}/api/offers/user`)
    }

    retrieveOffer(offerId) {
        return axios.get(`${API_URL}/api/offers/user/${offerId}`)
    }
}

export default new UserOfferService()