import { Block } from "payload/types";

 const Texto: Block = {
    slug: 'Texto', // required
    fields: [ // required
      {
        name: 'Texto',
        type: 'richText',
        required: true,
      },
    ]
  };
  
  export default Texto