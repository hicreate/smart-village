<template>
  <v-row class="extra-height">
    <v-col
      lg="10"
      md="10"
      cols="12"
      class="mx-auto"
      :class="{'px-8': $vuetify.breakpoint.smAndDown}"
    >
      <v-row>
        <v-col>
          <NewsFilter />
        </v-col>
      </v-row>

      <v-row>
        <v-col
        cols="12"
        >
          <BlogGrid :news="news" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import {mapState} from 'vuex'
  import BlogGrid from '../../components/BlogGrid'
  import NewsFilter from '../../components/NewsFilter'

  export default {
    name: 'index',
    components:{
      BlogGrid,
      NewsFilter
    },
    computed:{
      ...mapState({
        news: state => state.posts.posts
      })
    },
    mounted(){
        this.$store.dispatch('posts/fetchPosts');
        this.$store.dispatch('posts/fetchCategories');
    }
  }
</script>

<style scoped>

  .extra-height{
    padding-top: 5%;
    padding-bottom: 5%;
  }

</style>
