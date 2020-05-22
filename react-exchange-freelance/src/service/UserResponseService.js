import axios from 'axios'

const API_URL = 'http://localhost:8080'

class UserResponseService {    

    retrieveAllUserResponse() {
        return axios.get(`${API_URL}/api/responses/user`);
    }
}

export default new UserResponseService()