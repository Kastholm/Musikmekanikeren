// schemas/pet.js
export default {
     name: 'category',
     type: 'document',
     title: 'Butik Kategorier',
     fields: [
       {
         name: 'title',
         type: 'string',
         title: 'Kategoriens Navn',
       },
       {
      name: 'categories',
      type: 'array',
      title: 'Kategoriens Navn',
      of: [{ type: 'string' }],
    },
     ],
   }
