import { buildConfig } from 'payload/config';
import webp from "payload-webp";
import path from 'path';
import Blogs from './collections/Blogs';
import Etiquetas from './collections/Etiquetas';
import Users from './collections/Users';
import Media from './collections/Media';
import MyLogo from './components/MyLogo';
import MyIcon from './components/MyIcon';
import Proyectos from './collections/Proyectos';
import Tecnologias from './collections/Tecnologias';
import Contactos from './collections/Contactos';
import Pages from './collections/Pages';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Esteban Kroh',
      favicon: '/assets/favicon.svg',
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
    Pages,
    Blogs,
    Contactos,
    Etiquetas,
    Tecnologias,
    Proyectos,
    Media,
    Users,
  ],
  plugins: [
    webp()
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
