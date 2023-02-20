import {defineCliConfig} from 'sanity/cli'

/* require('dotenv').config()

const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset',
  token: process.env.SANITY_API_TOKEN,
  useCdn: true,
}) */

export default defineCliConfig({
  api: {
    projectId: '1f5ltia2',
    dataset: 'production'
  }
})
