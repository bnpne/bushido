import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {presentationTool} from 'sanity/presentation'
import {media} from 'sanity-plugin-media'
import {desk} from './config/desk'
import {initialValueTemplates} from './config/initialValueTemplates'
import {defaultDocumentNode} from './config/views'

const SANITY_STUDIO_VISUAL_PREVIEW_URL =
  process.env.SANITY_STUDIO_VISUAL_PREVIEW_URL || 'http://localhost:3000/'

export default defineConfig({
  name: 'default',
  title: 'Bushido',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',

  plugins: [
    structureTool({
      structure: desk,
      defaultDocumentNode: defaultDocumentNode,
    }),
    media(),
    presentationTool({
      previewUrl: SANITY_STUDIO_VISUAL_PREVIEW_URL,
    }),
    ...(isDev ? [visionTool()] : []),
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) => initialValueTemplates(prev),
  },
})
