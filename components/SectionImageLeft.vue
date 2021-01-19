<template>
  <div>
    <v-row class="mt-lg-15">
      <!--          The image column that should sit flush on one edge on larger screen-->
      <v-col
        lg="12"
        class="pb-0 mx-auto"
      >
        <v-row>
          <v-col
            lg="6"
            :class="imageEdge"
          >
            <v-row>
              <v-col
                lg="10"
                :class="imageEdge"
                style="position:relative;"
              >
                <slot name="addImage"></slot>
                  <v-img
                    class="ryp-left-img mobile-image"
                    :src="imageSource"></v-img>
              </v-col>
            </v-row>
          </v-col>

          <!--The content section, load in buttons as required using the last slot-->
          <v-col
            lg="6"
            class="d-flex align-center"
          >
            <v-row>
              <v-col
                lg="7"
                class="mr-10 ml-5"
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
        } else if(this.imageLoc === "left"){
           x = "pl-0"
        } else {
          x = "d-flex justify-center align-center mx-auto"
        }

        return x;
      }
    }
  }
</script>

<style scoped>
h2{
  font-size: 2em;
  line-height: 1.2em;
}

  @media(max-width:763px){
    .ryp-left-image .v-responsive__content{

    }

    .mobile-image{
      max-width: 80vw !important;
    }
  }
</style>
