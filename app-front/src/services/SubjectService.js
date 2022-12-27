import axios from 'axios'


const SUBJECT_RESTAPI_URL = 'http://localhost:8080/api/subject';

class SubjectService {

    getAllSubjects(){
        return axios.get(SUBJECT_RESTAPI_URL);
    }


}

//avoid instanciating this class object 
export default new SubjectService();