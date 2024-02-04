import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import project from './sanity/schemas/project-schemas'
import schemas from './sanity/schemas';

// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

export default defineConfig({
    name: 'default',
    title: 'Portfolio sanity studio',

    projectId: '7s0xaoa1',
    dataset: 'portfolio',

    apiVersion: "2024-02-04",
    basePath: '/admin',
    plugins: [deskTool()],

    schema: {
        types: schemas,
    },
})