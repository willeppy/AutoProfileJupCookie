# AutoProfileJupCookie

This repo contains a jupyter lab extension that is using webpack to bundle the extension code so that the front end widget can be written with Svelte.

There are two main issues with the current version:

1. The current extension will not activate because it errors out with a `Provider not found` error to the console for the arugment to requries in [src/index.ts](src/index.ts)
2. When the requires arugment is removed from [src/index.ts](src/index.ts), the extension will compile but does not show up at all in the jupyter UI. However the elements are added to the DOM. You can verify this by compiling the extension then searching for "Svelte thingie that says Hi" in the console elements. The svelte elements are added to the DOM but the extension is not showing up in the jupyter UI.


This extension is based off the cookiecutter from [https://github.com/jupyterlab/extension-cookiecutter-ts](https://github.com/jupyterlab/extension-cookiecutter-ts).



## Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the AutoProfileJupCookie directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm build
```

## Development uninstall

```bash
pip uninstall AutoProfileJupCookie
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `AutoProfileJupCookie` within that folder.
