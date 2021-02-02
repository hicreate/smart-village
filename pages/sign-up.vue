<template>
    <div>
      <!--    section in a lighter frame-->
      <div :style="{background: $vuetify.theme.themes[theme].altBackground}">
        <v-row>
          <v-col
            class="rounded-lg extra-height my-5 mx-8"
            :style="{background: $vuetify.theme.themes[theme].sectionBG}"
          >
            <v-row>
              <v-col
                lg="10"
                md="10"
                cols="12"
                class="mx-auto"
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
                      <nuxt-img class="mb-5" src="/images/YoungPeople.png"></nuxt-img>
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
          </v-col>
        </v-row>
      </div>
    </div>
</template>

<script>
  import SignUpForm from "~/components/SignUpForm";

  export default {
    name: 'sign-up',
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

</style>
