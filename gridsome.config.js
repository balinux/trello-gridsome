// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = {
//   siteName: 'Balinux',
//   plugins: []
// }

//gridsome.config.js
module.exports = {
  siteName: 'Balinux',
  transformers: {
    remark: {
      'externalLinksTarget': '_blank',
      'externalLinksRel': ['nofollow', 'noopener', 'noreferrer'],
      'autolinkClassName': 'icon icon-link'
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {}
      }
    }
  ],
  // templates: {
  //   Post: '/blog/:year/:month/:title',
  // }
  templates: {
    TrelloPost: [
      {
        path: '/trello/:id',
        component: './src/templates/TrelloPost.vue'
      }
    ]
  }
}
