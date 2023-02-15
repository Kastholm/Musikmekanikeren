import {FiTag} from 'react-icons/fi'

export default {
  name: 'products',
  title: 'Produkter',
  type: 'document',
  icon: FiTag,
  fields: [
    {
      name: 'title', 
      type: 'string'
    },
    {
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      title: 'Category',
    },
    {
      name: 'categories',
      title: 'Subcategory',
      type: 'reference',
      to: [{ type: 'category' }],
      options: {
        filter: 'category.categories == $categoryCategories',
  filterParams: { categoryCategories: 'category.categories' }
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
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