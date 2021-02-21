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
          :to=icon.link
          :color=$vuetify.theme.themes[theme].secondary
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
            link: '#',
            icon: 'mdi-facebook'
          },
          {
            id: 2,
            name: 'Twitter',
            link: '#',
            icon: 'mdi-twitter'
          },
          {
            id: 3,
            name: 'Instagram',
            link: '#',
            icon: 'mdi-instagram'
          },
          {
            id: 4,
            name: 'Linkedin',
            link: '#',
            icon: 'mdi-linkedin'
          },
          {
            name: 'Snapchat',
            link: '#',
            icon: 'mdi-snapchat'
          }
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
