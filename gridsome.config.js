// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  templates: {
    BlogPost: '/blog/:year/:month/:title',
  },
  plugins: [
    { 
      use: '@gridsome/source-filesystem',
      options: { 
        path: 'content/categories/*.md',
        typeName: 'Category',
      } 
    },
    { 
      use: '@gridsome/source-filesystem',
      options: { 
        path: 'content/blog/*.md',
        typeName: 'BlogPost',
        refs: { 
          category: 'Category', 
        } 
      } 
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`
      }
    },
  ],

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  }
}