import './classes/buttons.js';
import './classes/typography.js';
import './classes/grid.js';
import './classes/bootstrap.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="skin-styles">
  <template>
    <style include="skin-typography skin-buttons"></style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/**
@license
Copyright (c) 2017 FabricElements. All rights reserved.

skin-styles Styles
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
