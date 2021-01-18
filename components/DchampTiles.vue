<template>
  <div>
        <v-row>
          <v-col
          v-for="(champ, i) in champs"
          :key="i"
          xl="6"
          lg="6"
          cols="12"
          >
           <DChamp :champ="champ"></DChamp>
          </v-col>
        </v-row>
  </div>

</template>

<script>
  import DChamp from './DChamp'

  export default {
    name: 'DchampTiles',
    components:{
      DChamp
    },
    props:{
      champs: Array
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

</style>
