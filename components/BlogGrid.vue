<template>
    <div>
      <v-row>
        <v-col
          v-for="(post, i) in news"
          :key="i"
          xl="3"
        >
          <BlogTile :post="post" />
        </v-col>
      </v-row>
    </div>
</template>

<script>
  import BlogTile from './BlogTile'

  export default {
    name: 'BlogGrid',
    components:{
      BlogTile
    },
    props:{
      news: Array
    }
  }
</script>

<style scoped>

</style>
