<template>
  <div>
      <v-skeleton-loader
        v-if="loader"
        class="mx-auto"
        :max-width= maxCardWidth
        type="card"
      >
      </v-skeleton-loader>
    <v-card
      v-else
      :max-width= maxCardWidth
      elevation="0"
      :color=$vuetify.theme.themes[theme].cardBG
      dark
    >
      <v-img
        v-if="this.post._embedded['wp:featuredmedia']"
        :src="this.post._embedded['wp:featuredmedia'][0].source_url"
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
      <v-img
        v-else
        src="https://content.rypsv.scot/wp-content/uploads/2021/02/placeholder-01.jpg"
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
      ><a @click="navigatePost"><div v-html="post.title.rendered" class="post-title">

      </div></a>

      </v-card-title>

      <v-card-subtitle>
        <!--      category and meta to go here-->
      </v-card-subtitle>

      <v-card-actions
      class="tile-actions"
      >
        <v-btn
          color="white"
          text
          @click="navigatePost"
          class="read-more-btn"
        >
          <v-icon class="mr-3">mdi-eye</v-icon>
          Read Post
        </v-btn>
      </v-card-actions>
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
      },
      navigatePost(){
        this.$router.push('/news/' + this.post.slug);
      },
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
      ...mapState({
        categories: state => state.posts.categories,
        news: state => state.posts.posts,
        loader: state => state.posts.postLoader
      }),
      featuredImage(){
        if(this.post.featured_image_src){
          return this.post.featured_image_src
        } else{
          return 'https://content.rypsv.scot/wp-content/uploads/2021/01/Tinto-Hill-lanarkshire.jpg'
        }
      },
      maxCardWidth(){
        let maxWidth = '0'
        if(this.$vuetify.breakpoint.smAndDown){
          maxWidth = '1200';
        } else{
          maxWidth = '300'
        } return maxWidth;
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

  .blog-tile-title{
    font-size: 1.1em;
    line-height: 1.2em;
  }

  .blog-tile-title a{
    color: #ffffff;
  }

  .tile-actions{
    border-top: 0.5px solid #fff;
  }

  .read-more-btn{
    text-transform: none;
    font-weight: 700;
  }

</style>
