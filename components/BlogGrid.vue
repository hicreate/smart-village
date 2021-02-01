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
