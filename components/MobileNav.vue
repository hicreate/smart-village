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
<!--          check if a menu item has children, if not then show a standard list item, if has children show a list-item-group with children as a sub group-->
          <v-list-item
            v-if="!tile.hasChildren"
            :key="tile.title"
            @click="sheet = false"
            :nuxt="true"
          >
            <v-list-item-avatar
            >
              <v-avatar
                size="32px"
                tile
              >
                <v-icon>{{tile.icon}}</v-icon>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{ tile.title }}</v-list-item-title>
          </v-list-item>

<!--          the group to show if children are present-->
          <v-list-group
            v-else
            :value="false"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-avatar
              >
                <v-avatar
                  size="32px"
                  tile
                >
                  <v-icon>{{tile.icon}}</v-icon>
                </v-avatar>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{tile.title}}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(child, i) in tile.children"
              :key="i"
              @click="sheet = false"
              :to="{name: 'about-digital-champions' }"
              :nuxt="true"
            >
              <v-list-item-avatar
              tile
              >
                <v-avatar
                >
                  <v-list-item-icon class="mx-auto">
                    <v-icon v-text="child.icon"></v-icon>
                  </v-list-item-icon>
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
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
                hasChildren: true,
                children: [
                  {
                    icon: 'mdi-medal',
                    title: 'digital champions',
                    to: 'about-digital-champions'
                  },
                  {
                    icon: 'mdi-comment-question-outline',
                    title: 'how we work',
                    to: 'how-we-work'
                  },
                ]
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
