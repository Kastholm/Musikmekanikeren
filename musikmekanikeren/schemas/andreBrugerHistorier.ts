import { defineField } from "sanity";
import { UsersIcon } from '@sanity/icons'
// schemas/pet.js
export default {

  name: 'smallUserStory',
  type: 'document',
  title: 'Små Bruger Historier',
  icon: UsersIcon,
  fields: [
     defineField({
          name: 'historieTitle',
          type: 'string',
          title: 'Historiens Titel',
      validation: (Rule) => Rule.required(),
     }),
     defineField({
          name: 'historieImg',
          type: 'image',
          title: 'Historiens Billede',
          description: 'Her vedhæftes historiens billede'
     }),
     defineField({
          name: 'imgurl',
          type: 'string',
          title: 'Historie billedets url. Klik på billedets 3 prikker i højre hjørne og vælg "Copy URL". Kopier billedets url og indsæt den her.',
      validation: (Rule) => Rule.required(),
     }),
     defineField({
          name: 'historieText',
          type: 'text',
          title: 'Historie',
          description: 'Her skrives bruger historiens tekst'
     }),
  ],
}
