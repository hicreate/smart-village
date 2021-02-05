<template>
    <div
    >
      <v-btn
        text
        fab
        small
        v-for="icon in icons"
        :key="icon.id"
        :to=icon.link
        :color=$vuetify.theme.themes[theme].secondary
      >
        <v-icon class="ryp-social">{{icon.icon}}</v-icon>
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
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    }
  }
</script>

<style scoped>
.ryp-social:hover{
  color: #F4812E;
}
</style>
