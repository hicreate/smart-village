<template>
    <div>
      <v-row
      class="d-flex justify-content-start"
      >
        <v-col
          v-for="(post, i) in news"
          :key="i"
          xl="3"
          lg="3"
          md="3"
          cols="12"
          class="indi-post"
        >
          <BlogTile :post="post" />
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
      news: Array
    },
    methods:{
      animatePosts(){
        // Get the initial state
        // const state = Flip.getState(".indi-post");
        // Flip.from(state, {
        //   absolute: true, // uses position: absolute during the flip to work around flexbox challenges
        //   duration: 0.5,
        //   stagger: 0.1,
        //   ease: "power1.inOut"
        //   // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc.
        // });
      }
    },
    computed:{
      ...mapState({
        news: state => state.posts.posts
      })
    },
    watch: {

    }
  }
</script>

<style scoped>

</style>
