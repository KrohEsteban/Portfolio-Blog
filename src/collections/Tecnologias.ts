import { CollectionConfig } from 'payload/types';

const Tecnologias: CollectionConfig = {
  slug: 'tecnologias',
  labels:{
    singular:"Tecnologia",
    plural:"Tecnologias",
  },
  admin: {
    defaultColumns: ['TituloDeSatck'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'TituloDeSatck',
      type: 'text',
      required: true,
    },
    {
      name: 'Progreso', // required
      type: 'number', // required
      required: true,
    },
    
  ],
}

export default Tecnologias;