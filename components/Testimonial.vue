<template>
    <v-carousel id="test-slider" style="background-color: rgba(0, 0, 0, 0)">
      <v-carousel-item
        v-for="(person, i) in testimonials"
        :key="i"

      >
        <v-sheet
          height="100%"
          tile
          :color=$vuetify.theme.themes[theme].primary
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col
            lg="8"
            :class="{'px-15': $vuetify.breakpoint.smAndDown}"
            >
              <h2 class="mb-5 text-center">What our users think...</h2>
              <div class="text-center">
                <h3
                  :class="{'body-2': $vuetify.breakpoint.smAndDown}"
                  class="mb-3">{{person.acf.testimonial_body}}</h3>
                <p class="mb-0">{{person.title.rendered}}</p>
                <p class="overline">{{person.acf.location}}</p>

              </div>
            </v-col>

          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
</template>

<script>

  export default {
    name: 'Testimonial',
    props:{
      testimonials: Array
    },
    data(){
      return{
      }
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    },
  }
</script>

<style scoped>
  .v-carousel__controls{
    background-color: rgba(0, 0, 0, 0) !important;
  }

</style>
