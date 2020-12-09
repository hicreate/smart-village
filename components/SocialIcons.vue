<template>
    <div
    class="pt-5"
    >
      <v-btn
        text
        fab
        small
        v-for="icon in icons"
        :key="icon"
        :to=icon.link
        :color=$vuetify.theme.themes[theme].sectionBG
      >
        <v-icon>{{icon.icon}}</v-icon>
      </v-btn>
    </div>
</template>

<script>
  export default {
    name: 'SocialIcons',
    data(){
      return{
        icons:[
          {
            name: 'Facebook',
            link: '#',
            icon: 'mdi-facebook'
          },
          {
            name: 'Twitter',
            link: '#',
            icon: 'mdi-twitter'
          },
          {
            name: 'Instagram',
            link: '#',
            icon: 'mdi-instagram'
          },
          {
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
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    }
  }
</script>

<style scoped>

</style>
