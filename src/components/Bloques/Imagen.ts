import { Block } from "payload/types";

 const Imagen: Block = {
    slug: 'Imagen', // required
    fields: [ // required
    {
      name: 'Imagen', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
      admin: {
        description: 'Recuerde que tiene que subir una imagen con extencion webp'
      },
    },
    ]
  };
  
  export default Imagen