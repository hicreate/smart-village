<template>
  <div>
    <!--    section in a lighter frame-->
      <v-row>
        <v-col
          :class="{'rounded-lg extra-height my-2 mx-8': $vuetify.breakpoint.mdAndUp, 'px-8': $vuetify.breakpoint.smAndDown}"
          class=""
        >
          <v-row>
            <v-col
              lg="10"
              md="10"
              cols="12"
              class="mx-auto"
            >
              <v-row>
                <v-col
                  lg="5"
                  cols="12"
                  style="position: relative;"
                  class="col-cont-left"
                >
                  <h2
                    class="h1 mb-2"
                    :style="{color: $vuetify.theme.themes[theme].fontColor}"
                  >Championing Young Persons Across Scotland</h2>
                  <p class="font-weight-light">Welcome to the Rural Youth Project Smart Village, a collaborative project with The Rural Youth Project, Smart Village Scotland and most importantly young people. </p>
                  <p class="font-weight-light">Find out more about Rural Youth Project and Smart Village Scotland here:
                  </p>
                  <div class="d-flex flex-column">
                    <a target="_blank" href="https://www.ruralyouthproject.com/">Rural Youth Project</a>
                    <a target="_blank" href="https://www.smartvillage.scot/">Smart Village</a>
                  </div>
                  <div>
                    <v-row class="mt-4">
                      <v-col
                        class="secondary logo-box"
                      >
                        <div
                          :class="{'d-flex flex-row align-center': $vuetify.breakpoint.mdAndUp}"
                          class="pa-5 secondary"
                        >
                          <h3 class="white--text mr-8">Delivered by</h3>
                          <div
                            class="d-flex"
                            :class="{'flex-row': $vuetify.breakpoint.mdAndUp}"
                          >
                            <v-img
                              contain
                              class="partner-logo"
                              :class="{'my-2': $vuetify.breakpoint.smAndDown}"
                              src="/images/ryp-logo-light.png" ></v-img>
                            <v-img
                              contain
                              class="partner-logo"
                              :class="{'my-2': $vuetify.breakpoint.smAndDown}"
                              src="/images/svs.webp" ></v-img>
                          </div>

                        </div>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col
                  lg="7"
                  md="7"
                  cols="12"
                  class="d-flex align-center justify-center col-cont-right"
                  :class="{'px-10': $vuetify.breakpoint.mdAndUp, '': $vuetify.breakpoint.smAndDown}"
                >
                  <v-img
                    class="mb-5 top-image"
                    src="https://content.rypsv.scot/wp-content/uploads/2021/02/General-website-image-e1614021674365.jpg"></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

    <div
    >
      <!--    component with image left and content right-->
      <SectionImageLeft
        :class="{'pb-10': $vuetify.breakpoint.smAndDown, '': $vuetify.breakpoint.mdAndUp}"
        image-loc="bottom"
        image-source="https://content.rypsv.scot/wp-content/uploads/2021/02/revised-vectors-04-1.png">
        <template v-slot:sectionTitle>
          <h2
            class="h1 mb-2"
            :style="{color: $vuetify.theme.themes[theme].fontColor}"
          >Representing Rural Scotland</h2>
          <h3 class="font-weight-light">
            This Platform has been developed with the input, research and feedback of young people at its core.  It’s main aims are to:
          </h3>
          <ul>
            <li>Provide an online space for young people in rural Scotland to connect, collaborate and learn</li>
            <li>Promote and showcase opportunities for young people within rural Scotland</li>
            <li>Highlight and develop the unique skills and experience of young people in rural Scotland</li>
          </ul>
        </template>
      </SectionImageLeft>
    </div>

    <div
      :style="{background: $vuetify.theme.themes[theme].brandPrimary}"
    >
      <v-row>
        <v-col
        lg="10"
        class="mx-auto pt-0"
        >
          <Testimonial :testimonials="testimonials" />
        </v-col>
      </v-row>
    </div>

    <div
      :class="{'pt-5': $vuetify.breakpoint.smAndDown, 'pt-10': $vuetify.breakpoint.mdAndUp}"
    >
      <SectionImageRight image-source="https://content.rypsv.scot/wp-content/uploads/2021/02/revised-vectors-06.png">
        <template v-slot:sectionTitle>
          <h2
            class="mb-2"
            :style="{color: $vuetify.theme.themes[theme].fontColor}"
          >How did the Rural Youth Project Smart Village come about ?</h2>
        </template>
        <template v-slot:sectionSub>
          <p class="font-weight-light">Two words, Corona Virus. Whilst many of us have seen projects and opportunities ground to a halt this new platform has been brought to life. </p>
          <p class="font-weight-light">Prior to 2020 the Rural Youth Project, (Funded by the LEADER Programme 2014 – 2020: The European Agricultural Fund for Rural Development: Europe investing in rural areas) ran an incredible and unique Ideas Festival, alongside workshops and other engaging activities for young people. With these initiatives put on hold they turned their heads to another concept that could still benefit young people throughout Scotland during the pandemic.</p>
        </template>
      </SectionImageRight>
    </div>

    <div
      :class="{'py-5': $vuetify.breakpoint.smAndDown, 'py-5': $vuetify.breakpoint.mdAndUp}"
    >
      <SectionImageLeft image-source="https://content.rypsv.scot/wp-content/uploads/2021/02/Coralbox-gift-shop-2020-scaled.jpg">
        <template v-slot:sectionSub>
          <p class="font-weight-light">This Concept, coincidentally like the funding also ended up coming from Europe. Smart Villages are a concept that aim to make an economic and social impact by supporting enterprises and connected communities. They are a catalyst to creating a legacy of sustainable, empowered and connected rural economies and communities. The community in this case is young people in rural Scotland.</p>
          <p class="font-weight-light">The Rural Youth Project Smart Village journey properly kicked off when we recruited 11 volunteer digital Champions from all over Scotland. You can meet and find out more about them here (link to DC page), Put simply Digital Champions are ambassadors for the Platform that help to bridge the gap between their communities and the online platform. They have all played an integral part in designing the platform and making sure the content is current and relevant to other young people throughout Scotland.</p>
          <div class="py-3"><v-divider></v-divider></div>
          <h4 class="font-weight-bold">Get started today by signing up top become a member <a href="/members-area">here</a></h4>
        </template>
      </SectionImageLeft>
    </div>
  </div>
</template>

<script>
  import SectionImageLeft from '~/components/SectionImageLeft'
  import Testimonial from '../../components/Testimonial'
  import {mapState} from 'vuex'

  export default {
    name: 'about',
    components:{
      SectionImageLeft,
      Testimonial
    },
    computed:{
      theme () {
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      },
      ...mapState({
        testimonials: state => state.testimonials.testimonials
      })
    },
    async fetch ({store, error}) {
      try{
        await store.dispatch('testimonials/fetchTestimonials')

      } catch(e){
        error({
          statusCode: 503,
          message: 'Unable to fetch Testimonial data at this time'
        })
      }
    },
  }
</script>

<style scoped>
.top-image{
  height: 400px;
  width: 100%;
  object-fit: contain;
  border-radius: 20px;
}

  .extra-height{
    padding-top: 4%;
  }

  @media(max-width: 764px){
       .mobile-hide{
      display: none !important;
    }

    .mobile-image{
      max-width: 80vw !important;
    }

    .col-cont-left{
      order:2;
    }

    .col-cont-right{
      order:1;
    }
  }

@media(min-width: 764px){
  .top-image{
    box-shadow: 26px 25px 0px 12px rgba(67,147,195,1);
    -webkit-box-shadow: 26px 25px 0px 12px rgba(67,147,195,1);
    -moz-box-shadow: 26px 25px 0px 12px rgba(67,147,195,1);
  }
}

  .logo-box{
    border-radius: 15px;
  }

.partner-logo{
  max-width: 124px;
}


</style>
