<template>
    <div class="slider-holder">
      <v-carousel
        cycle
        height="600"
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
              class="fill-height"
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
    }
  }
</script>

<style scoped>
.slide-image{
  background-size: cover;
  background-position: center center;
}

</style>
