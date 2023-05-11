import { CollectionConfig } from 'payload/types';
import Titulo from '../components/Bloques/Titulo';
import Texto from '../components/Bloques/Texto';
import Imagen from '../components/Bloques/Imagen';
import Codigo from '../components/Bloques/Codigo';

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
      name: 'Bloques', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [ // required
       Titulo,
       Texto,
       Imagen,
       Codigo
      ]
    }
    
  ],
}

export default Pages;