## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app -e https://github.com/Enzaik/next-tailwind-bootstrapper my-next-tailwind-enhanced-project
# or
yarn create next-app -e https://github.com/Enzaik/next-tailwind-bootstrapper my-next-tailwind-enhanced-project
```

## Notes

This example is a basic starting point for using [Tailwind CSS](https://tailwindcss.com) with Next.js. It includes the following [PostCSS](https://github.com/postcss/postcss) plugins:

- [postcss-preset-env](https://preset-env.cssdb.org/) - Adds stage 2+ features and autoprefixes

To control the generated stylesheet's filesize, this example uses Tailwind CSS' [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css) to remove unused CSS.

## For Netlify

`yarn build`
`yarn postbuild`
