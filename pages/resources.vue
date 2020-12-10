<template>
<div>
  <!--    section in a lighter frame-->
  <div :style="{background: $vuetify.theme.themes[theme].altBackground}">
    <v-row>
      <v-col
      class="rounded-lg extra-height my-5 mx-8"
      :style="{background: $vuetify.theme.themes[theme].sectionBG}"
      >
        <v-row>
          <v-col
          lg="10"
          class="mx-auto"
          >
            <v-row>
              <v-col
                lg="5"
              >
                <v-img max-width="240px" src="/images/cogs.png"></v-img>
                <h2
                  class="h1 mb-2"
                  :style="{color: $vuetify.theme.themes[theme].fontColor}"
                >Business changing resources</h2>
                <h3 class="font-weight-light">Sign up, create an account and start to realise you’re businesses full potential alongside likeminded young business owners across Scotland.</h3>
                <div class="mt-10">
                  <RypBtn class="mr-5" :to="{name: 'resources'}" color="info">
                    <template v-slot:btnText>
                      <span>FREE resources</span>
                    </template>
                    <template v-slot:btnIcon>
                      mdi-file-document
                    </template>
                  </RypBtn>
                  <RypBtn class="mr-5" :to="{name: 'members-area'}" color="accent">
                    <template v-slot:btnText>
                      <span>members area</span>
                    </template>
                    <template v-slot:btnIcon>
                      mdi-account-group
                    </template>
                  </RypBtn>
                </div>
              </v-col>
              <v-col
                lg="7"
              >
                <SignUpForm />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
          </v-col>
        </v-row>
  </div>
</div>
</template>

<script>
  import SignUpForm from "~/components/SignUpForm"
  import RypBtn from "~/components/RypBtn";

  export default {
    name: 'resources',
    components:{
      SignUpForm,
      RypBtn
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    }
  }
</script>

<style scoped>
  .extra-height{
    padding-top: 10%;
    padding-bottom: 10%;
  }
</style>
