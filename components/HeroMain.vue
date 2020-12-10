<template>
    <div class="top-hero">
      <v-row class="mt-lg-15">
        <v-col cols="12">
          <v-row>
            <v-col
              cols="5"
              class="d-flex align-center"
            >
              <v-row>
                <v-col class="mx-auto" cols="9">
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
              </v-row>
            </v-col>
            <v-col cols="7" class="pr-0">
              <v-img :src="heroSource"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
</template>

<script>
  import RypBtn from './RypBtn'
  import SocialIcons from "~/components/SocialIcons";

  export default {
    name: 'HeroMain',
    props:{
      heroSource: String
    },
    components:{
      RypBtn,
      SocialIcons
    }
  }
</script>

<style scoped>
  .top-hero h1{
    font-size: 3em !important;
    line-height: 1.2em;
  }

</style>
