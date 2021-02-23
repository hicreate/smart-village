<template>
  <div>
    <v-card
      dark
      elevation="0"
      class="mx-auto rounded pa-md-5 pa-sm-5"
      :color=$vuetify.theme.themes[theme].secondary
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
          ref="signupform"
        >

          <!--            name field-->
          <v-text-field
            dense
            solo
            elevation="0"
            light
            label="first name"
            full-width
            :rules="[rules.required]"
            v-model="signUp.firstName"
          >
          </v-text-field>

          <!--           last name field-->
          <v-text-field
            dense
            solo
            elevation="0"
            light
            label="last name"
            full-width
            :rules="[rules.required]"
            v-model="signUp.lastName"
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
            :rules="[rules.required, rules.email]"
            v-model="signUp.email"
          >
          </v-text-field>

          <!--            email confirm-->
          <v-text-field
            dense
            solo
            elevation="0"
            light
            label="confirm your email"
            full-width
            :rules="[rules.required, rules.email, rules.sameEmail]"
          >
          </v-text-field>

          <!--            date of birth field-->
          <v-select
            label="your age range"
            light
            v-model="signUp.age"
            solo
            :items="ageRanges"
            :rules="[rules.required]"
          >
          </v-select>
          <v-checkbox
            :rules="[rules.required]"
            label="I agree for my details to be processed in accordance with the privacy policy."
          ></v-checkbox>
        </v-form>
        <div
          class="d-flex justify-content-start full-width"
          :class="{'flex-column': $vuetify.breakpoint.smAndDown, 'flex-row': $vuetify.breakpoint.mdAndUp}"
        >
          <!--          <RypBtn :to="{name: '#'}" color="success" >-->
          <!--            <template v-slot:btnText>-->
          <!--              <span>register account</span>-->
          <!--            </template>-->
          <!--          </RypBtn>-->
          <v-btn
            large
            color="success"
            type="submit"
            :loading="loading"
            @click="handleSubmit"
          >
            register account
          </v-btn>
          <v-snackbar
            dark
            color="secondary"
            v-model="success"
            :multi-line= true
          >
            {{message}}
            <template v-slot:action="{ attrs }">
              <v-btn
                color="red"
                text
                v-bind="attrs"
                @click="success = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
          <!--          <v-btn-->
          <!--            class="text-lowercase"-->
          <!--            medium-->
          <!--            text-->
          <!--            :to="{name: 'members-area'}"-->
          <!--          >-->
          <!--            or, sign in-->
          <!--          </v-btn>-->
        </div>
      </v-card-actions>
      <v-img
        class="contact-box-img"
        max-width="112px"
        src="/images/revised-comment.png"></v-img>
    </v-card>
  </div>
</template>

<script>
import WPServices from "~/Services/WPServices";

export default {
  name: "SignUpForm",
  components:{

  },
  data(){
    return{
      success: false,
      loading: false,
      message: '',
      ageRanges:[
        {
          text:'16 - 18',
          value: '16 - 18'
        },
        {
          text:'19 - 24',
          value: '19 - 24'
        },
        {
          text:'25 - 30',
          value: '25 - 30'
        },
        {
          text:'31 - 35',
          value: '31 - 35'
        },
        {
          text:'35+',
          value: '35+'
        },
      ],
      signUp: {
        firstName: '',
        lastName: '',
        email: '',
        age: '',
      },
      rules: {
        required: value => !!value || 'This field is required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        maxLength: value => value.length < 255 || '255 characters max',
        sameEmail: value => value === this.signUp.email || 'Email addresses do not match.'
      },
    }
  },
  methods:{
    handleSubmit() {
      //check that the form passess all validation checks, then submit
      if(this.$refs.signupform.validate()){
        console.log('pressed');
        this.loading = true;
        this.sendEnquiry();
      }
    },
    sendEnquiry(){
      const self = this;
      self.message = '';
      let user = {};
      user.first_name = this.signUp.firstName;
      user.last_name = this.signUp.lastName;
      user.email = this.signUp.email;
      user.password = this.generatePassword;
      user.username = this.signUp.firstName + this.signUp.lastName;
      user.age_range = this.signUp.age;

      console.log(user);
      WPServices.createUser(user)
        .then(response =>{
          if(response.data.code === 200){
            self.message = "Success, you're details have been submitted. Thanks!";
            self.loading = false;
            self.success = true;
            console.log(response);
          }
        }).catch((error) => {
        console.log('[error]', error.response)
        self.message = "Sorry, " + error.response.data.message;
        self.loading = false;
        self.success = true;
      });
    }
  },
  computed:{
    borderColor(){
      return (this.$vuetify.theme.dark) ? 'ryp-border-white' : 'ryp-border-accent'
    },
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
    generatePassword(){
      let length = 12;
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;

    }
  }
}
</script>

<style scoped>
.ryp-border-white{
  border: 2px solid !important;
}

.ryp-border-accent{
  border: 2px solid #FF7214 !important;
}

.full-width{
  width: 100% !important;
}

.contact-box-img{
  position: absolute;
  bottom: -70px;
  right: -41px;
}

</style>
