import { defineField } from "sanity";
import { UsersIcon } from '@sanity/icons'
// schemas/pet.js
export default {

  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  icon: UsersIcon,
  fields: [
     defineField({
          name: 'navn',
          type: 'string',
          title: 'Navn',
          description: 'Her skrives anmelders navn'
     }),
     defineField({
          name: 'by',
          type: 'string',
          title: 'Anmelders By',
          description: 'Her skrives anmelders by'
     }),
     defineField({
          name: 'anmeldelse',
          type: 'text',
          title: 'Anmeldelse',
          description: 'Her skrives selve anmeldelsen'
     }),
  ],
}
