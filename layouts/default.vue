<template>
  <v-app style="overflow:hidden" id="main" :style="{background: $vuetify.theme.themes[theme].background}">
    <Header :class="{'': $vuetify.breakpoint.mdAndUp, 'py-5': $vuetify.breakpoint.smAndDown}" />
    <v-main>
      <v-container
        fluid
        class="pa-0"
      >
        <nuxt />
      </v-container>
    </v-main>
    <Footer />
    <BottomBar />
  </v-app>
</template>

<script>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import BottomBar from '../components/BottomBar'

export default {
    components:{
      Header,
      Footer,
      BottomBar
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

<style>
  .ryp-ac .v-btn__content{
    color: #582DD2 !important;

  }
  .ryp-ac:before{
    opacity: 0 !important;
  }

  .ryp-ac:active{
    opacity: 0 !important;
  }

  .ryp-head-byn:active{
    opacity: 0 !important;
  }

  .ryp-btn:before:hover{
    opacity: 0 !important;
  }

  .ryp-btn:hover:before{
    opacity: 0 !important;
  }

  @media(min-width:764px){
    h1{
      font-size: 3em !important;
      line-height: 1.2em;
    }

    h2{
      font-size: 2em;
      line-height: 1.2em;
    }
  }

  h1, h2{
    line-height: 1.2em;
  }

  #test-slider .v-carousel__controls{
    background-color: rgba(0, 0, 0, 0) !important;
  }

</style>
