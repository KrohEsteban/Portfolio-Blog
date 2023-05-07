import { CollectionConfig } from 'payload/types';

const Etiquetas: CollectionConfig = {
  slug: 'etiquetas',
  labels:{
    singular:"Etiqueta",
    plural:"Etiquetas",
  },
  admin: {
    defaultColumns: ['name'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],

}

export default Etiquetas;