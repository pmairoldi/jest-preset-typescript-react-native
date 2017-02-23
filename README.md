# jest-preset-typescript-react-native

[![NPM Version][npm-img]][npm-link]
[![License][license-img]][license-link]

To simplify the configuration of jest with a react-native project that is using typescript. 

The configuration is simply just the `react-native` preset with a couple other transformers to make jest work with `ts` and `tsx` files. After adding the preset you will be able to write your tests completely in typescript! 

## Install

The library can be installed with [yarn](https://yarnpkg.com) with the following:
```bash
yarn add jest-preset-typescript-react-native --dev
```

or with [npm](https://www.npmjs.com) with the following:

```bash
npm install jest-preset-typescript-react-native --save-dev
```


## Usage

Add the preset to your [Jest](https://facebook.github.io/jest/docs/configuration.html) configuration :

```json
{
  "preset": "jest-preset-typescript-react-native"
}
```

## Update react-native default settings

By default when creating a react-native project jest will be already configured for you in the `package.json` as follows:

```json
"jest": {
  "preset": "react-native"
}
```

To update the default react-native settings just change the preset to use this library instead. Like so:

```json
"jest": {
  "preset": "jest-preset-typescript-react-native"
}
```

[npm-img]: https://img.shields.io/npm/v/jest-preset-typescript-react-native.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/jest-preset-typescript-react-native
[license-img]: https://img.shields.io/npm/l/jest-preset-typescript-react-native.svg?style=flat-square
[license-link]: LICENSE.md
