<template>
    <v-btn
    class="rounded-lg text-lowercase px-5 py-6 custom-ryp-btn"
    :color="color"
    elevation="0"
    :to="to"
    >
      <slot name="btnText"></slot>
      <slot name="btnIcon"></slot>
    </v-btn>
</template>

<script>
  export default {
    name: 'RypBtn',
    props:{
      to: Object,
      color: String
    }
  }
</script>

<style scoped>
  /*Larger Devices*/
  @media (min-width: 764px) {
    .custom-ryp-btn{
      min-width: 164px !important;
    }
  }

  /*smaller devices*/


</style>
