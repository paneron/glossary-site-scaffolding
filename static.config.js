import path from 'path'

import { itemClassConfiguration, subregisters } from '@riboseinc/paneron-extension-glossarist/registryConfig';


const DATASET_ROOT = path.join(__dirname, 'glossary');


export default {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  
  getRoutes: async () => {
    return [
    ]
  },
  plugins: [
    [
      '@riboseinc/react-static-plugin-paneron-registry',
      {
        datasetSourcePath: DATASET_ROOT,
        iconURL: 'https://www.glossarist.org/SymbolLoupe.png',
        urlPrefix: '',
        itemClassConfiguration,
        subregisters,
        itemClassPageTemplate: 'src/ItemClassPage',
        itemPageTemplate: 'src/ItemPage',
        subregisterPageTemplate: 'src/SubregisterPage',
        homePageTemplate: 'src/HomePage',
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    [
      'react-static-plugin-file-watch-reload',
      {
        paths: [`${DATASET_ROOT}/**/*`],
      },
    ],
  ],
};
