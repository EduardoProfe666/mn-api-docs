import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es-ES',
  cleanUrls: true,
  base: '/mn-api-docs/',
  title: "MN Api Docs",
  description: "Documentación del paquete de Python de métodos numéricos",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    outline: 3,
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    sidebarMenuLabel: 'Menú',
    externalLinkIcon: true,
    returnToTopLabel: 'Retornar al principio',
    docFooter: {
      prev: 'Página previa',
      next: 'Próxima pagina'
    },
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@EduardoProfeCujae' },
      { icon: 'github', link: 'https://github.com/EduardoProfe666/mn-api' },
    ],
    footer: {
      message: 'Hecho con 💚 por <a href="https://github.com/EduardoProfe666" target="_blank">EduardoProfe🎩</a>',
      copyright: '© 2023 MIT License'
    },
  }
})
