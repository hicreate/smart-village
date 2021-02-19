<template>
    <div
      class="slider-holder"
      :class="{'drop-shadow': $vuetify.breakpoint.mdAndUp}"
    >
      <v-carousel
        cycle
        :height="sliderHeight"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          class="slide-item"
        >
          <v-sheet
            height="100%"
            class="slide-image"
            v-bind:style="{ 'background-image': 'url(' + slide.url + ')' }"
          >
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <div class="display-3">

              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
</template>

<script>
  export default {
    name: 'HomeSlider',
    data(){
      return{
        slides:[
          {
            url:'https://content.rypsv.scot/wp-content/uploads/2021/02/Rural-Youth-Ideas-Festival-day-2-104-scaled.jpg'
          },
          {
            url:'https://content.rypsv.scot/wp-content/uploads/2021/02/Rural-Youth-Ideas-Festival-060-scaled.jpg'
          },
          {
            url:'https://content.rypsv.scot/wp-content/uploads/2021/01/Rural-Youth-Ideas-Festival-130.jpg'
          },
        ]
      }
    },
    computed:{
      sliderHeight(){
        var height;
        if(this.$vuetify.breakpoint.mdAndUp){
          height = 600;
        } else if(this.$vuetify.breakpoint.smAndDown) {
          height = 350;
        }
        return height;
      }
    }
  }
</script>

<style scoped>
.slide-image{
  background-size: cover;
  background-position: center center;
  border-radius: 30px;
}

  .slider-holder{
    border-radius: 30px;
    overflow: hidden;
  }

  .drop-shadow{
    box-shadow: 26px 25px 0px 12px rgba(67,147,195,1);
    -webkit-box-shadow: 26px 25px 0px 12px rgba(67,147,195,1);
    -moz-box-shadow: 26px 25px 0px 12px rgba(67,147,195,1);
  }

</style>
