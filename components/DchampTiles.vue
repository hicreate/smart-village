<template>
  <div>
        <v-row>
          <v-col
          v-for="(champ, i) in champs"
          :key="i"
          lg="4"
          >
           <DChamp :champ="champ"></DChamp>
          </v-col>
        </v-row>
  </div>

</template>

<script>
  import DChamp from './DChamp'

  export default {
    name: 'DchampTiles',
    components:{
      DChamp
    },
    data(){
      return{
        champs:[
          {
            name: 'Example Name',
            regions: 'Perthshire',
            quote: '"Example quote, just an idea but can be a chance to personalise the champions?"',
            background: 'A short few sentences summarising their business/tech background and they arrived at being a DC.',
            twitter: '#',
            facebook: '#',
            email: '#',
            linkedin: '#',
            instagram: '#',
            avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
          },
          {
            name: 'Example Name',
            regions: 'Perthshire',
            quote: '"Example quote, just an idea but can be a chance to personalise the champions?"',
            background: 'A short few sentences summarising their business/tech background and they arrived at being a DC.',
            twitter: '#',
            facebook: '#',
            email: '#',
            instagram: '#',
            linkedin: '#',
            avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
          },
          {
            name: 'Example Name',
            regions: 'Perthshire',
            quote: '"Example quote, just an idea but can be a chance to personalise the champions?"',
            background: 'A short few sentences summarising their business/tech background and they arrived at being a DC.',
            twitter: '#',
            facebook: '#',
            email: '#',
            instagram: '#',
            linkedin: '#',
            avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
          },
          {
            name: 'Example Name',
            regions: 'Perthshire',
            quote: '"Example quote, just an idea but can be a chance to personalise the champions?"',
            background: 'A short few sentences summarising their business/tech background and they arrived at being a DC.',
            twitter: '#',
            facebook: '#',
            email: '#',
            instagram: '#',
            linkedin: '#',
            avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
          },
          {
            name: 'Example Name',
            regions: 'Perthsire',
            quote: '"Example quote, just an idea but can be a chance to personalise the champions?"',
            background: 'A short few sentences summarising their business/tech background and they arrived at being a DC.',
            twitter: '#',
            facebook: '#',
            email: '#',
            instagram: '#',
            linkedin: '#',
            avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
          },
          {
            name: 'Example Name',
            regions: 'Perthsire',
            quote: '"Example quote, just an idea but can be a chance to personalise the champions?"',
            background: 'A short few sentences summarising their business/tech background and they arrived at being a DC.',
            twitter: '#',
            facebook: '#',
            email: '#',
            instagram: '#',
            linkedin: '#',
            avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
