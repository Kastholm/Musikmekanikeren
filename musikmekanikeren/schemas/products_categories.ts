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
        name: 'myImage',
        type: 'image',
        validation: Rule => Rule.required(),
        /* options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'token',
            type: 'string',
            hidden: true,
            validation: Rule => Rule.required(),
            options: {
              isHighlighted: true,
            },
          },
        ], */
      },
       {
      name: 'categories',
      type: 'array',
      title: 'Kategoriens Navn',
      of: [{ type: 'string' }],
    },
     ],
   }
