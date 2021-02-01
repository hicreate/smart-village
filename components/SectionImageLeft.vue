<template>
  <div>
    <v-row
    class="desktop-row ma-0"
    >
      <!--          The image column that should sit flush on one edge on larger screen-->
      <v-col
        lg="12"
        class="pb-0 mx-auto"
      >
        <v-row
          class="ma-0"
        >
          <v-col
            lg="6"
            cols="12"
            :class="imageEdge"
          >
            <v-row
              class="ma-0"
            >
              <v-col
                lg="10"
                cols="12"
                :class="imageEdge"
              >
                <nuxt-img
                  fit="contain"
                  class="ryp-left-img mobile-image"
                  :src="imageSource"></nuxt-img>
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
                cols="12"
                class="mr-5 ml-5"
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

.ryp-left-img{
  width: 100%;
}

  @media(max-width:763px){
     .mobile-image{
      max-width: 100vw !important;
    }
  }

  .desktop-row{
  }
</style>
