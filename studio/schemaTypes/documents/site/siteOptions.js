import {BiSliderAlt} from 'react-icons/bi'
import {defineField} from 'sanity'

export default {
  name: 'siteOptions',
  type: 'document',
  title: 'Options',
  icon: BiSliderAlt,
  groups: [
    {
      title: 'Page',
      name: 'page',
      default: true,
    },
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
  fields: [
    defineField({
      title: 'Page Title',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'page',
    }),
    defineField({
      title: 'Copyright',
      name: 'copyrightText',
      type: 'string',
      group: 'page',
    }),
    /* seo */
    defineField({
      title: 'Language Code',
      description:
        'ISO 639-1 Language Codes (i.e. “de” or “en”), can be country specific (i.e. “en-us”)',
      name: 'language',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      title: 'SEO',
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare({}) {
      return {
        title: 'Options',
      }
    },
  },
}
