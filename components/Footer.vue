<template>
  <v-row class="pb-10 ryp-footer">
    <v-col
    lg="10"
    class="mx-auto pt-10"
    >
      <v-row>
        <v-col
          lg="6"
        >
          <LogoText />
          <ContactCard class="mt-10" />
        </v-col>
        <v-col
          lg="3"
        >
          <UsefulLinks />
        </v-col>
        <v-col
          lg="3"
        >
          <QuickLinks />
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
</style>
