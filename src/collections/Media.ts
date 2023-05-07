import path from 'path';
import errorHandler from 'payload/dist/express/middleware/errorHandler';
import type { CollectionConfig } from 'payload/types';
import ValidateImagen from '../components/ValidateImagen';

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
      description: 'Recuerde que el formato de imagen deb eser WEBP, si tiene una imagen jpg o png debe transformarla a webp'
    }, 
  access: {
    read: () => true,
  },
  upload: {
    staticURL: '/media',
    staticDir: path.resolve(__dirname, '../../media'),
    // Specify the size name that you'd like to use as admin thumbnail
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/webp'],
    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: 'center',
        name: 'thumbnail',
      },
    ],
         
  },
  fields: [ 
    {
    name: 'Alt', // required
    type: 'text', // required
    required: true,
    
    },
    
  ],
};

export default Media;
