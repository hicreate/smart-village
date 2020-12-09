<template>
  <div
    class="py-5 px-8"
    >
    <v-row>
      <v-col
        class="mx-auto rounded-lg extra-height"
        :style="{background: $vuetify.theme.themes[theme].sectionBG}"
      >
        <v-row>

          <!--The content section, load in buttons as required using the last slot-->
          <v-col
            cols="6"
            class="d-flex align-center"
          >
            <v-row>
              <v-col
                cols="7"
                class="mx-auto"
              >
                <div>
                  <slot name="sectionTitle"></slot>
                  <slot name="sectionSub"></slot>
                  <slot name="sectionCta"></slot>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <!--          The image column that should sit flush on one edge on larger screen-->
          <v-col
            cols="5"
          >
            <v-row>
              <v-col
                cols="10"
                class="mx-auto"
              >
                <v-img :src="imageSource"></v-img>
              </v-col>
            </v-row>
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
  .extra-height{
    padding-top: 10%;
    padding-bottom: 10%;
  }

</style>
