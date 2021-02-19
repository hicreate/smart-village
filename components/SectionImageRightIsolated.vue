<template>
  <div
    class="py-5"
    >
    <v-row>
      <v-col
        cols="12"
        lg="10"
        md="10"
        class="mx-auto rounded-lg rounded-md"
        :class="{'px-8': $vuetify.breakpoint.smAndDown}"
      >
        <v-row
        class="desktop-row-5"
        >
          <!--The content section, load in buttons as required using the last slot-->
          <v-col
            lg="6"
            md="6"
            cols="12"
            class="d-flex align-center"
          >

                <div>
                  <slot name="sectionTitle"></slot>
                  <slot name="sectionSub"></slot>
                  <slot name="sectionCta"></slot>
                </div>
              </v-col>

          <!--          The image column with central image widget-->
          <v-col
            lg="6"
            md="6"
            cols="12"

          >
                <nuxt-img
                  class="section-image"
                  :src="imageSource"></nuxt-img>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
  </div>
</template>

<script>
  export default {
    name: 'SectionImageRightIsolated',
    props:{
      imageSource: String
    },
    components:{

    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    }
  }
</script>

<style scoped>

  .section-image{
    border-radius: 20px;
  }
</style>
