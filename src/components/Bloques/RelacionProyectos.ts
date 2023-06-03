import { Block } from "payload/types";

 const RelacionProyectos: Block = {
    slug: 'RelacionProyectos', // required
    fields: [ // required
    
    {
      name: "ProyectoRelacionado",
      type: "relationship",
      relationTo: "proyectos"
    }
  ],
   
  };
  
  export default RelacionProyectos

