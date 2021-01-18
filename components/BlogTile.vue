<template>
  <v-card
    class="mx-auto"
    max-width="344"
    :color=$vuetify.theme.themes[theme].altBackground
  >
    <v-img
      :src="post.fImage.source_url"
      height="200px"
    >
      <div class="category-chip">
        <v-chip
          small
          dark
          :color=$vuetify.theme.themes[theme].accent
          v-for="(cat, i) in postCategories"
          :key="i"
        >
          {{cat.name}}
        </v-chip>
      </div>
    </v-img>

    <v-card-title
    >
      <div v-html="post.title.rendered" class="post-title">

      </div>
    </v-card-title>

    <v-card-subtitle>
<!--      category and meta to go here-->
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        :color=$vuetify.theme.themes[theme].success
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
        if(this.post.categories.length > 0){
          this.post.categories.forEach(c => {
            console.log(this.post.id, c)
            let cats = this.categories.filter(cat => {
              return cat.id === c
            })
            this.postCategories.push(cats[0])
          })
        }
      }
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
      ...mapState({
        categories: state => state.posts.categories
      }),
    },
    filters: {
      limitExcerpt: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    mounted(){
      this.currentPostCategories()
    }
  }
</script>

<style scoped>
  .post-title{
    min-height: 72px !important;
  }

  .category-chip{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }

</style>
