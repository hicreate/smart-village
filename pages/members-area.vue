<template>
  <div>
    <!--    section in a lighter frame-->
          <v-row
          class="desktop-row-5"
          >
            <v-col
              lg="10"
              md="10"
              class="mx-auto"
              :class="{'px-8': $vuetify.breakpoint.smAndDown}"
            >
              <v-row
                class="d-flex"
              >
                <v-col
                  cols="12"
                  md="5"
                  lg="5"
                  class="ryp-col-left"
                  :class="{'mt-10': $vuetify.breakpoint.smAndDown, 'd-flex flex-column justify-center': $vuetify.breakpoint.mdAndUp}"
                >
                  <div>
                    <nuxt-img class="mb-5 bulb-image" src="https://content.rypsv.scot/wp-content/uploads/2021/02/RYP_Revised_Visuals-07-e1612559149593.png"></nuxt-img>
                    <h2
                      class="h1 mb-2"
                      :style="{color: $vuetify.theme.themes[theme].fontColor}"
                    >Members Area Coming Soon</h2>
                    <h3 class="font-weight-light">The full members area is going to launch soon, but signup today to have your account registered in advance and to be ready when full access goes live.</h3>

                  </div>
                </v-col>
                <v-col
                  cols="12"
                  lg="7"
                  md="7"
                  class="ryp-col-right"
                >
                  <SignUpForm />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
    </div>
</template>

<script>
  import SignUpForm from "~/components/SignUpForm";

  export default {
    name: 'membersArea',
    components:{
      SignUpForm,
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
    }
  }
</script>

<style scoped>
  .extra-height{
    padding-top: 5%;
    padding-bottom: 5%;
  }

  @media(max-width:764px){
    .ryp-col-left{
      order: 2;
    }

    .ryp-col-right{
      order: 1;
    }
  }

  .bulb-image{
    width: 70%;
    margin: 0 auto;
  }

</style>
