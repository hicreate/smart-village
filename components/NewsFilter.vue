<template>
  <v-row
    :class="{'pa-4': $vuetify.breakpoint.mdAndUp}"
  >
    <v-col class="d-flex flex-column justify-center align-items">
      <div v-if="this.selectedCategoryName">
        Showing {{news.length}} posts from category <strong>'{{this.selectedCategoryName[0].name}}'</strong>
      </div>
      <div v-else>
        Showing {{news.length}} posts from all categories
      </div>
    </v-col>
    <v-col
      lg="2"
    >
      <v-select
        v-if="this.categories"
        label="category"
        :items="this.categories"
        item-text="name"
        item-value="id"
        v-model="selectedCategory"
        clearable
      >
      </v-select>
    </v-col>
  </v-row>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'NewsFilter',
  data(){
    return{
      selectedCategory:null,
      selectedCategoryName: null
    }
  },
  methods:{
    ...mapActions({
      resetLoader: 'posts/resetLoader',
      resetLoaderOff: 'posts/resetLoaderOff'
    }),
    async categoryName(){
      if(this.selectedCategory){
        this.selectedCategoryName = await this.categories.filter(cat =>{
          return cat.id === this.selectedCategory;
        })
      } else {
        this.selectedCategoryName = null;
        this.resetLoader();
      }
    }
  },
  computed:{
    ...mapState({
      categories: state => state.posts.categories,
      news: state => state.posts.posts
    })
  },
  watch: {
    selectedCategory: async function (val) {
      await this.resetLoader();
      if(val){
        this.$store.dispatch('posts/fetchPosts', val);
        this.categoryName();
      } else{
        this.$store.dispatch('posts/fetchPosts');
        this.categoryName();
      }
      //emit the selected category to trigger the animation flip
      this.$emit('catSelected', this.selectedCategory);
    },
  }
}
</script>

<style scoped>

</style>
