[![Build Status](https://travis-ci.org/FabricElements/skin-styles.svg?branch=master)](https://travis-ci.org/FabricElements/skeleton-focal)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/FabricElements/skin-styles)

# skin-styles

`skin-styles` is a [Polymer 2](http://polymer-project.org) element that extends `paper-styles` with useful styles.

## Installation

Install skin-styles with Bower

```shell
$ bower install --save FabricElements/skin-styles
```

## Usage

Import it into the `<head>` of your page

```html
<link rel="import" href="bower_components/skin-styles/skin-styles.html">
```

The `<skin-styles>` component provides simple ways to use Material Design CSS styles in your application. The following imports are also available:

* [buttons.html](./classes/buttons.html): A complete set of custom buttons.
* [grid.html](./classes/grid.html): A grid layout using Bootstrap.
* [typography.html](./classes/typography.html): A Set of default styles for typography extending the paper default styles.

We recommend importing each of these individual files, and using the style mixins
available in each ones, rather than the aggregated `skin-styles.html` as a whole.

### Examples: basic usage

* `skin-buttons`
  * `btn-rounded`

  ``` html
  <paper-button class="btn-fill--dark-accent-color btn-rounded">
    hello
  </paper-button>
  ```

  ``` html
  <paper-button raised class="btn-rounded">
    hello
  </paper-button>
  ```
  Use paper-button attributes like **"raised"** to continue manipulating the styles.

  To see more custom buttons styles, please check the [demo](./demo/buttons.html) file. 

* `skin-styles-grid`
  * Three equal columns.

  ``` html
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4">.col-md-4</div>
  </div>
  ```

  To see more basic grid layouts, please check the [demo](./demo/grid.html) file. 

* `skin-typography`
  * `typography-light`

  ``` html
  <article class="redlines paragraph">
    <div class="paper-font-display4 light">Text</div>
  </article>
  ```

  * `typography-dark`

  ``` html
  <article class="redlines paragraph bg-dark">
    <div class="paper-font-display4 dark">Text</div>
  </article>
  ```

  To see more typography default styles, please check the [demo](./demo/typography.html) file. 

## Contributing

Please check [CONTRIBUTING](./CONTRIBUTING.md).

## License

Released under the [BSD 3-Clause License](./LICENSE.md).
