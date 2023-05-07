import { CollectionConfig } from 'payload/types';

const HobbyCarrusel: CollectionConfig = {
  slug: 'hobby-carrusel',
  labels:{
    singular:"Hobby-Carrusel",
    plural:"Hobby-Carrusel",
  },
  admin: {
    defaultColumns: ['TituloEnLaImagenDelCarrusel'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'TituloEnLaImagenDelCarrusel',
      type: 'text',
      required: true,
    },
    {
      name: 'TextoEnLaImagenDelCarrusel', // required
      type: 'textarea', // required
      required: true,
    },
    {
      name: 'ImagenCarrusel', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
  ],
}

export default HobbyCarrusel;