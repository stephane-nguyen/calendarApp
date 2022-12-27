import axios from 'axios'


const USER_RESTAPI_URL = 'http://localhost:8080/api/user';

class UserService {

    getAllUsers(){
        return axios.get(USER_RESTAPI_URL);
    }

    addUser(user){
        return axios.post(USER_RESTAPI_URL, user);
    }
    
}

//avoid instanciating this class object 
export default new UserService();