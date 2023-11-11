import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import path from 'path';

export default defineConfig({
  plugins: [svgr(), react(),],
  base: 'https://liunamme.github.io/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.jsx'),
      },
    },
  },
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import svgr from '@svgr/rollup';
// import path from 'path'; // Импорт модуля path

// export default defineConfig({
//   plugins: [react(), svgr()],
//   base: 'https://liunamme.github.io/portfolio/',
//   build: {
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, 'src/main.jsx'), // Используйте path.resolve для создания абсолютного пути
//         // ... другие точки входа
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '@icons': '/public/assets/media/icons/',
//       '@img': '/public/assets/media/img',
//     },
//   },
// });