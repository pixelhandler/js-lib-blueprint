# JS Lib Blueprint

A blueprint for creating a JavaScript library or micro-library using
[broccoli] and [testem].

[broccoli]: https://github.com/joliss/broccoli "Broccoli"
[testem]: https://github.com/airportyh/testem "Test'em 'Scripts!"


## Get Started

1. Clone this repository and rename for your project
1. Switch (`cd`) into your (renamed) project directory
1. Find and replace `js-lib-blueprint` with your name
1. Setup the Namespace (global) you will use in a browser app ()
   * Edit output.js
   * Find and replace `JLB` with your variable name
1. If adding dependencies, modify package.json and/or bower.json files
   * If adding [bower] dependencies, search for `bower_components` 
     as examples of using vendor dependencies
1. Install all dependencies with [npm] and [bower] using `npm install`

[bower]: http://bower.io "Bower"
[npm]: https://www.npmjs.org "NPM"

## Get to Work

To begin development and testing:

```
$ ./testem
```

The `testem` command launches a watcher for both your lib and test directories. Any browsers you list in the testem.json file will launch.

Your tests and [example page] will reload automatically when you save 
changes to your code, see http://localhost:4200/examples/

Create an example of implmenting your library in the `examples` directory.

[example page]: http://localhost:4200/examples/

### Development

Author your library using ES6 modules, for distribution in various
module formats, AMD, CJS, globals, etc.

* Your library code goes in the `lib` directory
* See the main.js and example.js files as an example

### Testing

* Your test code goes in the `tests` directory (use `spec.js` as a suffix for filenames that should be included in the test runner)
* Add any custom test setup or helpers in the `tests/support/setup.js` directory
* See the main.spec.js file as an example unit test.

## Tooling

* Broccoli is used for building and distrubiting amd, cjs, global
  versions
* Testem is used for the test runner (local and ci)
  * Testem config is setup to use the named-amd dist directory for your
    library code


## Distribution

* The default [grunt] task will build to a `dist` directory (ignored by
  git); use `grunt` to build
* Use [es6-module-transpiler] for various module formats, AMD, CJS,
  globals

[grunt]: http://gruntjs.com "Grunt"
[es6-module-transpiler]: https://github.com/esnext/es6-module-transpiler


## Thanks

* [Jo Liss][joliss] - [broccoli]
* [Ryan Florence][rpflorence] - [broccoli-dist-es6-module] 
* Dana Franklin [emberella-component-blueprint] - The example this is
  based on

[joliss]: https://github.com/joliss "Jo Liss on GitHub"
[rpflorence]: https://github.com/rpflorence "Ryan Florence on GitHub"
[broccoli-dist-es6-module]: https://github.com/rpflorence/broccoli-dist-es6-module "broccoli-dist-es6-module"
[emberella-component-blueprint]: https://github.com/realityendshere/emberella-component-blueprint
