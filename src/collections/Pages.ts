import { CollectionConfig } from 'payload/types';
import RichTextButton from '../components/CustomRichText/RichTextButton';
import RichTextElement from '../components/CustomRichText/RichTextElement';

const Pages: CollectionConfig = {
  slug: 'pages',
  labels:{
    singular:"Page",
    plural:"Pages",
  },
  admin: {
    defaultColumns: ['Title', 'Slug'],
    useAsTitle: 'Title',
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
            name: 'codigo-tsx',
            Button: RichTextButton,
            Element: RichTextElement,
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
    
  ],
}

export default Pages;