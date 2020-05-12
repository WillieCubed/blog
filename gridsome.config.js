// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    });
}

module.exports = {
  siteName: 'WillieCubed Blog',
  siteDescription: 'Some assorted ramblings from a student who is in love with ML and AI',
  siteUrl: 'http://blog.williecubed.me',
  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/posts/*': {
            changefreq: 'daily',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          }
        },
        staticUrls: [
          {
            url: '/images/',
            img: [
              {
                url: '/images/author.png',
                caption: 'My profile picture for basically everything.',
                title: 'The Face of WillieCubed',
                license: 'https://creativecommons.org/licenses/by/4.0/'
              },
            ],
          },
        ],
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-99670122-8',
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
      ],
    },
  },
  chainWebpack(config) {
    // Load SCSS into styles
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  },
};
