//import the WP services modules for use
import WPServices from '~/Services/WPServices'

export const state = () => ({
  posts: [],
  categories: [],
  postLoader: true
})

export const mutations = {

  //update the data from WP ready for use in the app
  SET_POSTS(state, posts){
    state.posts = posts;
  },

  //update the categories from WP ready for use in the app
  SET_CATEGORIES(state, categories){
    state.categories = categories
  },

  //reset the loading state to true
  SET_LOADER(state, x){
    state.postLoader = x;
  }

}

export const actions = {

//action for retrieving the data from WP and filling local variable with content
  fetchPosts({ commit }, categories){
    return WPServices.getPosts(categories)
      .then( response =>{
        let posts = response.data;
        commit('SET_POSTS', posts);
        commit('SET_LOADER', false);
      })
  },

  fetchCategories({ commit }){
    return WPServices.getPostCategories()
      .then( response =>{
        commit('SET_CATEGORIES', response.data)
      })
  },

  resetLoader({ commit }){
    commit('SET_LOADER', true);
  },

  resetLoaderOff({ commit }){
    commit('SET_LOADER', false);
  }

}
