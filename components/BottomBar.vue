<template>
    <v-row class="ryp-bb">
      <v-col
      lg="10"
      class="mx-auto"
      >
        <v-row
          :class="{'': $vuetify.breakpoint.mdAndUp, 'd-flex flex-column': $vuetify.breakpoint.smAndDown}"
        >
          <v-col
          lg="4"
          class="d-flex flex-row align-center"
          :class="{'justify-start': $vuetify.breakpoint.mdAndUp, 'justify-center': $vuetify.breakpoint.smAndDown}"
          >
              <p class="caption mb-0">Website designed & hosted by <a class="credit-link" target="_blank" href="https://hicreate.co.uk">hi.create</a></p>
          </v-col>
          <v-col
          lg="8"
          class="align-center justify-end d-flex"
          :class="{'flex-row': $vuetify.breakpoint.mdAndUp, 'flex-column': $vuetify.breakpoint.smAndDown}"
          >
              <p class="caption mb-0">Copyright © {{this.currentYear}} Rural Youth Project</p>
              <SocialIcons class="ml-lg-5" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
  import SocialIcons from './SocialIcons'

  export default {
    name: 'BottomBar',
    components:{
      SocialIcons
    },
    computed:{
      currentYear(){
        const d = new Date();
        const n = d.getFullYear();
        return n;
      }
    }
  }
</script>

<style scoped>
  .ryp-bb{
    -webkit-box-shadow: 0px -5px 9px 0px rgba(0,0,0,0.05);
    box-shadow: 0px -5px 9px 0px rgba(0,0,0,0.05);
  }

  .credit-link{
    text-decoration: none;
  }

  .credit-link:hover{
    color: #F4812E;
  }

</style>
