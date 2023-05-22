import { Block } from "payload/types";

 const Modal: Block = {
    slug: 'Modal', // required
    fields: [ // required
    {
      name: 'Modal',
      type: 'richText',
      admin: {
        elements: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          // {
          //   name: 'codigotsx',
          //   Button: RichTextButtonCode,
          //   Element: RichTextElementCode,
          //   plugins: [
          //     // any plugins that are required by this element go here
          //   ]
          // },
          // {
          //   name: 'modal',
          //   Button: RichTextButtonModal,
          //   Element: RichTextElementModal,
          //   plugins: [
          //     // any plugins that are required by this element go here
          //   ]
          // },
          'blockquote',
          'link',
          'ol',
          'ul',

   
        ],
        
    },

   },
    ]
  };
  
  export default Modal