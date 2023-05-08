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
    create: ( req ) => {
      // Return `true` if a user is found
      // and `false` if it is undefined or null
      console.log(Boolean(req.req.user))
      return Boolean(req.req.user);
    },
    
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],

}

export default Etiquetas;