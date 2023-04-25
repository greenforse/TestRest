/*import axios from 'axios';
const API_URL = 'http://localhost:8000/api/v1';

export default class SampleService{

    constructor(){}


    getSamples() {
        const url = `${API_URL}/sample/`;
        return axios.get(url).then(response => response.data);
    }
    getSamplesByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getSample(pk) {
        const url = `${API_URL}/api/v1/sample/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteSample(sample){
        const url = `${API_URL}/api/v1/sample/${sample.pk}`;
        return axios.delete(url);
    }
    createSample(sample){
        const url = `${API_URL}/api/v-1/sample/`;
        return axios.post(url,sample);
    }
    updateSample(sample){
        const url = `${API_URL}/api/v1/sample/${sample.pk}`;
        return axios.put(url,sample);
    }
}