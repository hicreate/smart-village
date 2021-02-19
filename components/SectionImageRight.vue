<template>
  <div>
    <v-row
    class="desktop-row-5"
    >
      <v-col
        lg="10"
        md="10"
        cols="12"
        class="mx-auto"
        :class="{'px-8': $vuetify.breakpoint.smAndDown}"
      >
        <v-row
        class="d-flex sir-col-left"
        >
          <!--The content section, load in buttons as required using the last slot-->
          <v-col
            lg="6"
            cols="12"
            class="d-flex align-center col-cont-left"
          >
            <v-row>
              <v-col
                lg="10"
                md="10"
                cols="12"
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
            class="col-cont-right"
          >
            <v-row
              class="sir-col-right"
            >
              <v-col
                cols="12"
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
    }
  }
</script>

<style scoped>
  @media(max-width:764px){
    .col-cont-left{
      order:2;
    }

    .col-cont-right{
      order:1;
    }
  }

</style>
