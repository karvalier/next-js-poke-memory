module.exports = {
    images: {
        loader: 'akamai',
        path: '',
      },
      assetPrefix: './',
      // Ajusta la ruta base del proyecto para que funcione en GitHub Pages
    basePath: '/next-js-poke-memory',
    // Ajusta el enrutamiento para que funcione correctamente en GitHub Pages
    exportPathMap: async function () {
        return {
        '/': { page: '/' },
        '/memory': { page: '/memory' },
        // Agrega aquí otras rutas personalizadas que tengas en tu proyecto
        };
    },
  };

