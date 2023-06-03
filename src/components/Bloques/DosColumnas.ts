import { Block } from "payload/types";

 const DosColumnas: Block = {
    slug: 'DosColumnas', // required
    fields: [ // required
    {
      name: 'RichTextNormal',
      type: 'richText',
      admin: {
        elements: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'blockquote',
          'link',
          'ol',
          'ul',
          'indent',
          'upload',
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
        ],
        
    },

   },
   {
    name: 'RichTextNormal',
    type: 'richText',
    admin: {
      elements: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'link',
        'ol',
        'ul',
        'indent',
        'upload',
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
      ],
      
  },

 },
    ]
  };
  
  export default DosColumnas