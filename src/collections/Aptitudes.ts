import { CollectionConfig } from 'payload/types';

const Aptitudes: CollectionConfig = {
  slug: 'aptitudes',
  labels:{
    singular:"Aptitude",
    plural:"Aptitudes",
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
      name: 'TituloSeccion',
      type: 'text',
      required: true,
    },
    {
      name: 'TextoDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'TextoDeLaSeccionDeAptitudes', // required
      type: 'richText', // required
      required: true,
    },
    
  ],
}

export default Aptitudes;