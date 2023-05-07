import { buildConfig } from 'payload/config';
import path from 'path';
import Blogs from './collections/Blogs';
import Etiquetas from './collections/Etiquetas';
import Users from './collections/Users';
import Media from './collections/Media';
import Hobby from './collections/Hobby';
import HobbyCarrusel from './collections/HobbyCarrusel';
import Inicio from './collections/Inicio';
import MyLogo from './components/MyLogo';
import MyIcon from './components/MyIcon';
import ProyectosTextos from './collections/ProyectosTextos';
import Proyectos from './collections/Proyectos';
import Aptitudes from './collections/Aptitudes';
import Tecnologias from './collections/Tecnologias';
import BlogsTextos from './collections/BlogsTextos';
import Contactos from './collections/Contactos';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Esteban Kroh',
      favicon: '/assets/favicon.png',
      ogImage: '/assets/estebankroh.svg',
    },
    components: {
      graphics: {
        Logo: MyLogo,
        Icon: MyIcon,
      },
    },
  },
  collections: [
    Inicio,
    Contactos,
    Etiquetas,
    BlogsTextos,
    Blogs,
    Aptitudes,
    Tecnologias,
    ProyectosTextos,
    Proyectos,
    Hobby,
    HobbyCarrusel,
    Media,
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
