import { Block } from "payload/types";

 const Carousel: Block = {
    slug: 'Carousel', // required
    fields: [ // required
    {
      name: 'Campos', // required
      type: 'array', // required
      label: 'Campos',
      minRows: 2,
      maxRows: 10,
      labels: {
        singular: 'Campo',
        plural: 'Campos',
      },
      fields: [ // required
        {
          name: 'titulo',
          type: 'text',
        },
        {
          name: 'subtitulo',
          type: 'text',
        },
        {
          name: 'backgroundImage', // required
          type: 'upload', // required
          relationTo: 'media', // required
          required: true,
        }
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }) => {
            return data?.title || `Campo ${String(index).padStart(1, '0')}`;
          },
        },
      },
    },
    ]
  };
  
  export default Carousel

