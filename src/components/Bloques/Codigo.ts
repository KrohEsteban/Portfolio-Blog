import { Block } from "payload/types";

 const Codigo: Block = {
    slug: 'Codigo', // required
    fields: [ // required
    {
      name: 'Codigo', // required
      type: 'code', // required
      required: true,
      admin: {
        language: 'html'
      }
    }
    ]
  };
  
  export default Codigo