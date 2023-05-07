import { CollectionConfig } from 'payload/types';

const ProyectosTextos: CollectionConfig = {
  slug: 'proyectos-textos',
  labels:{
    singular:"Proyectos-Textos",
    plural:"Proyectos-Textos",
  },
  admin: {
    defaultColumns: ['TituloDeSeccion'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'TituloDeSeccion',
      type: 'text',
      required: true,
    },
    {
      name: 'TextoDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'TextoEnProyectos', // required
      type: 'richText', // required
      required: true,
    },
    
  ],
}

export default ProyectosTextos;