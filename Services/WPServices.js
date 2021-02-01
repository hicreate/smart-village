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

  //Get all digital champions from WP
  getChampions(){
    return apiClient.get('/champion')
  },

  //get a single champion from WP, passing the champion ID as a query param
  getChampion(id){
    return apiClient.get('champion' + id)
  },

  //get all testimonials from WP
  getTestimonials(){
    return apiClient.get('/testimonials');
  },

  //get all news articles
  getPosts(categories){
    if(categories){
      return apiClient.get('/posts?_embed&categories=' + categories);
    } else{
      return apiClient.get('/posts?_embed');
    }
  },

  //api call to retrieve images associated with individual posts
  getImage(id){
    if(id !== 0){
      return apiClient.get('/media/' + id)
    } else {
      return apiClient.get('/media/' + 37)
    }
  },

  //get all testimonials from WP
  getPostCategories(){
    return apiClient.get('/categories');
  },

  //get categories by individual ids
  getCategory(id){
     return apiClient.get('/categories/' + id)
  }
}
