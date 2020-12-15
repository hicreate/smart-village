<template>
  <div>
<!--    Main hero component here-->
    <HeroMain hero-source="/images/header-hero-05-min.png">
      <template v-slot:heroTitle>
        <h1
          class="h1 mb-2"
          :style="{color: $vuetify.theme.themes[theme].fontColor}">
        A community designed to enhance business growth</h1>
      </template>
      <template v-slot:heroSub>
        <p>Sign up, create an account and start to realise your businesses full potential alongside likeminded young business owners across Scotland</p>
         </template>
      <template v-slot:heroBtnText>
        <span>get started</span>
      </template>
    </HeroMain>

<!--    component with image left and content right-->
    <SectionImageLeft image-loc="bottom" image-source="/images/section-webready.png">
      <template v-slot:sectionTitle>
        <h2
          class="h1 mb-2"
          :style="{color: $vuetify.theme.themes[theme].fontColor}"
        >Working together in the same space to share experiences, resources & collective benefits</h2>
      </template>
      <template v-slot:sectionSub>
        <p class="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </template>
      <template v-slot:sectionCta>
        <RypBtn :to="{name: 'about'}" color="success" >
        <template v-slot:btnText>
          <span>about the project</span>
        </template>
      </RypBtn>
      </template>
    </SectionImageLeft>

<!--    section in a lighter frame-->
    <div :style="{background: $vuetify.theme.themes[theme].altBackground}">
      <SectionImageRightIsolated image-source="/images/comp-user.png">
        <template v-slot:sectionTitle>
          <h2
            class="h1 mb-2"
            :style="{color: $vuetify.theme.themes[theme].fontColor}"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h2>
        </template>
        <template v-slot:sectionSub>
          <p class="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </template>
        <template v-slot:sectionCta>
          <DoubleButton />
        </template>
      </SectionImageRightIsolated>
    </div>

<!--    bottom section-->
    <SectionImageLeft image-loc="center" image-source="images/ryp8-iso.png">
      <template v-slot:sectionTitle>
        <h2
          class="h1 mb-2"
          :style="{color: $vuetify.theme.themes[theme].fontColor}"
        >Sign up for a free account to access members only resources</h2>
      </template>
      <template v-slot:sectionSub>
        <p class="font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </template>
      <template v-slot:sectionCta>
        <RypBtn :to="{name: 'sign-up'}" color="success" >
          <template v-slot:btnText>
            <span>sign up</span>
          </template>
        </RypBtn>
      </template>
    </SectionImageLeft>
  </div>
</template>

<script>

  import HeroMain from '../components/HeroMain'
  import SectionImageLeft from '../components/SectionImageLeft'
  import SectionImageRightIsolated from '../components/SectionImageRightIsolated'
  import RypBtn from '../components/RypBtn'
  import DoubleButton from "~/components/DoubleButton";

export default {
  components: {
    HeroMain,
    SectionImageLeft,
    RypBtn,
    SectionImageRightIsolated,
    DoubleButton
  },
  data(){
    return{

    }
  },
  computed:{
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
}
</script>

<style>


</style>
