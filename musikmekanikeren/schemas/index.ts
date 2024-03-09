// schemas/index.js

import testimonials from './testimonials'
import testimonials_skoleservice from './testimonials-skoleservice'
/* import products from './productsold' */
import category from './products_categories'
import strenge from './service_instrumenter/strenge'
import trommer from './service_instrumenter/trommer'
import klaver from './service_instrumenter/klaver'
import PA from './service_instrumenter/PA'
import bigUserStory from './fremhævedeBruger'
import smallUserStory from './andreBrugerHistorier'
import beforeAfter from './beforeAfter'
import individualIndretning from './individualIndretning'
import keypoints from './keypoints'
import shop from './shop'
import shopCategories from './shop/shopCategories'
import products from './shop/products'
export const schemaTypes = [testimonials, testimonials_skoleservice, strenge, trommer, klaver, PA, bigUserStory, smallUserStory, beforeAfter, individualIndretning, keypoints, shop, shopCategories, products]

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
