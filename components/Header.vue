<template>
  <v-app-bar
    app
    class="px-5 pt-5 pb-10"
    fixed
    :color=$vuetify.theme.themes[theme].background
    elevate-on-scroll
    extended
  >
    <div>
      <h2 :class="headingColor"
          class="font-weight-black">Smart Village Scotland</h2>
      <h3
          :class="subColor"
          class="font-weight-light mt-n2">Rural Youth Project</h3>
    </div>
    <v-spacer></v-spacer>
    <!--    menu items go here-->
    <div class="d-flex flex-row align-center">
      <div
        v-for="link in menuLinks"
        :key="link.id"
      >
      <HeaderButton :text="link.text" :link="link"/>
      </div>
      <div>
        <RypBtn :to="{name: 'members-area'}" color="success">
          <template v-slot:btnText>
            members area
          </template>
        </RypBtn>
        <RypBtn :to="{name: 'sign-up'}" color="accent">
          <template v-slot:btnText>
            sign up
          </template>
        </RypBtn>
      </div>
      <div class="pl-8">
        <DarkMode />
      </div>

    </div>

  </v-app-bar>

</template>

<script>
  import HeaderButton from './HeaderButton'
  import DarkMode from './DarkMode'
  import RypBtn from './RypBtn'

  export default {
    name: 'Header',
    components: {
      HeaderButton,
      DarkMode,
      RypBtn
    },
    data(){
      return{
        menuLinks:[
          {
            id: 1,
            text: 'home',
            name: '/'
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
    },
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
