# GPU-Passthru

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

To get started, install the necessary dependencies:

```bash
yarn install
```

## Local Development

To start a local development server, run:

```bash
yarn start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

## Build

To generate static content, use the following command:

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

## Deployment

### Manual Deployment

To deploy your website manually, run:

```bash
yarn deploy
```

This command builds the website and pushes it to the `gh-pages` branch, making it easy to deploy to GitHub Pages.

### GitHub CI

We provide a CI script for automation. Just push your changes and the workflow will automatically build, commit, and push.

### Custom Domain

Modify the `baseUrl` field in the `docusaurus.config.js` file to match your custom domain:

```js
const config: Config = {
  title: 'GPU Passthrough Made Easy',
  tagline: 'Made GPU-Passthru easy, for everyone. Just follow the guide!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gpu-passthru.ummit.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
}
```

Edit your domain in the CNAME file located at `static/CNAME`. Replace the example domain with your custom domain.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. We welcome contributions of all kinds!

Please adhere to the conventional commits specification and keep commit messages clear.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.