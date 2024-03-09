import { FiTag } from 'react-icons/fi'
export default {
     name: 'shopCategory',
     title: 'Shop kategorier',
     type: 'document',
     icon: FiTag,
     fields: [
          {
               name: 'shoptitle',
               title: 'Titel',
               type: 'string',
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
               name: 'productCategory',
               title: 'Produkter i kategorien',
               description: 'Klik på en underkategori for at redigere i dens informationer. Klik på "New" for at oprette en ny underkategori.',
               type: 'array',
               of: [{ type: 'products' }]
          }
     ],
};