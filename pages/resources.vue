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
          md="10"
          cols="12"
          class="mx-auto"
          >
            <v-row
            class="d-flex"
            >
              <v-col
                lg="5"
                md="5"
                cols="12"
                class="ryp-col-left"
                :class="{'mt-10': $vuetify.breakpoint.smAndDown}"
              >
                <nuxt-img
                  class="cogs"
                  src="/images/cogs.png"></nuxt-img>
                <h2
                  class="h1 mb-2"
                  :style="{color: $vuetify.theme.themes[theme].fontColor}"
                >Business changing resources</h2>
                <h3 class="font-weight-light">Sign up, create an account and start to realise you’re businesses full potential alongside like-minded young business owners across Scotland. The full members area is going to launch soon, but signup today to have your account registered in advance and to be ready when full access goes live.</h3>
                <div class="pa-5">
                  <ul>
                    <li>signup using the adjacent form</li>
                    <li>your registration will be received and reviewed</li>
                    <li>if approved, we'll send you details to access your account</li>
                  </ul>
                </div>

                <div
                  class="mt-4 d-flex"
                  :class="{'text-center flex-column': $vuetify.breakpoint.smAndDown}"
                >
                  <RypBtn
                    :class="{'mb-5': $vuetify.breakpoint.smAndDown, 'mr-5': $vuetify.breakpoint.mdAndUp}"
                    :to="{name: 'resources'}" color="info">
                    <template v-slot:btnText>
                      <span>FREE resources</span>
                    </template>
                    <template v-slot:btnIcon>
                      mdi-file-document
                    </template>
                  </RypBtn>
                  <RypBtn class="mr-md-5" :to="{name: 'members-area'}" color="accent">
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
                md="7"
                cols="12"
                class="ryp-col-right"
              >
                <SignUpForm />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
          </v-col>
        </v-row>
  </div>

  <div
  class="pb-10"
  >
    <!--    component with image left and content right-->
    <SectionImageLeft image-loc="left" image-source="/images/resources.png">
      <template v-slot:sectionTitle>
        <h2
          class="h1 mb-2 overtop"
          :style="{color: $vuetify.theme.themes[theme].fontColor}"
        >Free resources</h2>
        <h3 class="font-weight-light overtop">
          Sign up, create an account and start to realise
          you’re businesses full potential alongside
          likeminded young business owners across
          Scotland.
        </h3>
      </template>
      <template v-slot:sectionSub>
        <p class="font-weight-light overtop">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
      </template>
      <template v-slot:sectionCta>
        <h4 class="font-weight-bold">sign in to access additional members-only resources, sign in <a href="/members-area">here</a></h4>
      </template>
      <template v-slot:addImage>
<!--        <v-img class="ryp-over-image" max-width="500px" src="/images/iconsFly2.png"></v-img>-->
      </template>
    </SectionImageLeft>
  </div>

  <div>
    <FreeResourcesTiles />
  </div>

  <div class="py-15">
    <SectionImageRight image-loc="right" image-source="/images/header-hero-05-min.png">
      <template v-slot:sectionTitle>
        <h1
          class="h1 mb-2"
          :style="{color: $vuetify.theme.themes[theme].fontColor}"
        >Like what you see? Become a member for FREE today</h1>
      </template>
      <template v-slot:sectionSub>
        <p class="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </template>
      <template v-slot:sectionCta>
        <RypBtn :to="{name: 'sign-up'}" color="success" >
          <template v-slot:btnText>
            <span>sign up</span>
          </template>
        </RypBtn>
      </template>
    </SectionImageRight>
  </div>

</div>
</template>

<script>
  import SignUpForm from "~/components/SignUpForm"
  import RypBtn from "~/components/RypBtn"
  import SectionImageLeft from '../components/SectionImageLeft'
  import FreeResourcesTiles from '../components/FreeResourcesTiles'

  export default {
    name: 'resources',
    components:{
      SignUpForm,
      RypBtn,
      SectionImageLeft,
      FreeResourcesTiles
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
      size(){
        let isMobile;
        if(this.$vuetify.breakpoint.smAndDown){
          isMobile = true;
        } else {
          isMobile = false;
        }
        return isMobile;
      }
    }
  }
</script>

<style scoped>
  .extra-height{
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .ryp-over-image{
    position: absolute;
    z-index: 1;
    right: -200px;
    top: -100px;
  }

  .overtop{
    z-index: 2 !important;
  }

  @media(max-width:764px){
    .ryp-col-left{
      order: 2;
    }

    .ryp-col-right{
      order: 1;
    }
  }

  .cogs{
    width: 240px;
  }
</style>
