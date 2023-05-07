import { CollectionConfig } from 'payload/types';

const Proyectos: CollectionConfig = {
  slug: 'proyetos',
  labels:{
    singular:"Proyecto",
    plural:"Proyectos",
  },
  admin: {
    defaultColumns: ['TituloProyect'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'TituloProyect',
      type: 'text',
      required: true,
    },
    {
      name: "FechaInicio",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "monthOnly",
          displayFormat: "MM/yyyy",  
        },
      },
    },
    {
      name: "FechaFinal",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "monthOnly",
          displayFormat: "MM/yyyy",        
        },
      },
    },
    
    {
      name: 'TextoCortoDelProyecto', // required
      type: 'textarea', // required
      required: true,
    },
    {
      name: 'TextoLargoExplicandoTodoElProyecto', // required
      type: 'richText', // required
      required: true,
    },
    {
      name: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'UrlProyect',
      type: 'text',
    },
    {
      name: 'Stack',
      type: 'text',
      required: true,
    },
    {
      name: 'ImagenCelu', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
    {
      name: 'ImagenDescktop', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    },
  ],
}

export default Proyectos;