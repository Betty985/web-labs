const pluginName='noConsoleLogPlugin'
class noConsoleLogPlugin{
  apply(compiler) {
    compiler.hooks.emit.tap(pluginName, (compilation) => {
      for (const filename in compilation.assets) {
        if (/\.js$/.test(filename)) {
          const source = compilation.assets[filename].source();
          const newSource = source.replace(/console\.log\(.+?\)[,;]?/g, '');
          compilation.assets[filename] = {
            source: () => newSource,
            size: () => newSource.length,
          };
        }
      }
    });
  }
}
module.exports=noConsoleLogPlugin