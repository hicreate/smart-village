<template>
  <div>
    <v-row class="mt-lg-15">

      <v-col
        lg="12"
        class="pb-0"
      >
        <v-row>

          <!--The content section, load in buttons as required using the last slot-->
          <v-col
            lg="6"
            class="d-flex align-center"
          >
            <v-row>
              <v-col
                lg="7"
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

          <!--          The image column that should sit flush on one edge on larger screen-->
          <v-col
            lg="6"
            class="pb-0"
          >
            <v-row
              :class="imageEdge"
            >
              <v-col
                lg="10"
                class=""
                :class="imageEdge"
              >
                <v-img
                  :src="imageSource"></v-img>
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
    name: 'SectionImageRight',
    props:{
      imageSource: String,
      imageLoc: String
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
    },
    computed:{
      imageEdge(){
        let x;

        if(this.imageLoc === "bottom"){
          x = "pb-0 mx-auto"
        } else if(this.imageLoc === "right"){
          x = "pr-0 justify-end"
        } else {
          x = "d-flex justify-center align-center mx-auto"
        }

        return x;
      }
    }
  }
</script>

<style scoped>

</style>
