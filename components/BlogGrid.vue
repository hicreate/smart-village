<template>
    <div>
      <v-row
      class="d-flex justify-content-start"
      >
        <v-col
          v-for="(post, i) in news"
          :key="i"
          xl="2"
          lg="3"
          md="3"
          cols="12"
        >
          <client-only><BlogTile :post="post" /></client-only>
        </v-col>
      </v-row>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BlogTile from './BlogTile'

  export default {
    name: 'BlogGrid',
    components:{
      BlogTile
    },
    props:{
      //news: Array
    },
    methods:{
    },
    computed:{
      ...mapState({
        news: state => state.posts.posts
      })
    },
  }
</script>

<style scoped>

</style>
