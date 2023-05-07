import { CollectionConfig } from 'payload/types';

const BlogsTextos: CollectionConfig = {
  slug: 'blog-textos',
  labels:{
    singular:"Blog-Textos",
    plural:"Blogs-Textos",
  },
  admin: {
    defaultColumns: ['TituloSeccion'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'TituloSeccion',
      type: 'text',
      required: true,
    },
    {
      name: 'TextoDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'TextoSeccion',
      type: 'richText',
      required: true,
    },
    
  ],
}

export default BlogsTextos;