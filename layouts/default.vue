<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <Header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '../components/Header.vue'

export default {
    components:{
      Header
    },
  data () {
    return {
    }
  },
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
}
</script>
