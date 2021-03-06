/**
 @license
 Copyright (c) FabricElements. All rights reserved.
 */
import '@polymer/polymer/lib/elements/custom-style.js';
import '@polymer/paper-styles/color.js';

const styleElement = document.createElement('template');
styleElement.innerHTML = `
<custom-style>
  <!--suppress CssInvalidPseudoSelector -->
  <!--suppress CssUnresolvedCustomProperty -->
  <!--suppress CssUnresolvedCustomPropertySet -->
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.html for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-indigo-a200);
      --light-accent-color: var(--paper-indigo-a100);
      --dark-accent-color: var(--paper-indigo-a400);

      /*
       * Secondary and accent colors. Also see color.html for more colors.
       */
      --secondary-color: var(--paper-green-500);
      --light-secondary-color: var(--paper-green-100);
      --dark-secondary-color: var(--paper-green-700);

      --accent-secondary-color: var(--paper-green-a200);
      --light-accent-secondary-color: var(--paper-green-a100);
      --dark-accent-secondary-color: var(--paper-green-a400);

      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373; /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b; /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc; /* for secondary text and icons */
      --dark-theme-disabled-color: #646464; /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);

      /*
       * Light Theme Font Colors
       */
      --light-theme-font-display4: var(--paper-grey-900);
      --light-theme-font-display3: var(--paper-blue-grey-900);
      --light-theme-font-display2: var(--paper-blue-grey-800);
      --light-theme-font-display1: var(--paper-blue-grey-700);
      --light-theme-font-headline: var(--paper-blue-grey-700);
      --light-theme-font-title: var(--paper-grey-900);
      --light-theme-font-subhead: var(--paper-grey-900);
      --light-theme-font-body2: var(--paper-grey-800);
      --light-theme-font-body1: var(--paper-grey-800);
      --light-theme-font-caption: var(--paper-grey-700);
      --light-theme-font-menu: var(--paper-grey-700);
      --light-theme-font-button: var(--paper-grey-800);
      --light-theme-font-code2: var(--paper-grey-700);
      --light-theme-font-code1: var(--paper-grey-700);

      /*
       * Dark Theme Font Colors
       */
      --dark-theme-font-display4: #ffffff;
      --dark-theme-font-display3: #ffffff;
      --dark-theme-font-display2: #ffffff;
      --dark-theme-font-display1: #ffffff;
      --dark-theme-font-headline: var(--paper-grey-50);
      --dark-theme-font-title: var(--paper-grey-100);
      --dark-theme-font-subhead: var(--paper-grey-200);
      --dark-theme-font-body2: var(--paper-grey-200);
      --dark-theme-font-body1: var(--paper-grey-200);
      --dark-theme-font-caption: var(--paper-grey-300);
      --dark-theme-font-menu: var(--paper-grey-300);
      --dark-theme-font-button: #ffffff;
      --dark-theme-font-code2: #ffffff;
      --dark-theme-font-code1: #ffffff;
    }
  </style>
</custom-style>
`;

document.head.appendChild(styleElement.content);
