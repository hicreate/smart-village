<template>
  <v-app-bar
    app
    class="pa-5"
    color="rgba(255, 0, 0, 0)"
    elevation="0"
  >
    <div>
      <h2 class="font-weight-bold">Smart Village Scotland</h2>
      <h3 class="font-weight-thin">Rural Youth Project</h3>
    </div>
    <v-spacer></v-spacer>
    <!--    menu items go here-->
    <div class="d-flex">
      <div
        v-for="link in menuLinks"
        :key="link.id"
      >
      <HeaderButton :text="link.text" :name="link.name"/>
      </div>
    </div>

  </v-app-bar>

</template>

<script>
  import HeaderButton from './HeaderButton'

  export default {
    name: 'Header',
    components: {
      HeaderButton
    },
    data(){
      return{
        menuLinks:[
          {
            id: 1,
            text: 'home',
            name: 'home'
          },
          {
            id: 2,
            text: 'about us',
            name: 'about'
          },
          {
            id: 3,
            text: 'resources',
            name: 'resources'
          },
          {
            id: 4,
            text: 'news & updates',
            name: 'news'
          },
          {
            id: 5,
            text: 'contact us',
            name: 'contact'
          },
        ]
      }
    }
  }
</script>

<style scoped>


</style>
