# The WillieCubed (Dev) Blog
*It's almost my personal blog, but not really.*

## About
Just go to [blog.williecubed.me](http://blog.williecubed.me).

Yeah, HTTPS isn't enabled yet. Sorry. Give me some time to create a
certificate using Let's Encrypt.

Posts are stored in `content/posts` and written in Markdown because it's the
most superior plain text formatting syntax.

## Development
This site uses GitHub Pages as the CDN and host because that's apparently
one of its primary use cases.

For content generation This project uses [Gridsome](https://gridsome.org),
a newish Vue.js-based static site generator. It's probably overkill, but it
looks pretty cool and has features that I might end up using it for
other projects.

Before you do anything, install the Gridsome CLI:

```bash
npm install -g @gridsome/cli
```

If you want to start a development server to see the darn thing, run `npm start`.

If you want to build the website, run `npm run build`.