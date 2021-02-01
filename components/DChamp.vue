<template>
  <v-card
    class="mx-auto card-border champ-card"
    :color="$vuetify.theme.themes[theme].background"
    style="height: 100%; position: relative;"
  >
    <div :style="{background: $vuetify.theme.themes[theme].altBackground}"
         class="champ-header"
         :class="{'d-flex flex-column': $vuetify.breakpoint.smAndDown, 'd-flex align-items': $vuetify.breakpoint.mdAndUp}"
    >
      <div class="d-flex flex-column justify-center">
        <v-card-title>
          <v-icon
            large
            left
          >
            mdi-crown-outline
          </v-icon>
          <span class="title font-weight-light">Digital<br>Champion</span>
        </v-card-title>
        <v-card-subtitle v-html="champ.acf.area_representing" class="overline">
        </v-card-subtitle>
      </div>
      <v-spacer></v-spacer>
      <div class="pa-3 d-flex d-flex align-center"
           :class="{'pb-6 pt-0': $vuetify.breakpoint.smAndDown}"
      >
        <h2 class="mr-5"
            v-html="champ.title.rendered"
        ></h2>
        <v-avatar
          class="card-border"
          :class="{'mx-auto': $vuetify.breakpoint.smAndDown}"
          size="90"
        >
          <v-img
            class="elevation-6"
            :alt=champ.slug
            :src=champ.acf.profile_image
          ></v-img>
        </v-avatar>
      </div>
    </div>

    <div class="d-flex align-center profile-desc">
      <v-card-text
        v-html="champ.acf.champion_bio"
      >
      </v-card-text>
    </div>

    <v-card-actions
      class="bottom-actions"
      style="width: 100%;"
    >
      <v-list-item
        class="grow">
        <v-row
          :class="{'align-center': $vuetify.breakpoint.mdAndUp}"
        >
          <div
            :class="{'d-flex align-center': $vuetify.breakpoint.mdAndUp}"
          >
            <v-btn
              color="accent"
              class="text-lowercase"
              @click="reveal = true"
            >
              <v-icon class="mr-2">
                mdi-video-account
              </v-icon>
              see video intro
            </v-btn>
<!--            social icon group-->
            <div>
              <v-btn
                color="rgba(255, 0, 0, 0)"
                elevation="0"
                x-small
                fab
                :to="champ.email"
              >
                <v-icon
                  class="ryp-icon"
                >
                  mdi-email-variant
                </v-icon>
              </v-btn>

              <v-btn
                color="rgba(255, 0, 0, 0)"
                elevation="0"
                x-small
                fab
                :to="champ.twitter"
              >
                <v-icon
                  class="ryp-icon"
                >
                  mdi-twitter
                </v-icon>
              </v-btn>

              <v-btn
                color="rgba(255, 0, 0, 0)"
                elevation="0"
                x-small
                fab
                :to="champ.facebook"
              >
                <v-icon
                  class="ryp-icon"
                >
                  mdi-facebook
                </v-icon>
              </v-btn>

              <v-btn
                color="rgba(255, 0, 0, 0)"
                elevation="0"
                x-small
                fab
                :to="champ.linkedin"
              >
                <v-icon
                  class="ryp-icon"
                >
                  mdi-linkedin
                </v-icon>
              </v-btn>

              <v-btn
                color="rgba(255, 0, 0, 0)"
                elevation="0"
                x-small
                fab
                :to="champ.instagram"
              >
                <v-icon
                  class="ryp-icon"
                >
                  mdi-instagram
                </v-icon>
              </v-btn>
            </div>
          </div>
        </v-row>
      </v-list-item>
    </v-card-actions>
    <v-expand-transition>
      <v-card
        dark
        color="primary"
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <div class="d-flex align-center pr-2 pt-2">
          <v-card-title v-html="champ.title.rendered" class="pb-0">
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn
            @click="reveal = false"
          icon
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <v-card-actions class="d-flex align-center justify-center">
          <v-sheet
            class=" d-flex align-center justify-center"
          height="350px"
          width="350px"
          color="secondary"
          >
            <h4>Intro Video Goes Here</h4>
          </v-sheet>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    name: 'DChamp',
    props:{
      champ: Object
    },
    data(){
      return{
        reveal: false,
      }
    },
    mounted(){
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
    }
  }
</script>

<style scoped>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }

  .ryp-icon:hover{
    color: #F4812E;
  }

  .card-border{
    border: 2px solid #fff !important;
  }

  .champ-card{
    padding-bottom: 55px;
  }

  .profile-desc{
  }

  .champ-header{
    min-height: 13rem;
  }

  .bottom-actions{
    position: absolute;
    bottom: 0;
  }
</style>
