import {defineField} from 'sanity'
import {UsersIcon} from '@sanity/icons'

const section = {
  name: 'section',
  type: 'object',
  title: 'Sektion',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Sektions Titel',
    },
    {
      name: 'sectionImg',
      type: 'image',
      title: 'Sektions Billede',
      description: 'Her vedhæftes sektionens billede',
    },
  ],
}

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
      description: 'Her vedhæftes historiens billede',
    }),
    defineField({
      name: 'imgurl',
      type: 'string',
      title:
        'Historie billedets url. Klik på billedets 3 prikker i højre hjørne og vælg "Copy URL". Kopier billedets url og indsæt den her.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'historieResume',
      type: 'text',
      title: 'Resume',
      description: 'Her skrives et kort resume/teaser som står under billedet på /projekter hjemmesiden',
    }),
    defineField({
      name: 'historieText',
      type: 'text',
      title: 'Historie',
      description: 'Her skrives den lange tekst, der vil fremgå på det individuelle projekts side',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      title: 'Sektioner',
      description: 'Tilføj en eller flere sektioner her',
      of: [
        {
          name: 'section',
          type: 'object',
          title: 'Sektion',
          fields: [
            {
              name: 'sectionTitle',
              type: 'string',
              title: 'Sektions Titel',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              type: 'array',
              title: 'Content',
              of: [
                {
                  type: 'block',
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'sectionImg',
              type: 'image',
              title: 'Sektions Billede',
              description: 'Her vedhæftes sektionens billede',
            },
            {
               name: 'imgurl',
               type: 'string',
               title:
                 'Billedets url. Klik på billedets 3 prikker i højre hjørne og vælg "Copy URL". Kopier billedets url og indsæt den her.',
               validation: (Rule) => Rule.required(),
             },
          ],
        },
      ],
    }),
  ],
}
