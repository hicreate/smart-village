<template>
    <v-btn
    class="rounded-lg text-lowercase px-5 py-6 custom-ryp-btn"
    :color="color"
    elevation="0"
    :to="to"
    @click="btnClicked"
    >
      <v-icon><slot name="btnIcon"></slot></v-icon>
      <slot name="btnText"></slot>
    </v-btn>
</template>

<script>
  export default {
    name: 'RypBtn',
    props:{
      to: Object,
      color: String
    },
    methods:{
      btnClicked(){
        this.$emit('rypBtnClick')
      }
    }
  }
</script>

<style scoped>
  /*Larger Devices*/
  @media (min-width: 1300px) {
    .custom-ryp-btn{
      min-width: 164px !important;
      letter-spacing: normal;
    }
  }

  /*smaller devices*/


</style>
