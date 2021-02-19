<template>
    <div ref="signHolder" class="signposts">
      <v-row class="desktop-row-5">
        <v-col
        cols="12"
        md="10"
        lg="10"
        class="mx-auto"
        >
          <div class="signpost-header">
            <h2 class="text-center">Lorem ipsum dolor sit amet</h2>
            <h4 class="text-center">See the full range of services available to users and visitors</h4>
          </div>
          <v-row>
            <v-col
            v-for="(tile, i) in tiles"
            :key="i"
            >
              <v-card
                elevation="0"
                rounded
                class="signpost-tile pt-5"
                :color=$vuetify.theme.themes[theme].cardBackground
                style="position: relative"
              >
                <div class="icon-group">
                  <div style="position: relative;">
                    <nuxt-img class="icon-holder" src="images/icon-back.png"></nuxt-img>
                    <v-icon
                      x-large
                      :color=$vuetify.theme.themes[theme].background
                      class="tile-icon"
                    >{{tile.icon}}</v-icon>
                  </div>
                </div>

                <v-card-title>{{tile.title}}</v-card-title>
                <v-card-subtitle>{{tile.subtitle}}</v-card-subtitle>
                <v-card-actions
                class="pa-5"
                >
                  <NuxtLink :to="{name: 'tile.url'}">see more</NuxtLink>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
</template>

<script>
  import {gsap} from "gsap" // eslint-disable-line
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  export default {
    name: 'Signposts',
    data(){
      return{
        tiles:[
          {
            title: 'Networking',
            subtitle: 'Lorem ispum sil elet decorum.',
            icon: 'mdi-account-multiple-plus',
            url:'index'
          },
          {
            title: 'Business Resources',
            subtitle: 'Lorem ispum sil elet decorum.',
            icon: 'mdi-file-star',
            url:'index'
          },
          {
            title: 'Employment',
            subtitle: 'Lorem ispum sil elet decorum.',
            icon: 'mdi-cash-multiple',
            url:'index'
          },
          {
            title: 'Support',
            subtitle: 'Lorem ispum sil elet decorum.',
            icon: 'mdi-account-heart',
            url:'index'
          }
        ]
      }
    },
    methods:{
      entranceAnimation(){

        gsap.from(".signpost-tile", {
          scrollTrigger: ".signpost-tile",
          duration: 2,
          scale: 0.8,
          opacity: 0,
          delay: 0.5,
          stagger: 0.2,
          ease: "elastic",
          force3D: true
        });
      }
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    },
    mounted(){
      this.entranceAnimation();
    }
  }
</script>

<style scoped>
  .signposts{
    padding-top: 3%;
    padding-bottom: 3%;
  }

  .icon-holder{
    width: 128px;
    position: relative;
  }

  .tile-icon{
    position: absolute;
    bottom: 32px;
    left: 45px;
  }

  .icon-group{
    position: absolute;
    top: -66px;
    right: -20px;
  }

  .signpost-header{
    padding-bottom: 70px;
  }

</style>
