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
          smart village Scotland is still in
          the launch phase with full member functionality
          coming soon. In the meantime, sign up below to
          register your account for when full access goes live!
        </v-card-text>
        <v-card-actions
        class="d-flex flex-column"
        >
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
            <v-checkbox
            label="I agree for my details to be processed in accordance with the privacy policy."
            ></v-checkbox>
          </v-form>
          <div class="d-flex justify-space-around full-width">
            <RypBtn :to="{name: '#'}" color="success" >
              <template v-slot:btnText>
                <span>register account</span>
              </template>
            </RypBtn>
            <v-btn
              class="text-lowercase"
            medium
            text
            :to="{name: 'members-area'}"
            >
              or, sign in
            </v-btn>
          </div>
        </v-card-actions>
        <v-img
          class="contact-box-img"
          max-width="128px"
          src="/images/speech-bubble.png"></v-img>
      </v-card>
    </div>
</template>

<script>
  import RypBtn from './RypBtn'

    export default {
        name: "SignUpForm",
      components:{
          RypBtn
      },
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

  .contact-box-img{
    position: absolute;
    bottom: -65px;
    right: -30px;
  }

</style>
