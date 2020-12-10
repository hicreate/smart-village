<template>
    <div>
      <v-card
      elevation="0"
      class="pa-10 mx-auto rounded-xl"
      :class="borderColor"
      :color=$vuetify.theme.themes[theme].altBackground
      max-width="500px"
      >
        <v-card-title class="pb-1">
          create a FREE account
        </v-card-title>
        <v-card-text>
          create a free Smart Village accounttoday to access
          members only resources and to leverage the full benefits
          available from the Smart Village platform.
        </v-card-text>
        <v-card-actions>
          <v-form
          class="full-width"
          >

<!--            name field-->
            <v-text-field
              dense
            solo
            elevation="0"
            light
            label="your name"
            full-width
            >
            </v-text-field>

            <!--            email field-->
            <v-text-field
              dense
              solo
              elevation="0"
              light
              label="your email"
              full-width
            >
            </v-text-field>

            <!--            business name field-->
            <v-text-field
              dense
              solo
              elevation="0"
              light
              label="your business name"
              full-width
            >
            </v-text-field>

            <!--            date of birth field-->
            <v-text-field
              dense
              solo
              elevation="0"
              light
              label="your business name"
              full-width
            >
            </v-text-field>
          </v-form>
        </v-card-actions>
      </v-card>
    </div>
</template>

<script>
    export default {
        name: "SignUpForm",
      data(){
          return{

          }
      },
      computed:{
        borderColor(){
          return (this.$vuetify.theme.dark) ? 'ryp-border-white' : 'ryp-border-accent'
        },
        theme () {
          return (this.$vuetify.theme.dark) ? 'dark' : 'light'
        }
      }
    }
</script>

<style scoped>
  .ryp-border-white{
    border: 2px solid !important;
  }

  .ryp-border-accent{
    border: 2px solid #1179F5 !important;
  }

  .full-width{
    width: 100% !important;
  }

</style>
