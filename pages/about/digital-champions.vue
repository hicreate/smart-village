<template>
    <div>
      <div class="pb-10">
        <SectionImageRight image-source="https://content.rypsv.scot/wp-content/uploads/2021/02/revised-vectors-05.png">
          <template v-slot:sectionTitle>
            <h1
              class="h1 mb-2"
              :style="{color: $vuetify.theme.themes[theme].fontColor}"
            >Meet our Digital Champions</h1>
          </template>
          <template v-slot:sectionSub>
            <p class="font-weight-light">This diverse team has been brought together from all over Scotland with a wealth of knowledge and experience to help create the platform you are on just now. With young people being the users, we needed the same demographic to be at the heart of this platform and that is what we have done. From training, market research and early concept design in November through to collecting, creating and uploading content in February. It has been a process that has relied on the constant input and feedback of this team and their wider networks of other young people to ensure that this platform is current and relevant for young people living in rural Scotland.</p>
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
                  >
                    <DchampTiles :champs="champions" id="dchamps"></DchampTiles>
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
  import {mapState} from 'vuex'

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
      },
      ...mapState({
        champions: state => state.champions.champions
      })
    },
    async fetch ({store, error}) {
      try{
        await store.dispatch('champions/fetchChamps')
      } catch(e){
        error({
          statusCode: 503,
          message: 'Unable to fetch Champion data at this time'
        })
      }
    },
  }
</script>

<style scoped>

</style>
