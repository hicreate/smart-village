<template>
    <div>
      <div class="pb-10">
        <SectionImageRight image-loc="right" image-source="/images/member.png">
          <template v-slot:sectionTitle>
            <h1
              class="h1 mb-2"
              :style="{color: $vuetify.theme.themes[theme].fontColor}"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
          </template>
          <template v-slot:sectionSub>
            <p class="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </template>
          <template v-slot:sectionCta>
            <RypBtn color="success" @rypBtnClick="scrollChamps" >
              <template v-slot:btnText>
                <span>meet the champions</span>
              </template>
            </RypBtn>
          </template>
        </SectionImageRight>
      </div>


      <div :style="{background: $vuetify.theme.themes[theme].altBackground}">
        <v-row>
          <v-col
            class="rounded-lg extra-height my-5 mx-8 py-15"
            :style="{background: $vuetify.theme.themes[theme].sectionBG}"
          >
            <v-row>
              <v-col
                lg="10"
                class="mx-auto"
              >
                <v-row>
                  <v-col
                    lg="10"
                    class="mx-auto"
                  >
                    <DchampTiles id="dchamps"></DchampTiles>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
</template>

<script>
  import DchampTiles from '../../components/DchampTiles'
  import SectionImageRight from '../../components/SectionImageRight'

  export default {
    name: 'digital-champions',
    components:{
      DchampTiles,
      SectionImageRight
    },
    methods:{
      scrollChamps(){
        this.$vuetify.goTo('#dchamps')
      }
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    }
  }
</script>

<style scoped>

</style>
