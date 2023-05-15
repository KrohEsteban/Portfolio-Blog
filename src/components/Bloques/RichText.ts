import { Block } from "payload/types";

 const RichText: Block = {
    slug: 'RichText', // required
    fields: [ // required
      {
        name: 'RichText',
        type: 'richText',
        required: true,
      },
    ]
  };
  
  export default RichText