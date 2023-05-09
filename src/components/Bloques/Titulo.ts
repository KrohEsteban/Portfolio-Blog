import { Block } from "payload/types";

 const Titulo: Block = {
    slug: 'Titulo', // required
    fields: [ // required
      {
        name: 'Titulo',
        type: 'text',
        required: true,
      },
    ]
  };
  
  export default Titulo