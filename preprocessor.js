const tsc = require('typescript');
const tsConfig = {
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "jsx": "react"
  }
}

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      var transpiled = tsc.transpileModule(src, {
        compilerOptions: tsConfig.compilerOptions,
        fileName: path
      });

      return transpiled.outputText;
    }
    return src;
  },
};