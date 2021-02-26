<template>
    <div>
      <div
        :class="{'d-flex flex-row align-center': $vuetify.breakpoint.mdAndUp}"
        class="pa-3 logo-box"
        :style="{backgroundColor: $vuetify.theme.themes.dark.altBackground}"
      >
        <div
          class="d-flex"
          :class="{'flex-row': $vuetify.breakpoint.mdAndUp}"
        >
          <v-img
            contain
            class="partner-logo"
            :class="{'my-2': $vuetify.breakpoint.smAndDown}"
            src="/images/ryp-logo-light.png" ></v-img>
          <v-img
            contain
            class="partner-logo"
            :class="{'my-2': $vuetify.breakpoint.smAndDown}"
            src="/images/svs.webp" ></v-img>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ClientLogos',
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    }
  }
</script>

<style scoped>
  .logo-box{
    border-radius: 15px;
  }

  .partner-logo{
    max-width: 96px;
  }

</style>
