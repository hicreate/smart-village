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
          {{resource.title}}
        </v-card-title>
      </div>
      <v-card-text>
        {{resource.summary}}
      </v-card-text>
      <v-divider>
      </v-divider>
      <v-card-actions>
        <v-btn
          dark
        text
        class="text-lowercase"
          :href="resource.url"
          target="_blank"
        >
          access now
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    name: 'FreeResource',
    props:{
      resource: Object
    },
    computed:{
      subColor(){
        return this.$vuetify.theme.dark ? 'white--text' : 'white--text'
      },
    }
  }
</script>

<style scoped>

</style>
