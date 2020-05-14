# About
These docs contain information on how to build, adapt, and deploy my website.

# How to Use
### Prerequisites
- [NPM](https://npmjs.com) (or the Gridsome CLI tool)
- [Vercel](https://vercel.com/) account (only if deploying)
- Basic comamnd line knowlege

### Creating a new blog post
Posts are made in markdown and include a small amount of YAML metadata processed
at build time.

To create a new post, make a copy of the the `template.md` file in the
`content/posts` directory. The name of the file will be the URL slug. For
example, a file named `blog-post.md` will result in
`example.com/content/posts/blog-post`.

**Optional**: To view updates to blog posts in real time, run `npm run develop`
to start the hot-reload development server.

# Technologies
This website was built using Gridsome, a Vue-based, Gatsby.js-like framework
that uses the JAMStack and prerenders data before deployment.

# Development
To start a development server, run `npm run develop` or `gridsome develop` to
hot-reload on changes. Changes to the `src/` directory will automatically
refresh the page.

# Deployment
This website is set up to be deployed on Vercel. Pushing to the GitHub
repository will automatically deploy the website to production.

(Yes, I understand this is a problem. Yes, I'll fix it later.)

Otherwise, use `npm run build` to produce a bundle in the `dist/` directory.
This can be deployed to any static web hosting solution.

# Roadamp
The blog is currently at **v0.1.0**.

- By v1, the styles will be consistent with my other properties (yes, I'm talking
  about my [personal website](https://williecubed.me))
- For a possible v2, I will have a more CMS-like way of creating blog posts.