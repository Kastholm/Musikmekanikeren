export default {
     name: 'category',
     type: 'document',
     title: 'Category',
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