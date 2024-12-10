import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    nodeVersion: '18',
    ssgName: 'astro',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['src/content'],
            models: [
                {
                    name: 'BlogPost',
                    type: 'page',
                    filePath: 'src/content/blog/{slug}.md',
                    urlPath: 'blog/{slug}',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            required: true
                        },
                        {
                            name: 'excerpt',
                            type: 'text'
                        },
                        {
                            name: 'publishDate',
                            type: 'date'
                        },
                        {
                            name: 'tags',
                            type: 'list',
                            items: {
                                type: 'string'
                            }
                        },
                        {
                            name: 'seo',
                            type: 'object',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'string'
                                },
                                {
                                    name: 'description',
                                    type: 'string'
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Project',
                    type: 'page',
                    filePath: 'src/content/projects/{slug}.md',
                    urlPath: 'projects/{slug}',
                    fields: [
                        {
                            name: 'isFeatured',
                            type: 'boolean'
                        },
                        {
                            name: 'title',
                            type: 'string',
                            required: true
                        },
                        {
                            name: 'excerpt',
                            type: 'text'
                        },
                        {
                            name: 'publishDate',
                            type: 'date'
                        },
                        {
                            name: 'tags',
                            type: 'list',
                            items: {
                                type: 'string'
                            }
                        },
                        {
                            name: 'seo',
                            type: 'object',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'string'
                                },
                                {
                                    name: 'description',
                                    type: 'string'
                                }
                            ]
                        }
                    ]
                }
            ]
        })
    ]
});
