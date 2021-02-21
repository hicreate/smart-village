<template>
<div>hello {{slug}}</div>
</template>

<script>
  export default {
    name: '_slug',
    data(){
      return{
        slug: ''
      }
    },
    mounted(){
      this.slug = this.$route.params.slug;
    }
  }
</script>

<style scoped>

</style>
