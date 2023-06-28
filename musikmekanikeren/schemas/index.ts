// schemas/index.js

import testimonials from './testimonials'
import testimonials_skoleservice from './testimonials-skoleservice'
/* import products from './productsold' */
import products from './products'
import category from './products_categories'
import strenge from './service_instrumenter/strenge'
import trommer from './service_instrumenter/trommer'
import klaver from './service_instrumenter/klaver'
import PA from './service_instrumenter/PA'
export const schemaTypes = [testimonials, testimonials_skoleservice, strenge, trommer, klaver, PA, category, products]

/* import T from '@sanity/base/initial-value-template-builder'

export default [
  T.template({
    id: 'category-child',
    title: 'Category: Child',
    schemaType: 'category',
    parameters: [{name: `parentId`, title: `Parent ID`, type: `string`}],
    // This value will be passed-in from desk structure
    value: ({parentId}) => ({
      parent: {_type: 'reference', _ref: parentId},
    }),
  }),
  // Insert all your other Templates
  ...T.defaults(),
] */
