<template>
  <div>
    <v-card
      color="rgba(255, 0, 0, 0)"
      max-width="380px"
      elevation="0"
      class="pb-10"
    >
      <v-card-title
        class="pb-0"
        :class="headingColor"
      >
        Quick Links
      </v-card-title>
      <v-card-text>
        <v-divider></v-divider>
      </v-card-text>
      <v-card-actions>
        <v-list
          dense
          color="rgba(255, 0, 0, 0)"
        >
          <v-list-item
            v-for="(item, i) in menuLinks"
            :key="i"
            link
            :to="{name: item.name}"
            active-class="ryp-ac"
            exact
            nuxt
          >
            <v-list-item-icon>
              <v-icon
                color="accent"
              >mdi-arrow-right-thin-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="mobile-nav-selected"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'UsefulLinks',
    data(){
      return{
        menuLinks:[
          {
            id: 1,
            text: 'privacy policy',
            name: 'privacy-policy'
          },
          {
            id: 2,
            text: 'cookie policy',
            name: 'cookie-policy'
          },
          {
            id: 3,
            text: 'sign up',
            name: 'sign-up'
          },
          {
            id: 4,
            text: 'sign in',
            name: 'members-area'
          },
        ]
      }
    },
    computed:{
      headingColor(){
        return this.$vuetify.theme.dark ? 'white--text' : 'secondary--text'
      },
    }
  }
</script>

<style scoped>

</style>
