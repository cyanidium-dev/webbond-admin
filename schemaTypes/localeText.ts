import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'localeText',
  title: 'Мультимовний текст',
  type: 'object',
  fields: [
    defineField({
      name: 'da',
      title: 'Данська',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'Англійська',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'en',
      subtitle: 'da',
    },
  },
})

