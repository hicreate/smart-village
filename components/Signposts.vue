<template>
    <div ref="signHolder" class="signposts">
      <v-row class="desktop-row-5">
        <v-col
        cols="12"
        md="10"
        lg="10"
        class="mx-auto"
        :class="{'px-8': $vuetify.breakpoint.smAndDown}"
        >
          <div class="signpost-header">
            <h2 class="text-center">Lorem ipsum dolor sit amet</h2>
            <h4 class="text-center">See the full range of services available to users and visitors</h4>
          </div>
          <v-row>
            <v-col
              cols="12"
              lg="3"
              md="3"
              v-for="(tile, i) in tiles"
            :key="i"
            >
              <v-card
                elevation="0"
                rounded
                class="signpost-tile pt-6"
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
                class="pa-5 tile-actions"
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
            title: 'Networking & Events',
            subtitle: 'Sign up and join a network of likeminded people where everyone can share ideas, offer advice and inspire others. Up skill and learn via events specific to your needs.',
            icon: 'mdi-account-multiple-plus',
            url:'index'
          },
          {
            title: 'Resources',
            subtitle: 'Access resources that give you a great starting point, regardless of the direction you want to go in. From basic business related templates to guides to becoming self employed.',
            icon: 'mdi-file-star',
            url:'index'
          },
          {
            title: 'Employment/Volunteering ',
            subtitle: 'Opportunities for you to engage with organisations offering employment and Volunteer opportunities as well as promoting businesses run by young people.',
            icon: 'mdi-cash-multiple',
            url:'index'
          },
          {
            title: 'Support',
            subtitle: 'Get business and personal support from services and contacts that are tried and tested by other young people.',
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

  @media(min-width: 764px){
    .signpost-tile{
      min-height: 300px;
    }

    .tile-actions{
      position: absolute;
      bottom: 15px;
    }
  }

  .signpost-tile{
    position: relative;
  }

</style>
