import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'case',
  title: 'Кейс',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'localeText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showOnHomepage',
      title: 'Показувати на головній',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'hero',
      title: 'Блок Hero',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
       
        defineField({
          name: 'description',
          title: 'Опис',
          type: 'localeText',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'tags',
          title: 'Теги',
          type: 'array',
          of: [{type: 'localeText'}],
        }),
        defineField({
          name: 'image',
          title: 'Зображення',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Блок послуг',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Заголовок',
              type: 'localeText',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Опис',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Текст',
                      type: 'localeText',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                },
              ],
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title.en',
              subtitle: 'title.da',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'imageBlock',
      title: 'Блок з зображенням',
      type: 'object',
      fields: [
        defineField({
          name: 'imageDesktop',
          title: 'Зображення для десктопу',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'imageMobile',
          title: 'Зображення для мобільного',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'button',
          title: 'Кнопка',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Текст кнопки',
              type: 'localeText',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Посилання кнопки',
              type: 'string',
              description: 'Може бути внутрішнє посилання (наприклад, /) або зовнішнє URL',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Блок відгуку',
      type: 'object',
      fields: [
        defineField({
          name: 'description',
          title: 'Опис',
          type: 'localePortableText',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'clientName',
          title: "Ім'я клієнта",
          type: 'localeText',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'clientPosition',
          title: 'Позиція клієнта',
          type: 'localeText',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'clientPhoto',
          title: 'Фото клієнта',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'testimonialText',
          title: 'Текст відгуку',
          type: 'localeText',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'imageDesktop',
          title: 'Зображення для десктопу',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'imageMobile',
          title: 'Зображення для мобільного',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO налаштування',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          type: 'localeText',
          title: 'SEO title',
          description: 'Заголовок сторінки для пошукових систем (до 60 символів)',
          validation: (rule) =>
            rule.custom((value: any) => {
              if (!value || typeof value !== 'object') return true
              const enLength = (value.en as string)?.length || 0
              const daLength = (value.da as string)?.length || 0
              if (enLength > 60 || daLength > 60) {
                return 'Заголовок має бути до 60 символів для кожної мови'
              }
              return true
            }),
        }),
        defineField({
          name: 'metaDescription',
          type: 'localeTextArea',
          title: 'SEO description',
          description: 'Короткий опис сторінки (до 160 символів)',
          validation: (rule) =>
            rule.custom((value: any) => {
              if (!value || typeof value !== 'object') return true
              const enLength = (value.en as string)?.length || 0
              const daLength = (value.da as string)?.length || 0
              if (enLength > 160 || daLength > 160) {
                return 'Опис має бути до 160 символів для кожної мови'
              }
              return true
            }),
        }),
        defineField({
          name: 'keywords',
          type: 'array',
          title: 'Ключові слова',
          description: 'Додайте ключові слова через список тегів',
          of: [{type: 'localeText'}],
          options: {
            layout: 'tags',
          },
        }),
        defineField({
          name: 'opengraphImage',
          type: 'image',
          title: 'Open Graph зображення',
          description: 'Зображення для спільного доступу у соціальних мережах (1200×630 px)',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'localeText',
              title: 'Альтернативний текст',
              description: 'Важливо для SEO та доступності',
            }),
          ],
        }),
        defineField({
          name: 'schemaJson',
          type: 'file',
          title: 'schema.org JSON',
          description: 'Завантажте JSON файл зі структурованими даними',
          options: {
            accept: 'application/json',
            storeOriginalFilename: true,
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'title.da',
      media: 'hero.image',
    },
  },
})

