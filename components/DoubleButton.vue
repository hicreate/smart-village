<template>
  <div>
   <v-row>
     <v-col class="d-flex flex-row">
       <RypBtn class="mr-5" :to="{name: 'resources'}" color="success">
         <template v-slot:btnText>
           <span>get FREE resources</span>
         </template>
         <template v-slot:btnIcon>
           mdi-file-document
         </template>
       </RypBtn>

       <RypBtn :to="{name: 'news'}" color="accent">
         <template v-slot:btnText>
           <span>news & updates</span>
         </template>
         <template v-slot:btnIcon>
           mdi-newspaper-variant-outline
         </template>
       </RypBtn>
     </v-col>
   </v-row>
  </div>
</template>

<script>
  import RypBtn from "~/components/RypBtn";

    export default {
        name: "DoubleButton",
      components:{
          RypBtn,
      }
    }
</script>

<style scoped>

</style>
