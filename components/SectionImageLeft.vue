<template>
  <div>
    <v-row
    class="desktop-row-5"
    >
      <!--          The image column that should sit flush on one edge on larger screen-->
      <v-col
        lg="10"
        md="10"
        cols="12"
        class="mx-auto"
        :class="{'px-8': $vuetify.breakpoint.smAndDown}"
      >
        <v-row>
          <v-col
            lg="6"
            md="6"
            cols="12"
          >
            <v-row>
              <v-col
                lg="10"
                md="10"
                cols="12"
              >
                <nuxt-img
                  class="mobile-image"
                  :src="imageSource"></nuxt-img>
              </v-col>
            </v-row>
          </v-col>

          <!--The content section, load in buttons as required using the last slot-->
          <v-col
            lg="6"
            md="6"
            cols="12"
            class="d-flex align-center"
          >
            <v-row>
              <v-col
                cols="12"
                :class="{'': $vuetify.breakpoint.smAndDown, 'mr-5 ml-5': $vuetify.breakpoint.mdAndUp}"
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
    computed:{}
  }
</script>

<style scoped>
h2{
  font-size: 2em;
  line-height: 1.2em;
}

.left-img{
 max-width: 80%;
  margin: 0 auto;
}

  @media(max-width:763px){
     .mobile-image{
      max-width: 100vw !important;
    }
  }

</style>
