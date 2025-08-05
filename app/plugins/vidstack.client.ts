import 'vidstack/bundle';
import { defineNuxtPlugin } from '#app';
export default defineNuxtPlugin((nuxtApp) => {
  // Register the vidstack plugin
  nuxtApp.vueApp.use({
    install(app) {
      app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('media-');
    },
  });
});