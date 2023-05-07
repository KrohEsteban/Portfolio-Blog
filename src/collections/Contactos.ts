import { CollectionConfig } from 'payload/types';

const Contactos: CollectionConfig = {
  slug: 'contactos',
  labels:{
    singular:"Contacto",
    plural:"Contactos",
  },
  admin: {
    defaultColumns: ['Nombre'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Nombre',
      type: 'text',
      required: true,
    },
    {
      name: 'Url',
      type: 'text',
      required: true,
    },
    {
      name: 'Svg', // required
      type: 'code', // required
      required: true,
      admin: {
        language: 'html'
      }
    }
  ],
}

export default Contactos;