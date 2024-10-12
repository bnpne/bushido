import {BiMapAlt} from 'react-icons/bi'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Navigation',
  name: 'siteNav',
  type: 'document',
  icon: BiMapAlt,
  fields: [
    defineField({
      title: 'Main Navigation',
      name: 'navMain',
      type: 'array',
      layout: 'grid',
      editModal: 'popover',
      of: [
        {
          type: 'internalLink',
        },
        {
          type: 'link',
        },
      ],
    }),
    defineField({
      title: 'Footer Navigation',
      name: 'navFooter',
      type: 'array',
      layout: 'grid',
      editModal: 'popover',
      of: [
        {
          type: 'internalLink',
        },
        {
          type: 'link',
        },
      ],
    }),
  ],
  preview: {
    prepare({}) {
      return {
        title: 'Navigation',
      }
    },
  },
})
