import { CollectionConfig } from 'payload/types';
import RichTextButtonCode from '../components/CustomRichText/RichTextButtonCode';
import RichTextElementCode from '../components/CustomRichText/RichTextElementCode';
import RichTextButtonModal from '../components/CustomRichText/RichTextButtonModal';
import RichTextElementModal from '../components/CustomRichText/RichTextElementModal';
import RichTextNormal from '../components/Bloques/RichTextNormal';
import Modal from '../components/Bloques/Modal';
import Carousel from '../components/Bloques/Carousel';
import Codigo from '../components/Bloques/Codigo';

// type NewField = TextField;

// const basio:NewField

const Blogs: CollectionConfig = {
  slug: 'blog',
  labels:{
    singular:"Blog",
    plural:"Blogs",
  },
  admin: {
    defaultColumns: ['Title', 'etiquetas'],
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
      name: 'ImageOpenGraph', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
    
    {
      name: 'etiquetas',
      type: 'relationship',
      relationTo: 'etiquetas',
      hasMany: true,
    },
    {
      name: 'Contenido', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [ // required
       RichTextNormal,
       Modal,
       Carousel,
       Codigo,
      ]
    }
  ],
}

export default Blogs;