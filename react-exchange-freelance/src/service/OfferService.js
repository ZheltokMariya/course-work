import axios from 'axios'

const API_URL = 'http://localhost:8080'

class OfferService {    

    closeOffer(offerId) {
        const instance = axios.create();
        return instance.put(`${API_URL}/api/offer/${offerId}/close`);
    }

    createOffer(offer){
        return axios.post(`${API_URL}/api/offer/create`, offer); 
    }
}

export default new OfferService()