# GPU-Passthru

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

To get started, install the necessary dependencies:

```bash
bun install
```

## Local Development

To start a local development server, run:

```bash
bun start
```

## Deployment

You can use Vercel to depoly, Very easy.

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
  url: 'https://gpu.passthru.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
}
```

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. We welcome contributions of all kinds!

Please adhere to the conventional commits specification and keep commit messages clear.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
