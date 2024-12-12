import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/privods/', // Замените REPO_NAME на имя вашего репозитория
});
