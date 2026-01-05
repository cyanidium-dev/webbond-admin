import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'localePortableText',
  title: 'Мультимовний текст з форматуванням',
  type: 'object',
  fields: [
    defineField({
      name: 'da',
      title: 'Данська',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              {
                name: 'textColor',
                type: 'object',
                title: 'Колір тексту',
                fields: [
                  {
                    name: 'color',
                    type: 'string',
                    title: 'Колір',
                    options: {
                      list: [
                        {title: 'Білий', value: 'white'},
                        {title: 'Сірий', value: 'gray'},
                      ],
                    },
                    validation: (Rule) => Rule.required(),
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'Англійська',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              {
                name: 'textColor',
                type: 'object',
                title: 'Колір тексту',
                fields: [
                  {
                    name: 'color',
                    type: 'string',
                    title: 'Колір',
                    options: {
                      list: [
                        {title: 'Білий', value: 'white'},
                        {title: 'Сірий', value: 'gray'},
                      ],
                    },
                    validation: (Rule) => Rule.required(),
                  },
                ],
              },
            ],
          },
        },
      ],
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

