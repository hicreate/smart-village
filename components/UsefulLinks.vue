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
        Useful Links
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
            <v-list-item-icon
            >
              <v-icon
              color="success"
              >mdi-arrow-right-thin-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="mobile-nav-selected"
                v-text="item.text"></v-list-item-title>
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
            text: 'home',
            name: 'index'
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
            name: 'contact-us'
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
