import {BiHome} from 'react-icons/bi'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Home',
  name: 'pageHome',
  type: 'document',
  icon: BiHome,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    // defineField({
    //   title: 'Featured Projects',
    //   name: 'projects',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [{type: 'project'}],
    //       options: {
    //         disableNew: true,
    //       },
    //     },
    //   ],

    //   validation: (Rule) => Rule.unique(),
    // }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home',
        media: BiHome,
      }
    },
  },
})
