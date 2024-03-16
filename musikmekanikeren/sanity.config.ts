import {theme} from 'https://themer.sanity.build/api/hues?default=faf9f7;darkest:222222&primary=14ad66;darkest:25292d&transparent=020c1d;darkest:ffffff&positive=darkest:01080e&lightest=faf9f7'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import imageUrlBuilder from '@sanity/image-url'


export default defineConfig({
  theme,
  name: 'default',  
  title: 'Musikmekanikeren',

  projectId: '1f5ltia2',
  dataset: 'production',

  plugins: [deskTool(), media(), visionTool()],

  schema: {
    types: schemaTypes,
  },
 

})

