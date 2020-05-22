import axios from 'axios'

const API_URL = 'http://localhost:8080'

class UserDataService {

    retrieveUser() {
        return axios.get(`${API_URL}/api/user/username`);
    }

    retrieveUserById(userId) {
        return axios.get(`${API_URL}/api/user/${userId}`)
    }

    retrieveUserByUsername(username) {
        return axios.get(`${API_URL}/api/user/find?username=${username}`)
    }

    retrieveAllUsers() {
        return axios.get(`${API_URL}/api/users`)
    }

    createUser(user) {
        return axios.post(`${API_URL}/api/user/create`, user)
    }
}

export default new UserDataService()