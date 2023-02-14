// schemas/pet.js
export default {
     name: 'category',
     type: 'document',
     title: 'Butik Kategorier',
     fields: [
       {
         name: 'title',
         type: 'string',
         title: 'Title',
       },
       {
         name: 'subcategories',
         type: 'array',
         of: [{ type: 'reference', to: [{ type: 'category' }] }],
       },
     ],
   }
