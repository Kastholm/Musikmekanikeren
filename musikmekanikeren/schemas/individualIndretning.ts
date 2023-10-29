//Schema for produkter i shoppen
import { FiTag } from 'react-icons/fi'

export default {
     name: 'individual',
     title: 'Individuel Indretning',
     type: 'document',
     icon: FiTag,
     fields: [
          {
               name: 'title',
               type: 'string',
               title: 'Overskrift',
          },
          {
               name: 'Image',
               type: 'image',
               title: 'Før billede',
               validation: (Rule) => Rule.required(),
          },
          {
               name: 'imgurl',
               type: 'string',
               title:
                    'Før billedets url. Klik på billedets 3 prikker i højre hjørne og vælg "Copy URL". Kopier billedets url og indsæt den her.',
               validation: (Rule) => Rule.required(),
          },
          {
               name: 'content',
               type: 'array',
               title: 'Content',
               of: [
                    {
                         type: 'block'
                    },
               ],
               validation: (Rule) => Rule.required(),
          }
     ],
}