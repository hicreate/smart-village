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
import {mapActions, mapState} from 'vuex'
  import BlogGrid from '../../components/BlogGrid'
  import NewsFilter from '../../components/NewsFilter'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

  export default {
    name: 'index',
    data(){
      return{
        postState: null
      }
    },
    components:{
      BlogGrid,
      NewsFilter
    },
    methods:{
      ...mapActions({
        resetLoader: 'posts/resetLoader' // map `this.add()` to `this.$store.dispatch('increment')`
      }),
      animationTrigger(){

      },
      animatePosts(){
        // Get the initial state
        const state = Flip.getState(".indi-post");
        console.log('anim state', state);
        this.postState = state;
      },
      transitionPosts(){
        Flip.from(this.postState, {
          duration: 0.5,
          stagger: 0.1,
          ease: "power1.inOut"
        });
      },
      getContent(){
          this.$store.dispatch('posts/fetchPosts');
          this.$store.dispatch('posts/fetchCategories');
      }
    },
    computed:{
      ...mapState({
        news: state => state.posts.posts
      })
    },
    mounted(){
      this.getContent();
    },
    created(){
      this.resetLoader();
    },
    watch: {

    }
  }
</script>

<style scoped>

  .extra-height{
    padding-top: 5%;
    padding-bottom: 5%;
  }

</style>
