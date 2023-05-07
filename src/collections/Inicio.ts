import { CollectionConfig } from 'payload/types';

const Inicio: CollectionConfig = {
  slug: 'inicio',
  labels:{
    singular:"Inicio",
    plural:"Inicio",
  },
  admin: {
    defaultColumns: ['TituloDelTextoPrincipalDeInicio'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    
    {
      name: 'TituloDelTextoPrincipalDeInicio',
      type: 'text',
      required: true,
      admin: {
        description: 'Titulo del texto que se encuentra debajo de la presentación y de "Contactos" en la seccion de incio'
      },
    },
    {
      name: 'TextoDeIncio', // required
      type: 'richText', // required
      required: true,
      admin: {
        description: 'Texto que se colocara debajo de la precentación y la seccion de contactos en la pagina de incio'
      },
    },
    {
      name: 'TextoEntreComillas', // required
      type: 'textarea', // required
      required: true,
    },
    {
      name: 'TextoBotonParaNegocios', // required
      type: 'textarea', // required
      required: true,
    },
    {
      name: 'LinkBotonParaNegocios', // required
      type: 'text', // required
      required: true,
    },
    {
      name: 'TextoBotonParaEmpresas', // required
      type: 'textarea', // required
      required: true,
    },
    {
      name: 'LinkBotonParaEmpresas', // required
      type: 'text', // required
      required: true,
    },
    
    {
      name: 'ImagenPerfil', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
      admin: {
        description: 'Foto de perfil en la sección de incio'
      },
    },

    {
      name: 'description', // required
      type: 'textarea', // required
      required: true,
    },
  ],
}

export default Inicio;