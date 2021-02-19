<template>
    <div class="top-hero">
      <v-row
        :class="{'mt-15': $vuetify.breakpoint.mdAndUp, 'mt-5': $vuetify.breakpoint.smAndDown}"
      >
        <v-col
<<<<<<< HEAD
          cols="12"
        lg="10"
        md="10"
        class="mx-auto"
        >
          <v-row class="d-flex">
            <v-col
              lg="5"
              cols="12"
              class="d-flex align-center hero-head-left"
            >
              <v-row
                :class="{'': $vuetify.breakpoint.mdAndUp, 'pr-5': $vuetify.breakpoint.smAndDown}"
              >
                <v-col
                  class="mx-auto"
                  lg="9"
                  md="9"
=======
          lg="10"
          md="10"
          cols="12"
          class="mx-auto"
          :class="{'px-8': $vuetify.breakpoint.smAndDown}"
        >
          <v-row>
            <v-col
              :class="{'pr-5': $vuetify.breakpoint.mdAndUp}"
                  class="mx-auto d-flex flex-column justify-center hero-head-left"
                  lg="5"
                  md="5"
>>>>>>> 50ae6b00e0b342a6e13c889e7df42c1d30c6dc77
                  cols="12"
                >
                  <div>
                    <slot name="heroTitle"></slot>
                    <slot name="heroSub"></slot>
                    <RypBtn color="success" :to="{name:'members-area'}">
                      <template v-slot:btnText>
                        <slot name="heroBtnText"></slot>
                      </template>
                    </RypBtn>
                  </div>
                  <div class="pt-5">
                    <SocialIcons />
                  </div>
                </v-col>
            <v-col
              lg="7"
              md="7"
              cols="12"
<<<<<<< HEAD
            >
              <HomeSlider />
=======
              class="pr-0 hero-head-right">
              <v-img contain class="hero-image" :src="heroSource"></v-img>
            </v-col>
              </v-row>
>>>>>>> 50ae6b00e0b342a6e13c889e7df42c1d30c6dc77
            </v-col>
          </v-row>
    </div>
</template>

<script>
  import RypBtn from './RypBtn'
  import SocialIcons from "~/components/SocialIcons";
  import HomeSlider from './HomeSlider'

  export default {
    name: 'HeroMain',
    props:{
      heroSource: String
    },
    components:{
      HomeSlider,
      RypBtn,
      SocialIcons
    }
  }
</script>

<style scoped>
  .top-hero h1{
    font-size: 3em;
    line-height: 1.2em;
  }

  @media(max-width: 763px){
    .hero-head-right{
      order: 1;
    }

    .hero-head-left{
      order: 2;
    }

    .top-hero h1{
      font-size: 2em;
    }

    .hero-image{
      margin-right: 12px;
    }
  }

  .hero-image{
    border-radius:20px;
  }

</style>
