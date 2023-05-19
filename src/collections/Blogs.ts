import { CollectionConfig } from 'payload/types';
import RichTextButtonCode from '../components/CustomRichText/RichTextButtonCode';
import RichTextElementCode from '../components/CustomRichText/RichTextElementCode';
import RichTextButtonModal from '../components/CustomRichText/RichTextButtonModal';
import RichTextElementModal from '../components/CustomRichText/RichTextElementModal';

// type NewField = TextField;

// const basio:NewField

const Blogs: CollectionConfig = {
  slug: 'blog',
  labels:{
    singular:"Blog",
    plural:"Blogs",
  },
  admin: {
    defaultColumns: ['TituloDelArticulo', 'etiquetas', 'status'],
    useAsTitle: 'TituloDelArticulo',
  },
  access: {
    read: () => true,
  },
  fields: [
    
    {
      name: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'Slug', // required
      type: 'text', // required
      required: true,
    },
    {
      name: 'PalabrasClaves', // required
      type: 'array', // required
      label: 'Palabras Claves',
      minRows: 2,
      maxRows: 10,
      labels: {
        singular: 'Palabra Clave',
        plural: 'Palabras Claves',
      },
      fields: [ // required
        {
          name: 'titulo',
          type: 'text',
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }) => {
            return data?.title || `Palabra Clave ${String(index).padStart(2, '0')}`;
          },
        },
      },
    },

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
      name: 'Contenido',
      type: 'richText',
      admin: {
        elements: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          {
            name: 'codigotsx',
            Button: RichTextButtonCode,
            Element: RichTextElementCode,
            plugins: [
              // any plugins that are required by this element go here
            ]
          },
          {
            name: 'modal',
            Button: RichTextButtonModal,
            Element: RichTextElementModal,
            plugins: [
              // any plugins that are required by this element go here
            ]
          },
          'blockquote',
          'link',
          'ol',
          'ul',
          'indent',
          'upload',
        ],
        
    },

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