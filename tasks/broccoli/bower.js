var plugins = process.plugins;

module.exports = function() {
  var bowerFiles = [

    plugins.staticCompiler('bower_components/loader.js', {
      files: ['loader.js'],
      srcDir: '/',
      destDir: '/bower_components/loader.js/'
    })

  ];

  bowerFiles = plugins.mergeTrees(bowerFiles);

  return bowerFiles;
};
