import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://Liunamme.github.io/portfolio/',
})

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