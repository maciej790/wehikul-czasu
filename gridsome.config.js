// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    { 
      use: '@gridsome/source-filesystem',
      options: { 
        path: 'content/authors/*.md',
        typeName: 'Author',
      } 
    },
    { 
      use: '@gridsome/source-filesystem',
      options: { 
        path: 'content/blog/*.md',
        typeName: 'BlogPost',
        refs: { 
          author: 'Author', 
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