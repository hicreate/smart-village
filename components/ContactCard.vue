<template>
    <div>
      <v-card
        dark
      color="success"
      max-width="380px"
      elevation="0"
        class="pb-10"
        style="position: relative;"
      >
        <v-card-title
        class="pb-0"
        >
          Contact Us
        </v-card-title>
        <v-card-text>
          Contact us today on any of the details below.
        </v-card-text>
        <v-card-actions>
          <v-list
            color="rgba(255, 0, 0, 0)"
          >
            <v-list-item
              v-for="(contact, i) in contactDetails"
              :key="i"
              link
              :href="contact.link"
            >
              <v-list-item-icon>
                <v-icon v-text="contact.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle v-text="contact.title"></v-list-item-subtitle>
                <v-list-item-title v-text="contact.detail"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-actions>
        <v-img
          class="contact-box-img"
          src="/images/ryp3.png"></v-img>
      </v-card>
    </div>
</template>

<script>
  export default {
    name: 'ContactCard',
    data(){
      return{
        contactDetails:[
          {
            title: 'phone',
            icon: 'mdi-cellphone-iphone',
            detail: '01234 56789',
            link: '#'
          },
          {
            title: 'email',
            icon: 'mdi-email-edit-outline',
            detail: 'info@ryp.scot',
            link: '#'
          },
          {
            title: 'post',
            icon: 'mdi-mailbox-open-up-outline',
            detail: 'Full Address Goes Here, Postcode',
            link: '#'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.contact-box-img{
  max-width: 128px;
  position: absolute !important;
  bottom: -50px;
  right: -30px;
}

  .contact-box-img img{

  }
</style>
