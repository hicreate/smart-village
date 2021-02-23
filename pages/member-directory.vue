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
      <v-btn
        class="mb-10"
        color="primary"
        text
        :to="{name: 'index'}"
      ><v-icon>mdi-chevron-left</v-icon>Go to home</v-btn>
      <h1 class="mb-4">Page coming soon</h1>
    </div>
    <div>
      <p>
        Welcome to the opportunities map. When the site goes fully live soon you will come back to this page and see, you've guessed it, a map! Not just any map though, it will be an interactive one that you as a member can access for free and use to easily find opportunities specific to the area you live in as well as seeing broader national opportunities. The map will have a filter system that will allow you to easily find different opportunities specific to your needs and location. The initial categories are :
      </p>
      <ul class="mb-4">
        <li>Employment and Volunteering</li>
        <li>Networking & Events</li>
        <li>Personal & Business Support & Training</li>
      </ul>
      <p>
        Don't forget to create an account so when the this page goes live you will get notified and can come and check it out.
      </p>
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
