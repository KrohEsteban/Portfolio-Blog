import { CollectionConfig } from 'payload/types';

const Etiquetas: CollectionConfig = {
  slug: 'etiquetas',
  labels:{
    singular:"Etiqueta",
    plural:"Etiquetas",
  },
  admin: {
    defaultColumns: ['Titulo'],
    useAsTitle: 'Titulo',
  },
  access: {
    read: () => true,
    
  },
  fields: [
    {
      name: 'Titulo',
      type: 'text',
    },
  ],

}

export default Etiquetas;