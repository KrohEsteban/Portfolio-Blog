import { CollectionConfig } from 'payload/types';
import Titulo from '../components/Bloques/Titulo';
import Texto from '../components/Bloques/Texto';
import Imagen from '../components/Bloques/Imagen';

const Pages: CollectionConfig = {
  slug: 'pages',
  labels:{
    singular:"Page",
    plural:"Pages",
  },
  admin: {
    defaultColumns: ['TituloSeccion'],
    useAsTitle: 'name',
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
      name: 'Bloques', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [ // required
       Titulo,
       Texto,
       Imagen
      ]
    }
    
  ],
}

export default Pages;