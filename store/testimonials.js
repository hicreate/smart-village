//import the WP services modules for use
import WPServices from '~/Services/WPServices'

export const state = () => ({
  testimonials : []
})

export const mutations = {

  //update the data from WP ready for use in the app
  SET_TESTIMONIALS(state, testimonials){
    state.testimonials = testimonials
  }

}

export const actions = {

//action for retrieving the data from WP and filling local variable with content
  fetchTestimonials({ commit }){
    return WPServices.getTestimonials()
      .then( response =>{
        commit('SET_TESTIMONIALS', response.data)
      })
  }

}
