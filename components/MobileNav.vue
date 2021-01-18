<template>
<div>
  <v-bottom-navigation
    :color=$vuetify.theme.themes[theme].accent
    grow
    app
    :background-color=$vuetify.theme.themes[theme].background
  >
    <v-btn
      :to="{name: 'index'}"
    >
      <span
        :style="{color: $vuetify.theme.themes[theme].fontColor}"
      >home</span>
      <v-icon
        :color=$vuetify.theme.themes[theme].fontColor
      >mdi-home-variant</v-icon>
    </v-btn>

    <v-btn
      :to="{name: 'resources'}"
    >
      <span
        :style="{color: $vuetify.theme.themes[theme].fontColor}"
      >resources</span>
      <v-icon
        :color=$vuetify.theme.themes[theme].fontColor
      >mdi-file-document-outline</v-icon>
    </v-btn>

    <v-btn
      :to="{name: 'members-area'}"
    >
      <span
        :style="{color: $vuetify.theme.themes[theme].fontColor}"
      >members</span>
      <v-icon
        :color=$vuetify.theme.themes[theme].fontColor
      >mdi-account-group</v-icon>
    </v-btn>

    <v-btn
    @click="sheet = !sheet"
    >
      <span
        :style="{color: $vuetify.theme.themes[theme].fontColor}"
      >Menu</span>
      <v-icon
        :color=$vuetify.theme.themes[theme].fontColor
      >mdi-menu</v-icon>
    </v-btn>
  </v-bottom-navigation>

<!--  bottom sheet for extended nav-->
  <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      <v-list
        :color=$vuetify.theme.themes[theme].background
      >
        <v-subheader>Menu</v-subheader>
        <div
          v-for="(tile, i) in tiles"
          :key="i"
        >
          <v-list-item
            :key="tile.title"
            @click="sheet = false"
            :nuxt="true"
            :to="{name: tile.to}"
            active-class="ryp-ac"
            exact
          >
            <v-list-item-avatar
            >
              <v-avatar
                size="32px"
                tile
                class="mobile-nav-selected"
              >
                <v-icon>{{tile.icon}}</v-icon>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title
              class="mobile-nav-selected"
            >{{ tile.title }}</v-list-item-title>
          </v-list-item>
        </div>
      </v-list>
    </v-bottom-sheet>
  </div>
</div>
</template>

<script>
    export default {
        name: "MobileNav",
      data(){
          return{
            sheet: false,
            tiles: [
              {
                icon: 'mdi-newspaper-variant-outline',
                title: 'news',
                to: 'news'
              },
              {
                icon: 'mdi-star',
                title: 'about',
                to: 'about',
              },
              {
                icon: 'mdi-medal',
                title: 'digital champions',
                to: 'about-digital-champions'
              },
              {
                icon: 'mdi-comment-question-outline',
                title: 'how we work',
                to: 'about-how-we-work'
              },
            ],
          }
      },
        computed:{
          theme () {
            return (this.$vuetify.theme.dark) ? 'dark' : 'light'
          }
        }
    }
</script>

<style scoped>

</style>
