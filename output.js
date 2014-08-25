// Replace with your own global namespace.
var MY_JS_GLOBAL_NAMESPACE = 'JLB';

// Replace with your own package name.
var MY_JS_PACKAGE_NAME = 'js-lib-blueprint';



var outputConfig = {
  global: MY_JS_GLOBAL_NAMESPACE,
  packageName: MY_JS_PACKAGE_NAME,
  main: 'main',
  shim: {
    // Dependent libs may need to be added here.
    // 'ember': 'Ember'
  }
};

try {
  if (window) {
    window.ECB_OUTPUT_CONFIG = outputConfig;
  }
} catch(e) {}

try {
  if (module) {
    module.exports = outputConfig;
  }
} catch(e) {}
