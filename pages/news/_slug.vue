<template>
<div>
  <v-row v-if="post" class="desktop-row-5">
    <v-col
    cols="12"
    lg="10"
    md="10"
    class="mx-auto"
    >
<v-row>
  <div class="d-flex flex-column">
    <div>
      <v-btn
        small
        text
        elevation="0"
        :to="{name: 'news'}"
      >
        <v-icon>mdi-chevron-left</v-icon>
        back to blog</v-btn>
    </div>
    <h1 class="mt-10" v-html="post.title.rendered"></h1>
  </div>
</v-row>

<!--      add a featured image that extends 9/12 across the width with a card at the right containing meta, including author info-->
      <v-row></v-row>
    </v-col>
  </v-row>
</div>
</template>

<script>

  export default {
    name: '_slug',
    data(){
      return{
        slug: ''
      }
    },
    methods:{
      async getContent(){
        if(this.$store.state.posts.posts.length === 0 || !this.$store.state.posts.posts){
          await this.$store.dispatch('posts/fetchPosts');
          await this.$store.dispatch('posts/fetchCategories');
        }
      }
    },
    computed:{
      post(){
        return this.$store.getters["posts/getPostBySlug"](this.slug);
      }
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

</style>
