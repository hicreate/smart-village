<template>
    <div
      :class="modeSwitch"
      class="pa-2 d-flex flex-row align-center rounded-pill">
      <v-icon
        dense
      small
      :disabled="darkMode"
      color="accent"
      >mdi-brightness-5</v-icon>
      <v-switch
        dense
        inset
        hide-details="true"
        class="mr-n5 px-2"
        color="accent"
        @change="changeMode"
        v-model="darkMode"
      ></v-switch>
      <v-icon
        dense
      small
      :disabled="!darkMode"
      color="accent"
      >mdi-brightness-1</v-icon>
    </div>
</template>

<script>
  export default {
    name: 'DarkMode',
    data(){
      return{
        darkMode: true,
      }
    },
    methods:{
      changeMode(){
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      }
    },
    computed:{
      modeSwitch(){
        return this.$vuetify.theme.dark ? 'secondary lighten-1' : 'purple lighten-5'
      }
    }
  }
</script>

<style scoped>
  .v-input__append-outer{
    margin-left: 0px !important;
  }

</style>
