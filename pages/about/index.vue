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
                  style="position: relative;"
                >
                  <v-img class="mb-5" max-width="200px" src="/images/champ.png"></v-img>
                  <h2
                    class="h1 mb-2"
                    :style="{color: $vuetify.theme.themes[theme].fontColor}"
                  >Championing Young Persons Across Scotland</h2>
                  <p class="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                  <div>
                    <v-row class="pa-5 mt-4">
                      <v-col
                        class="secondary logo-box"
                      >
                        <div class="d-flex flex-row secondary pa-5 align-center">
                          <h3 class="white--text mr-8">Delivered by</h3>
                          <v-img max-width="96px" src="/images/ryplogo.png" ></v-img>
                          <v-img max-width="96px" src="/images/svs.webp" ></v-img>
                        </div>
                      </v-col>
                    </v-row>
                  </div>



                </v-col>
                <v-col
                  lg="7"
                  class="d-flex align-center justify-center"
                >
                  <v-img class="mb-5" src="/images/grid.png"></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    <div
    >
      <!--    component with image left and content right-->
      <SectionImageLeft image-loc="bottom" image-source="/images/rural.png">
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
          <h4 class="font-weight-bold">see more about how we work <a href="/how-we-work">here</a></h4>
        </template>
        <template v-slot:addImage>
          <v-img class="ryp-over-image" src="/images/saltire.png"></v-img>
        </template>
      </SectionImageLeft>
    </div>

    <div
      :style="{background: $vuetify.theme.themes[theme].brandPrimary}"
    >
      <v-row>
        <v-col
        lg="10"
        class="mx-auto"
        >
          <Testimonial :testimonials="testimonials" />
        </v-col>
      </v-row>
    </div>

    <div class="py-15">
      <SectionImageRight image-loc="right" image-source="/images/header-hero-05-min.png">
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
        console.log('fetch hook working');
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

  .ryp-over-image{
    position: absolute;
    z-index: 1;
    right: -80px;
    bottom: 30%;
  }

  .paper-plane{
    position: absolute;
    right: -300px;
  }

  @media(min-width: 764px){
    .logo-box{
    }
  }

  .logo-box{
    border-radius: 15px;
  }



</style>
