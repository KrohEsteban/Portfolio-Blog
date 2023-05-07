import { CollectionConfig } from 'payload/types';

const Blogs: CollectionConfig = {
  slug: 'blog',
  labels:{
    singular:"Blog",
    plural:"Blogs",
  },
  admin: {
    defaultColumns: ['TituloDelArticulo', 'etiquetas', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'TituloDelArticulo',
      type: 'text',
    },
    {
      name: 'etiquetas',
      type: 'relationship',
      relationTo: 'etiquetas',
      hasMany: true,
    },
    {
      name: 'TextoDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'Texto',
      type: 'richText'
    },
    {
      name: 'estado',
      type: 'select',
      options: [
        {
          value: 'guardar',
          label: 'Guardar',
        },
        {
          value: 'publicar',
          label: 'Publicar',
        },
      ],
      defaultValue: 'guardar',
      admin: {
        position: 'sidebar',
      }
    }
  ],
}

export default Blogs;