<template>
  <v-row
    class="desktop-row-5"
    :style="{background: $vuetify.theme.themes[theme].altBackground}"
  >
    <v-col
      cols="12"
      lg="10"
      md="10"
      class="mx-auto"
      :class="{'px-8': $vuetify.breakpoint.smAndDown}"
    >
      <div
        class="d-flex"
      >
        <div
          :class="{'pb-8': $vuetify.breakpoint.smAndDown}"
        >
          <p class="mb-0 pb-0">See what's been happening</p>
          <h2
            class="h1 mb-2"
            :style="{color: $vuetify.theme.themes[theme].fontColor}"
          >Recent Posts</h2>
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-btn
            :to="{name: 'news'}"
            right
            text
            :nuxt="true"
          >
            see all posts
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </div>
      </div>

      <v-row
        class="d-flex justify-start"
      >
        <v-col
          v-for="(post, i) in news.slice(0, 4)"
          :key="i"
          xl="2"
          lg="3"
          md="3"
          sm="4"
          cols="12"
        >
          <BlogTile :post="post" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import {mapState} from 'vuex'
  import BlogTile from "~/components/BlogTile";

  export default {
    name: "RecentPosts",
    components:{
      BlogTile
    },
    mounted(){
      this.$store.dispatch('posts/fetchPosts');
      this.$store.dispatch('posts/fetchCategories');
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
      ...mapState({
        news: state => state.posts.posts
      })
    }
  }
</script>

<style scoped>

</style>
