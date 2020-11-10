<div align="center">

# react-webassembly-experiment

Using **[WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly)** in a
**[TypeScript](https://github.com/microsoft/TypeScript)** **[React](https://github.com/facebook/react)** app, based on
**[create-react-app](https://github.com/facebook/create-react-app)**.

</div>

<br><br>

## How to use WebAssembly modules in a TypeScript React app

This repository shows the simplest use case, meaning that a compiled `.wasm` file already exists.

> Testing is out of scope, mocking might be required.

<br>

### Provide the WebAssembly module

Depending on your use case, various ways exist to provide your WebAssembly module to the application:

- IF you only use the WebAssembly module in your application, place the `.wasm` file somewhere into your `public` folder, e.g. `public/wasm`
- IF you intend to use the same WebAssembly module across multiple different applications, or want to decouple it from any specific
  applications, you can also serve your `.wasm` file from any URL

<br>

### Use the WebAssembly module

Fetch and instantiate the module:

```ts
// Load module
// Note: You might lazy-load and instantiate the module only once actually needed (#perfmatters)
const MyWasmModule = await WebAssembly.instantiateStreaming(fetch('./wasm/my-module.wasm'));
const MyWasmModuleInstance = AddModule.instance.exports as any;

// Use the module
const result = MyWasmModuleInstance.doSomething(inputA, inputB);
```

> This project contains an example WASM module that adds two numbers together (see `./public/wasm/add.wasm`).

<br><br>

## Commands

The following commands are available:

| Command               | Description                                        | CI                 |
| --------------------- | -------------------------------------------------- | ------------------ |
| `npm start`           | Creates a development build, running in watch mode |                    |
| `npm run start:build` | Serves the production build                        |                    |
| `npm run build`       | Creates a production build                         | :heavy_check_mark: |
| `npm run test`        | Executes all unit tests                            | :heavy_check_mark: |
| `npm run test:watch`  | Executes all unit tests, running in watch mode     |                    |
