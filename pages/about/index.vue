<template>
  <div>
    <!--    section in a lighter frame-->
      <v-row>
        <v-col
          class="rounded-lg extra-height my-2 mx-8"
        >
          <v-row>
            <v-col
              lg="10"
              class="mx-auto"
            >
              <v-row>
                <v-col
                  lg="5"
                  cols="12"
                  style="position: relative;"
                >
                  <h2
                    class="h1 mb-2"
                    :style="{color: $vuetify.theme.themes[theme].fontColor}"
                  >Championing Young Persons Across Scotland</h2>
                  <p class="font-weight-light">Welcome to the Rural Youth Project Smart Village, a collaborative project with The Rural Youth Project, Smart Village Scotland and most importantly young people. </p>
                  <p class="font-weight-light">Find out more about Rural Youth Project and Smart Village Scotland here
                  </p>
                  <div>
                    <v-row class="mt-4">
                      <v-col
                        class="secondary logo-box"
                      >
                        <div
                          :class="{'d-flex flex-row align-center': $vuetify.breakpoint.mdAndUp, 'd-flex flex-column': $vuetify.breakpoint.smAndDown}"
                          class="pa-5 secondary"
                        >
                          <h3 class="white--text mr-8">Delivered by</h3>
                          <div class="d-flex">
                            <v-img
                              contain
                              class="partner-logo"
                              :class="{'my-2': $vuetify.breakpoint.smAndDown}"
                              src="/images/ryp-logo-light.png" ></v-img>
                            <v-img
                              contain
                              class="partner-logo"
                              :class="{'my-2': $vuetify.breakpoint.smAndDown}"
                              src="/images/svs.webp" ></v-img>
                          </div>

                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col
                  lg="7"
                  class="d-flex align-center justify-center mobile-hide"
                >
                  <v-img
                    :class="{'mobile-image': $vuetify.breakpoint.smAndDown}"
                    class="mb-5 mobile-hide image-grid" src="/images/grid.png"></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    <div
    >
      <!--    component with image left and content right-->
      <SectionImageLeft
        :class="{'pb-10': $vuetify.breakpoint.smAndDown, '': $vuetify.breakpoint.mdAndUp}"
        image-loc="bottom"
        image-source="https://content.rypsv.scot/wp-content/uploads/2021/02/revised-vectors-04-1.png">
        <template v-slot:sectionTitle>
          <h2
            class="h1 mb-2"
            :style="{color: $vuetify.theme.themes[theme].fontColor}"
          >Representing Rural Scotland</h2>
          <h3 class="font-weight-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </h3>
        </template>
        <template v-slot:sectionCta>
          <h4 class="font-weight-bold">see more about how we work <nuxt-link :to="{name: 'about-how-we-work'}">here</nuxt-link></h4>
        </template>
      </SectionImageLeft>
    </div>

    <div
      :style="{background: $vuetify.theme.themes[theme].brandPrimary}"
    >
      <v-row>
        <v-col
        lg="10"
        class="mx-auto pt-0"
        >
          <Testimonial :testimonials="testimonials" />
        </v-col>
      </v-row>
    </div>

    <div class="py-15">
      <SectionImageRight image-source="https://content.rypsv.scot/wp-content/uploads/2021/02/revised-vectors-06.png">
        <template v-slot:sectionTitle>
          <h2
            class="mb-2"
            :style="{color: $vuetify.theme.themes[theme].fontColor}"
          >Like what you see? Become a member for FREE today</h2>
        </template>
        <template v-slot:sectionSub>
          <p class="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </template>
        <template v-slot:sectionCta>
          <RypBtn :to="{name: 'sign-up'}" color="success" >
            <template v-slot:btnText>
              <span>sign up</span>
            </template>
          </RypBtn>
        </template>
      </SectionImageRight>
    </div>
  </div>
</template>

<script>
  import RypBtn from "~/components/RypBtn"
  import SectionImageLeft from '~/components/SectionImageLeft'
  import Testimonial from '../../components/Testimonial'
  import {mapState} from 'vuex'

  export default {
    name: 'about',
    components:{
      RypBtn,
      SectionImageLeft,
      Testimonial
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
      ...mapState({
        testimonials: state => state.testimonials.testimonials
      })
    },
    async fetch ({store, error}) {
      try{
        await store.dispatch('testimonials/fetchTestimonials')

      } catch(e){
        error({
          statusCode: 503,
          message: 'Unable to fetch Testimonial data at this time'
        })
      }
    },
  }
</script>

<style scoped>
  .extra-height{
    padding-top: 4%;
  }

  @media(max-width: 764px){
       .mobile-hide{
      display: none !important;
    }

    .mobile-image{
      max-width: 80vw !important;
    }
  }

  .logo-box{
    border-radius: 15px;
  }

.partner-logo{
  max-width: 124px;
}

  .champ-cup{
    width: 200px;
  }

  .image-grid{
    width: 100%;
  }


</style>
