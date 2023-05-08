import path from 'path';
import type { CollectionConfig } from 'payload/types';
import ValidateImagen from '../components/ValidateImagen';
import APIError from 'payload/dist/errors/APIError';
import errorHandler from 'payload/dist/express/middleware/errorHandler';


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

  hooks: {

    beforeValidate: [({
      data , // datos entrantes para actualizar o crear con 
    }) => {
      
      console.log(data.mimeType)
      if(data.mimeType!='image/webp'){
        const err= new APIError('Recuerde que debe subir una imagen con extencion WEBP, transforme su imagen jpg o png a formato webp')
        throw err
      }else{
        return data;
      }

      
    }],

  

  }
}

export default Media;
