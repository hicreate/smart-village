<template>
  <div>
      <v-skeleton-loader
        v-if="!news"
        class="mx-auto"
        max-width="300"
        type="card"
      >
      </v-skeleton-loader>
    <v-card
      v-else
      class="mx-auto"
      max-width="344"
      tile
      :color=$vuetify.theme.themes[theme].altBackground
    >
      <v-img
        :src="this.featuredImage"
        height="200px"
      >
        <div class="category-chip">
          <v-chip
            small
            dark
            :color=$vuetify.theme.themes[theme].secondary
            v-for="(cat, i) in this.post._embedded['wp:term'][0]"
            :key="i"
          >
            {{cat.name}}
          </v-chip>
        </div>
      </v-img>

      <v-card-title
        class="blog-tile-title"
      >
        <div v-html="post.title.rendered" class="post-title">

        </div>
      </v-card-title>

      <v-card-subtitle>
        <!--      category and meta to go here-->
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
          :color=$vuetify.theme.themes[theme].accent
          text
        >
          Read Post
        </v-btn>
        <v-spacer></v-spacer>
        <div>
          <v-btn
            text
            @click="show = !show"
          >
            <span style="font-size: 9px !important;" class="overline font-weight-light">OR, SEE SUMMARY</span>
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </div>

      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text v-html="post.excerpt.rendered">
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'BlogTile',
    data(){
      return{
        show: false,
        postCategories: []
      }
    },
    props:{
      post: Object
    },
    methods:{
      currentPostCategories(){
        console.log(this.post._embedded['wp:term'][0])
      },
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
      ...mapState({
        categories: state => state.posts.categories,
        news: state => state.posts.posts
      }),
      featuredImage(){
        if(this.post.featured_image_src){
          return this.post.featured_image_src
        } else{
          return 'https://content.rypsv.scot/wp-content/uploads/2021/01/Tinto-Hill-lanarkshire.jpg'
        }
      }
    },
    filters: {
      limitExcerpt: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    mounted(){
      this.currentPostCategories();
    },
  }
</script>

<style scoped>

  .category-chip{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }

  @media(min-width: 764px){
    .post-title{
      min-height: 96px !important;
    }
  }

</style>
