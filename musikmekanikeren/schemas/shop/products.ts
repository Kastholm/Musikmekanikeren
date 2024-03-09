// menuItem.js
export default {
     name: 'products',
     title: 'Produkt',
     type: 'object',
     fields: [
          {
               name: 'ptitle',
               title: 'Titel',
               type: 'string'
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
               name: 'description',
               title: 'Beskrivelse',
               type: 'text'
          },
          {
               name: 'price',
               title: 'Pris',
               type: 'number'
          },
     ]
};
