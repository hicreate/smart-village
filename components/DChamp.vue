<template>
  <v-card
    class="mx-auto"
    color="#26c6da"
    max-width="400"
  >
    <div>
      <v-card-title>
        <v-icon
          large
          left
        >
          mdi-crown-outline
        </v-icon>
        <span class="title font-weight-light">Digital Champion</span>
      </v-card-title>
      <v-card-subtitle v-html="champ.regions" class="overline">
      </v-card-subtitle>
    </div>
    <v-card-text class="pt-0 pl-0">
      <v-list-item>
        <v-list-item-avatar
          size="64"
          color="grey darken-3">
          <v-img
            class="elevation-6"
            :alt=champ.name
            :src=champ.avatar
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="champ.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>


    <v-card-text class="headline font-weight-bold">
      {{this.champ.quote}}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-row
          align="center"
          justify="end"
        >
          <v-btn
            class="text-lowercase"
            text
            @click="reveal = true"
          >
            read more
          </v-btn>
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
        <v-card-text class="pb-0">
          <p v-html="champ.name" class="display-1">
          </p>
          <p v-html="champ.background"></p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            @click="reveal = false"
          >
            Close
          </v-btn>
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
</style>
