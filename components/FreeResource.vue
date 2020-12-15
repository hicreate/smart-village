<template>
    <v-card
    color="brandPrimary"
    >
      <div
      class="d-flex px-3"
      >
        <v-icon>
          mdi-information-outline
        </v-icon>
        <v-card-title
          :class="subColor"
        >
          template business plan
        </v-card-title>
      </div>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-divider>
      </v-divider>
      <v-card-actions>
        <v-btn
          dark
        text
        class="text-lowercase"
        >
          access now
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    name: 'FreeResource',
    computed:{
      subColor(){
        return this.$vuetify.theme.dark ? 'white--text' : 'white--text'
      },
    }
  }
</script>

<style scoped>

</style>
