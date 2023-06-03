import { Block } from "payload/types";

 const FotosProyectos: Block = {
    slug: 'FotosProyectos', // required
    fields: [ // required
    
        {
          name: 'ImageDesktop', // required
          type: 'upload', // required
          relationTo: 'media', // required
          required: true,
        },
        {
          name: 'ImageCelu', // required
          type: 'upload', // required
          relationTo: 'media', // required
          required: true,
        },
      ],
   
  };
  
  export default FotosProyectos

