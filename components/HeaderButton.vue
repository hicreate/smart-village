<template>
  <v-btn

    color="rgba(255, 0, 0, 0)"
    flat
    active-class="ryp-ac"
    class="text-lowercase"
    elevation="0"
    ripple="false"
    nuxt
    exact
  >
      {{text}}
  </v-btn>
</template>

<script>
  export default {
    name: 'HeaderButton',
    props:{
      text: String,
      value: String
    }
  }
</script>

<style scoped>
  .ryp-ac{
    color: #582DD2;
  }
</style>
