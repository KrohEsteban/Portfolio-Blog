import { Block } from "payload/types";

 const RichTextNormal: Block = {
    slug: 'RichTextNormal', // required
    fields: [ // required
    {
      name: 'Contenido',
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
  
  export default RichTextNormal