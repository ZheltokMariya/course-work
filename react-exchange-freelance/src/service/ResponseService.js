import axios from 'axios'

const API_URL = 'http://localhost:8080'

class ResponseService {    

    retrieveResponsesByOffer(offerId) {
        return axios.get(`${API_URL}/api/response/offer/${offerId}`);
    }

    createResponse(offerId) {
        const instance = axios.create();
        return instance.post(`${API_URL}/api/response/offer/create/${offerId}`);
    }

    hireFreelancer(responseId){
        const instance = axios.create();
        return instance.put(`${API_URL}/api/response/${responseId}/employ`);
    }

    deleteResponse(responseId){
        return axios.delete(`${API_URL}/api/response/${responseId}/delete`);
    }

    doneResponse(responseId){
        return axios.put(`${API_URL}/api/response/${responseId}/done`)
    }

    refuseResponse(responseId){
        return axios.put(`${API_URL}/api/response/${responseId}/refuse`)
    }
}

export default new ResponseService()