<template>
<div>
  <v-row
    v-if="post"
    :class="{'py-8': $vuetify.breakpoint.smAndDown, 'desktop-row-5': $vuetify.breakpoint.mdAndUp}"
  >
    <v-col
    cols="12"
    lg="10"
    md="10"
    class="mx-auto"
    >
    <v-row>
  <v-col
  cols="12"
  :class="{'px-8': $vuetify.breakpoint.smAndDown}"
  >
    <div class="d-flex flex-column">
      <div>
        <v-btn
          small
          text
          elevation="0"
          :to="{name: 'news'}"
          color="primary"
        >
          <v-icon>mdi-chevron-left</v-icon>
          back to blog</v-btn>
      </div>
      <h1
        class="post-title"
        :class="{'mt-2': $vuetify.breakpoint.smAndDown,'mt-10': $vuetify.breakpoint.mdAndUp}"
        v-html="post.title.rendered"></h1>
    </div>
  </v-col>
</v-row>
<!--      add a featured image that extends 9/12 across the width with a card at the right containing meta, including author info-->
    <v-row
      class=""
      :class="{'py-2': $vuetify.breakpoint.smAndDown, 'py-10': $vuetify.breakpoint.mdAndUp}"
      >
        <v-col
        cols="12"
        md="3"
        lg="3"
        :class="{'px-8': $vuetify.breakpoint.smAndDown, 'py-0 d-flex': $vuetify.breakpoint.mdAndUp}"
        class="col-cont-left"
        >
          <v-card
            dark
            class="rounded"
            :color=$vuetify.theme.themes.dark.altBackground
          >
            <v-card-subtitle class="mb-0 pb-0">Read & enjoy</v-card-subtitle>
            <v-card-title class="pt-1 pb-2">Post Categories</v-card-title>
            <v-card-text>
              <div v-if="this.post._embedded['wp:term']">
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
              <div class="my-3">
                <v-divider></v-divider>
              </div>

<!--              list of post attributes-->
              <v-list
                color="transparent"
                dense>
                <v-subheader>POST DETAILS</v-subheader>
                <v-list-item-group
                  color="primary"
                >

<!--                  published date-->
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="white">mdi-calendar-clock</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Published on</v-list-item-title>
                      <v-list-item-subtitle class="font-weight-light" style="font-size: 12px;"> {{publishedDate}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

<!--                  published by-->
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="white">mdi-account-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>Published by</v-list-item-title>
                      <v-list-item-subtitle class="font-weight-light" style="font-size: 12px;"> {{this.post._embedded.author[0].name}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <div>
                <p>
                  Our blog is maintained by a group of voluntary contributors. Their opinions and any opinions expressed therein are theirs and not necessarily representative of those of Smart Village and Rural Youth Project.
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          lg="9"
          md="9"
          class="featured-image col-cont-right"
          v-bind:style="{ 'background-image': 'url(' + featuredImage + ')' }"
        >
        </v-col>
      </v-row>

      <!--  main blog content here-->
      <v-row>
        <v-col
          cols="12"
          md="8"
          lg="8"
          class="main-content"
          :class="{'pa-8': $vuetify.breakpoint.smAndDown}"
        >
          <div v-html="post.content.rendered"></div>
        </v-col>
        <v-col
        lg="1"
        md="1"
        cols="12"
        >
        </v-col>
        <v-col
        cols="12"
        lg="3"
        md="3"
        v-bind:style="{ 'background-color': $vuetify.theme.themes[theme].altBackground}"
        :class="{'mobile-sidebar pa-5': $vuetify.breakpoint.smAndDown, 'pt-15 px-10': $vuetify.breakpoint.mdAndUp}"
        >
          <h3>Recent Posts</h3>

          <v-list
          color="transparent"
          >
            <v-list-item
              :to="'/news/' + recPost.slug"
              nuxt
              v-for="recPost in allPosts.slice(0, 4)" :key="recPost.id"
              class="px-0">
              <v-list-item-avatar>
                <v-img
                  v-if="recPost._embedded['wp:featuredmedia']"
                  :src="recPost._embedded['wp:featuredmedia'][0].source_url"
                  height="200px"
                >
                </v-img>
                <v-img
                  v-else
                  src="https://content.rypsv.scot/wp-content/uploads/2021/02/placeholder-01.jpg"
                  height="200px"
                >
                </v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{recPost.title.rendered}}</v-list-item-title>
                <v-list-item-subtitle class="font-weight-light" style="font-size: 12px;"> {{recPostPublishedDate(recPost.date)}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <div class="mt-5">
            <v-btn
              :to="{name: 'news'}"
              right
              text
              :nuxt="true"
              color="primary"
            >
              see all posts
              <v-icon>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

</div>
</template>

<script>
import moment from 'moment'
import {mapState} from 'vuex'


  export default {
    name: '_slug',
    components: { },
    data(){
      return{
        slug: ''
      }
    },
    methods:{
      recPostPublishedDate(date){
        return moment(date).format("dddd, MMMM Do YYYY");
      },
      async getContent(){
        if(this.$store.state.posts.posts.length === 0 || !this.$store.state.posts.posts){
          await this.$store.dispatch('posts/fetchPosts');
          await this.$store.dispatch('posts/fetchCategories');
        }
      }
    },
    computed:{
      ...mapState({
        allPosts: state => state.posts.posts
      }),
      post(){
        return this.$store.getters["posts/getPostBySlug"](this.slug);
      },
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
      featuredImage(){
        let fImage = 'https://content.rypsv.scot/wp-content/uploads/2021/02/placeholder-01.jpg';
        if(this.post._embedded['wp:featuredmedia']){
          fImage = this.post._embedded['wp:featuredmedia'][0].source_url;
        }
        return fImage;
      },
      publishedDate(){
        return moment(this.post.date).format("dddd, MMMM Do YYYY");
      },
    },
    mounted(){
      this.getContent();
    },
    created(){
      this.slug = this.$route.params.slug;
    }
  }
</script>

<style scoped>
  @media (min-width: 764px){
    .featured-image{
      min-height: 55vh;
    }

    .post-title{
      font-size: 4em !important;
      padding-left: 8px;
    }
  }

  @media (max-width: 763px){
    .featured-image{
      min-height: 55vh;
    }

    .col-cont-left{
      order:2;
    }

    .col-cont-right{
      order:1;
    }

    .mobile-sidebar{
      max-width: 90% !important;
      margin: 0 auto;
    }
  }

  .featured-image{
    background-size: cover;
    background-position: center center;
    border-radius: 5px;
  }

  >>>.v-list-item__icon{
    margin-right: 8px !important;
  }

  >>>.v-list-item__title{
    white-space: normal !important;
  }

  .main-content{
    overflow: hidden;
  }
</style>
