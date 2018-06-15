/**
 @license
 Copyright (c) FabricElements. All rights reserved.

 skin-styles Styles
 */
import './classes/buttons.js';
import './classes/typography.js';
import './classes/grid.js';
import './classes/bootstrap.js';

const styleElement = document.createElement('dom-module');
styleElement.innerHTML = `
<template>
  <!--suppress CssInvalidPseudoSelector -->
  <!--suppress CssUnresolvedCustomProperty -->
  <!--suppress CssUnresolvedCustomPropertySet -->
  <style include="skin-typography skin-buttons"></style>
</template>
`;
styleElement.register('skin-styles');
