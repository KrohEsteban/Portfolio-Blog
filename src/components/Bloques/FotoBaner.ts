import { Block } from "payload/types";

 const FotoBaner: Block = {
    slug: 'FotoBaner', // required
    fields: [ // required
    
        {
          name: 'Image', // required
          type: 'upload', // required
          relationTo: 'media', // required
          required: true,
        }
      ],
   
  };
  
  export default FotoBaner

