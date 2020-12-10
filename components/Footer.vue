<template>
  <v-row class="pb-10">
    <v-col
    cols="10"
    class="mx-auto pt-10"
    >
      <v-row>
        <v-col
          cols="6"
        >
          <LogoText />
          <ContactCard class="mt-10" />
        </v-col>
        <v-col
          cols="3"
        >
          <UsefulLinks />
        </v-col>
        <v-col
          cols="3"
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

</style>
