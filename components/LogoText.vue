<template>
  <div>
    <h3
      :class="subColor"
      class="font-weight-light mt-n2">Rural Youth Project</h3>
    <h2 :class="headingColor"
        class="font-weight-black">Smart Village Scotland</h2>

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
      }
    }
  }
</script>

<style scoped>

</style>
