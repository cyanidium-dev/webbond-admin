import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'webbond-admin',

  projectId: 'sovll42h',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Контент')
          .items([
            S.listItem()
              .title('Сторінки кейсів')
              .schemaType('case')
              .child(
                S.documentList()
                  .title('Сторінки кейсів')
                  .filter('_type == "case"')
                  .defaultOrdering([{field: '_createdAt', direction: 'desc'}]),
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
