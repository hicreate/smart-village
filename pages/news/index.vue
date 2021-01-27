<template>
  <v-row class="extra-height">
    <v-col
      lg="10"
      class="mx-auto"
    >
      <v-row>
        <v-col>
          <BlogGrid :news="news" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import {mapState} from 'vuex'
  import BlogGrid from '../../components/BlogGrid'

  export default {
    name: 'index',
    components:{
      BlogGrid
    },
    computed:{
      ...mapState({
        news: state => state.posts.posts
      })
    },
    async fetch ({store, error}) {
      try{
        await store.dispatch('posts/fetchPosts');
        await store.dispatch('posts/fetchCategories');
      } catch(e){
        error({
          statusCode: 503,
          message: 'Unable to fetch Testimonial data at this time'
        })
      }
    }
  }
</script>

<style scoped>

</style>
