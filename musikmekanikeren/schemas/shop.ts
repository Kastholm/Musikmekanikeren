import { FiTag } from 'react-icons/fi'
export default {
     name: 'shop',
     title: 'Shop kategorier',
     type: 'document',
     icon: FiTag,
     fields: [
          {
               name: 'title',
               title: 'Title',
               type: 'string',
               description: 'Navnet på kategorien'
          },
          {
               name: 'slug',
               title: 'Slug',
               type: 'slug',
               description: 'Dette er den unikke URL til kategorien',
               options: {
                    source: 'title',
                    maxLength: 96
               }
          },
          {
               name: 'Image',
               type: 'image',
               title: 'Shop billede',
               validation: (Rule) => Rule.required(),
          },
          {
               name: 'imgurl',
               type: 'string',
               title:
                    'Billedets url. Klik på billedets 3 prikker i højre hjørne og vælg "Copy URL". Kopier billedets url og indsæt den her.',
               validation: (Rule) => Rule.required(),
          },
          {
               name: 'sections',
               title: 'Underkategorier',
               description: 'Klik på en underkategori for at redigere i dens informationer. Klik på "New" for at oprette en ny underkategori.',
               type: 'array',
               of: [{ type: 'shopCategory' }] 
             }
     ],
};