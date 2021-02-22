<template>
  <div>
<!--    Main hero component here-->
    <HeroMain hero-source="https://content.rypsv.scot/wp-content/uploads/2021/02/Rural-Youth-Ideas-Festival-004-scaled.jpg">
      <template v-slot:heroTitle>
        <h1
          class="h1 mb-2"
          :style="{color: $vuetify.theme.themes[theme].fontColor}">
          A space designed by and for Young People</h1>
      </template>
      <template v-slot:heroSub>
        <p>Sign up, create an account and join our community to connect, collaborate and discover new opportunities and resources that will help you to live and work where you want in rural Scotland.</p>
         </template>
      <template v-slot:heroBtnText>
        <span>get started</span>
      </template>
    </HeroMain>

    <Signposts />

<!--    component with image left and content right-->
    <SectionImageLeft image-source="https://content.rypsv.scot/wp-content/uploads/2021/02/revised-vectors-03.png">
      <template v-slot:sectionTitle>
        <h2
          class="h1 mb-2"
          :style="{color: $vuetify.theme.themes[theme].fontColor}"
        >Sign up for a free account to access resources and our directory</h2>
      </template>
      <template v-slot:sectionSub>
        <p class="font-weight-light">Join the RYP Smart Village for even more useful resources and access to the members directory that will help you develop your skills and find services and information that are specific to your location.</p>
      </template>
      <template v-slot:sectionCta>
        <RypBtn :to="{name: 'about'}" color="success" >
        <template v-slot:btnText>
          <span>about the project</span>
        </template>
      </RypBtn>
      </template>
    </SectionImageLeft>

<!--    Recent Posts-->
<RecentPosts />


<!--    section in a lighter frame-->
    <div :style="{background: $vuetify.theme.themes[theme].altBackground}">
      <SectionImageRightIsolated image-source="https://content.rypsv.scot/wp-content/uploads/2021/02/Slideshow-image-5-scaled.jpeg">
        <template v-slot:sectionTitle>
          <h2
            class="h1 mb-2"
            :style="{color: $vuetify.theme.themes[theme].fontColor}"
          >Need some help and inspiration?</h2>
        </template>
        <template v-slot:sectionSub>
          <p class="font-weight-light">
            Check out our rural specific resources, news and updates that will help you to gain knowledge and inspiration for your work, whether you are at an idea phase of setting up a business, developing an idea into a reality or you just want to hear what other young people in rural Scotland are up to and learn from them.
          </p>
        </template>
        <template v-slot:sectionCta>
          <DoubleButton />
        </template>
      </SectionImageRightIsolated>
    </div>

<!--    bottom section-->
    <SectionImageLeft
      image-loc="center"
      image-source="https://content.rypsv.scot/wp-content/uploads/2021/02/RYP_Revised_Visuals-08.png">
      <template v-slot:sectionTitle>
        <h2
          class="h1 mb-2"
          :style="{color: $vuetify.theme.themes[theme].fontColor}"
        >Sign up for a free account to access members only resources</h2>
      </template>
      <template v-slot:sectionSub>
        <p class="font-weight-light">Join the RYP smart village for even more useful resources that will help you to develop your skills and find services and information that are specific to you in your rural location.</p>
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
  import Signposts from '../components/Signposts'
  import RecentPosts from "~/components/RecentPosts";

export default {
  components: {
    Signposts,
    HeroMain,
    SectionImageLeft,
    RypBtn,
    SectionImageRightIsolated,
    DoubleButton,
    RecentPosts
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
