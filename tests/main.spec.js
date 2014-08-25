var JLB = require('js-lib-blueprint')['default'];

module('main');

test('Namespace is present', function () {
  ok(JLB, 'Namespace is truthy');
  ok(window.JLB, 'Namespace hung on window');
});

test('ExampleModule exists on namespace', function () {
  ok(JLB.Example, 'JLB.ExampleModule is truthy');
});
