<template>
  <v-app-bar
    app
    :class="{'': $vuetify.breakpoint.smAndDown, 'px-5 pt-5 pb-10': $vuetify.breakpoint.mdAndUp}"
    fixed
    :color=$vuetify.theme.themes[theme].background
    elevate-on-scroll
    extended
  >
    <ClientLogos
      :class="{'d-none': $vuetify.breakpoint.smAndDown}"
    />
    <LogoText
      :class="{'ml-4': $vuetify.breakpoint.mdAndUp}"
    />
    <v-spacer></v-spacer>
    <div
      :class="{'d-none': $vuetify.breakpoint.smAndDown, 'd-flex': $vuetify.breakpoint.mdAndUp}"
      id="ryp-main-nav"
    >
      <!--    menu items go here-->

      <div
        class="d-flex flex-row align-center"
      >
        <v-btn
          exact
          text
          nuxt
          active-class="ryp-ac"
          class="ryp-head-btn ryp-btn"
          :to="{name: 'index'}"
        >home</v-btn>


        <!--      dropdown menu for about-->
        <v-menu
          open-on-hover
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              exact
              text
              nuxt
              v-bind="attrs"
              v-on="on"
              active-class="ryp-ac"
              class="ryp-head-btn ryp-btn"
              :to="{name: 'about'}"
            >about</v-btn>
          </template>
          <v-list
            :color=$vuetify.theme.themes[theme].background
          >
            <v-list-item
              active-class="ryp-ac"
              exact
              nuxt
              :to="{name: 'about'}"
            >
              <v-list-item-title
                exact
                class="body-2 list-link">about us</v-list-item-title>
            </v-list-item>
            <v-list-item
              active-class="ryp-ac"
              exact
              nuxt
              :to="{name: 'about-digital-champions'}"
            >
              <v-list-item-title
                exact
                class="body-2 list-link">digital champions</v-list-item-title>
            </v-list-item>
<!--            <v-list-item-->
<!--              active-class="ryp-ac"-->
<!--              exact-->
<!--              nuxt-->
<!--              :to="{name: 'about-how-we-work'}"-->
<!--            >-->
<!--              <v-list-item-title-->
<!--                class="body-2 list-link">how we work</v-list-item-title>-->
<!--            </v-list-item>-->
          </v-list>
        </v-menu>

        <v-btn
          text
          nuxt
          active-class="ryp-ac"
          class="ryp-head-btn ryp-btn"
          :to="{name: 'resources'}"
        >resources</v-btn>

        <v-btn
          text
          nuxt
          active-class="ryp-ac"
          class="ryp-head-btn ryp-btn"
          :to="{name: 'news'}"
        >news & updates</v-btn>

        <v-btn
          text
          nuxt
          active-class="ryp-ac"
          class="ryp-head-btn ryp-btn"
          :to="{name: 'member-directory'}"
        >opportunity map</v-btn>

      </div>
      <div>
        <RypBtn :to="{name: 'members-area'}" color="success">
          <template v-slot:btnText>
            members area
          </template>
        </RypBtn>
<!--        <RypBtn :to="{name: 'member-directory'}" color="accent">-->
<!--          <template v-slot:btnText>-->
<!--            member directory-->
<!--          </template>-->
<!--        </RypBtn>-->
      </div>
    </div>

    <div
      class="pl-8">
      <DarkMode />
    </div>
  </v-app-bar>
</template>

<script>
  import DarkMode from './DarkMode'
  import RypBtn from './RypBtn'
  import LogoText from './LogoText'
  import ClientLogos from './ClientLogos'

  export default {
    name: 'Header',
    components: {
      ClientLogos,
      DarkMode,
      RypBtn,
      LogoText
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
    methods:{
      on(){

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
  .ryp-head-btn{
    letter-spacing: normal;
    text-transform: lowercase;
  }


</style>
