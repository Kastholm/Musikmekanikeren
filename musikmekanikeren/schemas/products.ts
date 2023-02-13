import { defineField } from "sanity";
import { UsersIcon } from '@sanity/icons'
// schemas/pet.js
export default {

  name: 'products',
  type: 'document',
  icon: UsersIcon,
  title: 'Produkter',
  fields: [
     defineField({
          name: 'productName',
          type: 'string',
          title: 'Produktets Navn',
          description: 'Her skrives navnet på produktet'
     }),
     defineField({
          name: 'productImg',
          type: 'image',
          title: 'Produktets Billede',
          description: 'Her vedhæftes produktets billede'
     }),
     defineField({
          name: "categories",
          type: "array",
          title: "Kategorier",
          description: 'Her tilvælges kategorier til produktet',
          of: [
            {
              type: "string",
              options: {
                list: [
                  { title: "Strenge", value: "Strenge" },
                  { title: "Plejemidler & Tilbehør", value: "PlejemidlerAndTilbehør" },
                  { title: "Potentiometre", value: "Potentiometre" },
                  { title: "Elektronik", value: "elektronics" },
                  { title: "Hardware", value: "Hardware" },
                  { title: "Knobs", value: "Knobs" },
                  { title: "Brugte instrumenter", value: "usedEquipment" },
                  { title: "Diverse", value: "other" },
                  { title: "Mastery Hardware", value: "masteryHardware" },
                ],
                layout: "dropdown"
              }
            }
          ]
     }),
     defineField({
          name: 'beskrivelse',
          type: 'text',
          title: 'Produktets Beskrivelse',
          description: 'Her skrives beskrivelsen af produktet'
     }),
  ],
}
