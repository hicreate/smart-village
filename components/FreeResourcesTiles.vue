<template>
    <div>
      <v-row>
        <v-col
          class="rounded-lg extra-height my-5 mx-8"
          :style="{background: $vuetify.theme.themes[theme].sectionBG}"
        >
          <v-row>
            <v-col
              lg="10"
              class="mx-auto"
            >
              <v-row>
                <v-col>
                  <h3>Just click to download or view any of our free resources</h3>
                  <h4 class="font-weight-light">Sign up to become a member to access support, additional resources, news, events & more!</h4>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  lg="3"
                  v-for="(resource, i) in resources"
                  :key="i"
                >
                  <FreeResource />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
</template>

<script>
  import FreeResource from './FreeResource'

  export default {
    name: 'FreeResourcesTiles',
    components: { FreeResource },
    coponents:{
      FreeResource
    },
    data(){
      return{
        resources:[1, 2, 3, 4]
      }
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    }
  }
</script>

<style scoped>

</style>
