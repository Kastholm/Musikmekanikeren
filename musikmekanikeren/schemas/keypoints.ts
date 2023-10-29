//Schema for produkter i shoppen
import { FiTag } from 'react-icons/fi'

export default {
     name: 'keypoint',
     title: 'Skoleservice Keypoints',
     type: 'document',
     icon: FiTag,
     fields: [
          {
               name: 'title',
               type: 'string',
               title: 'Overskrift',
          },
          {
               name: 'Image',
               type: 'image',
               title: 'Før billede',
               validation: (Rule) => Rule.required(),
          },
          {
               name: 'imgurl',
               type: 'string',
               title:
                    'Billedets url. Klik på billedets 3 prikker i højre hjørne og vælg "Copy URL". Kopier billedets url og indsæt den her.',
               validation: (Rule) => Rule.required(),
          },
          {
               name: 'content',
               type: 'array',
               title: 'Content',
               of: [
                    {
                         type: 'block'
                    },
               ],
               validation: (Rule) => Rule.required(),
          },
          {
               name: 'title1',
               type: 'string',
               title: 'Keypoint1',
          },
          {
               name: 'title2',
               type: 'string',
               title: 'Keypoint2',
          },
          {
               name: 'title3',
               type: 'string',
               title: 'Keypoint3',
          },
          {
               name: 'title4',
               type: 'string',
               title: 'Keypoint4',
          },
          {
               name: 'title5',
               type: 'string',
               title: 'Keypoint5',
          },
          {
               name: 'title6',
               type: 'string',
               title: 'Keypoint6',
          }
     ],
}