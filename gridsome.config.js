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
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          category:{
            typeName: 'Category',
          },
        },
        remark: {
          //Config options can be added here
        }
      }
    },

    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/categories/**/*.md',
        typeName: 'Category',
        refs: {
          posts: {
            typeName: 'Post',
          },
        },
        remark: {
          //Config options can be added here
        }
      }
    },
  ],

  transformers: {
    remark: {
      //Config options can be added here
    }
  }
}