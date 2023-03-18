//Schema for produkter i shoppen
import {FiTag} from 'react-icons/fi'

export default {
  name: 'products',
  title: 'Produkter',
  type: 'document',
  icon: FiTag,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Produkt Navn',
    },
    {
      name: 'myImage',
      type: 'image',
      title: 'Produkt Billede',
      validation: (Rule) => Rule.required(),
    },
    {
      //Refererer til Kategorier
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      title: 'Shop Kategori',
      validation: (Rule) => Rule.required(),
    },    
    {
      name: 'subcategory',
      type: 'reference',
      title: 'Subcategory',
      to: [{ type: 'category' }],
      options: {
        filter: ({ document }) => {
          const categoryId = document?.category.categories?._ref;
          if (!categoryId) {
            return false;
          }
          return {
            filter: '_type == "category" && category.categories == $categoryId',
            params: { categoryId },
          };
        },
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Pris',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
      validation: (Rule) => Rule.required(),
    },
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
