<template>
  <div>
    <nuxt-img class="main-logo" :src='logoImage'></nuxt-img>
  </div>
</template>

<script>
  export default {
    name: 'LogoText',
    computed:{
      headingColor(){
        return this.$vuetify.theme.dark ? 'white--text' : 'secondary--text'
      },
      subColor(){
        return this.$vuetify.theme.dark ? 'white--text' : 'secondary--text'
      },
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
      logoImage(){
        return (this.$vuetify.theme.dark) ? '/images/logo-light.png' : '/images/logo-dark.png'
      },
    }
  }
</script>

<style scoped>
  @media(max-width: 764px){
    h3{
      font-size: 1em;
    }

    h2{
      font-size: 1em;
    }
  }

  .main-logo{
    width: 220px;
  }

</style>
