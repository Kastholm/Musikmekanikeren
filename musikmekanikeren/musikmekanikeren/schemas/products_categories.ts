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
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'token',
            type: 'string',
            hidden: true,
            
            options: {
              isHighlighted: true,
            },
          },
          {
            // Editing this field will be hidden behind an "Edit"-button
            name: 'link',
            type: 'string',
            title: 'Billede Link',
            description: 'Sæt billedets link her',
            validation: Rule => Rule.required(),
          }
        ],
      },
       {
      name: 'categories',
      type: 'array',
      title: 'Kategoriens Navn',
      of: [{ type: 'string' }],
    },
     ],
   }
