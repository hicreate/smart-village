<template>
  <div>
    <v-row class="mt-lg-15">
      <!--          The image column that should sit flush on one edge on larger screen-->
      <v-col
        cols="12"
        class="pb-0"
      >
        <v-row>
          <v-col
            cols="6"
            class="pb-0"
          >
            <v-row>
              <v-col
                cols="10"
                class="mx-auto pb-0"
              >
                  <v-img
                    :src="imageSource"></v-img>
              </v-col>
            </v-row>
          </v-col>

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
                <div v-intersect="onIntersect">
                  <slot name="sectionTitle"></slot>
                  <slot name="sectionSub"></slot>
                  <slot name="sectionCta"></slot>
                </div>
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
    name: 'SectionImageLeft',
    props:{
      imageSource: String
    },
    data(){
      return{
        imageVisible: false
      }
    },
    methods:{
      onIntersect(){
        this.imageVisible = true
      }
    }
  }
</script>

<style scoped>

</style>
