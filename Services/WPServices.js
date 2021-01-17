import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://content.rypsv.scot/wp-json/wp/v2',
  withCredentials: false,
  headers:{
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default{
  getChampions(){
    return apiClient.get('/champion')
  },
  getChampion(id){
    return apiClient.get('champion' + id)
  }
}
