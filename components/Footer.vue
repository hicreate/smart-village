<template>
  <v-row class="pb-10 ryp-footer">
    <v-col
    lg="10"
    md="10"
    cols="12"
    class="mx-auto pt-10"
    >
      <v-row>
        <v-col
          lg="6"
          md="6"
          cols="12"
          :class="{'': $vuetify.breakpoint.smAndDown, 'px-10': $vuetify.breakpoint.smAndDown}"
        >
          <LogoText />
          <ContactCard
            class="mt-10"
          />
        </v-col>
        <v-col
        cols="12"
        lg="6"
        md="6"
        >
         <v-row>
           <v-col
             lg="6"
             md="6"
             sm="6"
             cols="12"
           >
             <UsefulLinks />
           </v-col>
           <v-col
             lg="6"
             md="6"
             sm="6"
             cols="12"
           >
             <QuickLinks />
           </v-col>
         </v-row>
          <v-row>
            <v-col :class="{'px-5': $vuetify.breakpoint.smAndDown}">
              <div
                :class="{'flex-column justify-center align-center': $vuetify.breakpoint.smAndDown}">
                <div class="d-flex">
                  <div>
                    <v-img
                      class="funder-logo"
                      :class="{'mb-3': $vuetify.breakpoint.smAndDown}"
                     contain src="/images/funders.jpg"></v-img>
                  </div>
                </div>

              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>


</template>

<script>

  import LogoText from './LogoText'
  import ContactCard from './ContactCard'
  import UsefulLinks from './UsefulLinks'
  import QuickLinks from './QuickLinks'

  export default {
    name: 'Footer',
    components:{
      LogoText,
      ContactCard,
      UsefulLinks,
      QuickLinks
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>
.ryp-footer{
  -webkit-box-shadow: 0px -5px 9px 0px rgba(0,0,0,0.05);
  box-shadow: 0px -5px 9px 0px rgba(0,0,0,0.05);
}

.funder-logo{
  max-width: 580px;
}

@media(max-width:763px){

}

</style>
