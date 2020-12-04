<template>
  <v-btn
    :to="link.name"
    class="text-lowercase ryp-btn"
    exact-active-class="ryp-ac"
    elevation="0"
    nuxt
    exact
    text
    :ripple="false"
  >
      {{text}}
  </v-btn>
</template>

<script>
  export default {
    name: 'HeaderButton',
    props:{
      text: String,
      link: Object
    }
  }
</script>

<style scoped>

</style>
