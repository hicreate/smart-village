<template>
    <v-carousel id="test-slider" style="background-color: rgba(0, 0, 0, 0)">
      <v-carousel-item
        v-for="(person, i) in testimonials"
        :key="i"

      >
        <v-sheet
          height="100%"
          tile
          color="#1179F5"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col
            lg="8"
            >
              <h2 class="mb-5 text-center">What our users think...</h2>
              <div class="text-center">
                <h3 class="mb-3">{{person.quote}}</h3>
                <p class="mb-0">{{person.name}}</p>
                <p class="overline">{{person.region}}</p>

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
    data(){
      return{
        testimonials:[
          {
            name: 'John Smith',
            region: 'Highlands',
            quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "'
          },
          {
            name: 'John Smith',
            region: 'Highlands',
            quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "'
          },
          {
            name: 'John Smith',
            region: 'Highlands',
            quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "'
          },
          {
            name: 'John Smith',
            region: 'Highlands',
            quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .v-carousel__controls{
    background-color: rgba(0, 0, 0, 0) !important;
  }

</style>
