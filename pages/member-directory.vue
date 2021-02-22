<template>
<v-row
class="desktop-row-10"
>
  <v-col
  cols="12"
  md="10"
  lg="10"
  class="mx-auto"
  >
    <div>
      <h1>Page coming soon</h1>
      <p>Check for updates!</p>
      <v-btn
      color="primary"
      text
      :to="{name: 'index'}"
      ><v-icon>mdi-chevron-left</v-icon>Go to home</v-btn>
    </div>


  </v-col>
</v-row>
</template>

<script>
  export default {
    name: 'member-directory'
  }
</script>

<style scoped>

</style>
