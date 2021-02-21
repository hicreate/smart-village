<template>
  <div>
    <div class="d-flex">
      <div
        class="social-icon"
        v-for="(icon, i) in icons"
        :key="i"
      >
        <v-btn
          text
          fab
          small
          :href=icon.link
          :color=$vuetify.theme.themes[theme].secondary
          target="_blanks"
        >
          <v-icon class="ryp-social">{{icon.icon}}</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import {gsap} from "gsap";

  export default {
    name: 'SocialIcons',
    data(){
      return{
        icons:[
          {
            id: 1,
            name: 'Facebook',
            link: 'https://www.facebook.com/RuralYouthProject',
            icon: 'mdi-facebook'
          },
          {
            id: 2,
            name: 'Twitter',
            link: 'https://twitter.com/RYP2018',
            icon: 'mdi-twitter'
          },
          {
            id: 3,
            name: 'Instagram',
            link: 'https://www.instagram.com/RYP2018/',
            icon: 'mdi-instagram'
          },
          {
            id: 4,
            name: 'Youtube',
            link: 'https://www.youtube.com/channel/UCTMfrFV8iIGhVOSs-gXsL2g?view_as=subscriber',
            icon: 'mdi-youtube'
          },
        ]
      }
    },
    methods:{
      entranceAnimation(){
        gsap.from(".social-icon", {
          scrollTrigger: ".social-icon",
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
.ryp-social:hover{
  color: #F4812E;
}
</style>
