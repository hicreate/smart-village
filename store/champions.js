//import the WP services modules for use
import WPServices from '~/Services/WPServices'

export const state = () => ({
  champions: []
})

export const mutations = {

  //update the champions data from WP ready for use in the app
  SET_CHAMPIONS(state, champions){
    state.champions = champions
  }

}

export const actions = {

//action for retrieving the data from WP and filling local variable with content
  fetchChamps({ commit }){
    return WPServices.getChampions()
      .then( response =>{
        commit('SET_CHAMPIONS', response.data)
      })
  }

}
