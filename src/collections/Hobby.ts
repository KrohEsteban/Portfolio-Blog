import { CollectionConfig } from 'payload/types';

const Hobby: CollectionConfig = {
  slug: 'hobby',
  labels:{
    singular:"Hobby",
    plural:"Hobby",
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
      name: 'TextoEnHobby', // required
      type: 'richText', // required
      required: true,
    },
    
  ],
}

export default Hobby;