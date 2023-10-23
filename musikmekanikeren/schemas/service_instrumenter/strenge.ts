//Schema for produkter i shoppen
import {FiTag} from 'react-icons/fi'

export default {
  name: 'strenge',
  title: 'Strenge Service',
  type: 'document',
  icon: FiTag,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Strenge kategori navn',
    },
    {
      name: 'myImage',
      type: 'image',
      title: 'Strenge kategori billede',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imgurl',
      type: 'string',
      title:
        'Strenge billedets url. Klik på billedets 3 prikker i højre hjørne og vælg "Copy URL". Kopier billedets url og indsæt den her.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        }
      ],
      validation: (Rule) => Rule.required(),
    }
  ],
}
// Customise the preview so parents are visualised in the studio
/*   preview: {
  select: {
    title: 'title',
    subtitle: 'parent.title',
  },
  prepare: ({title, subtitle}) => ({
    title,
    subtitle: subtitle ? `– ${subtitle}` : ``,
  }),
}, */
/*  {
   name: 'parent',
   type: 'reference',
   to: [{type: 'category'}],
   // This ensures we cannot select other "children"
   options: {
     filter: '!defined(parent)',
   },
 }, */
