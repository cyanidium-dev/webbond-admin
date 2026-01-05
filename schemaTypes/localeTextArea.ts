import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'localeTextArea',
  title: 'Мультимовний текст (багаторядковий)',
  type: 'object',
  fields: [
    defineField({
      name: 'da',
      title: 'Данська',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'Англійська',
      type: 'text',
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


