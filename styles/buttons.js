import '@polymer/polymer/polymer-legacy.js';
import './default-theme';

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML =`<custom-style>
  <style is="custom-style">
    html {
      --btn-rounded: {
        border-radius: 200px;
        padding-left: 16px;
        padding-right: 16px;
      };

      /* primary-color ==============================================================*/
      --btn--primary-color: {
        color: var(--primary-color);
      };

      /*noinspection ALL*/
      --btn-fill--primary-color: {
        background-color: var(--primary-color);
        color: white;
      };

      /*noinspection ALL*/
      --btn--light-primary-color: {
        color: var(--light-primary-color);
      };
      /*noinspection ALL*/
      --btn-fill--light-primary-color: {
        background-color: var(--light-primary-color);
      };

      /*noinspection ALL*/
      --btn--dark-primary-color: {
        color: var(--dark-primary-color);
      };
      /*noinspection ALL*/
      --btn-fill--dark-primary-color: {
        background-color: var(--dark-primary-color);
        color: white;
      };

      /*noinspection ALL*/
      --btn--accent-color: {
        color: var(--accent-color);
      };
      /*noinspection ALL*/
      --btn-fill--accent-color: {
        background-color: var(--accent-color);
        color: white;
      };

      /*noinspection ALL*/
      --btn--light-accent-color: {
        color: var(--light-accent-color);
      };
      /*noinspection ALL*/
      --btn-fill--light-accent-color: {
        background-color: var(--light-accent-color);
        color: white;
      };

      /*noinspection ALL*/
      --btn--dark-accent-color: {
        color: var(--dark-accent-color);
      };
      /*noinspection ALL*/
      --btn-fill--dark-accent-color: {
        background-color: var(--dark-accent-color);
        color: white;
      };

      /* secondary-color ==============================================================*/
      /*noinspection ALL*/
      --btn--secondary-color: {
        color: var(--secondary-color);
      };
      /*noinspection ALL*/
      --btn-fill--secondary-color: {
        background-color: var(--secondary-color);
        color: white;
      };

      /*noinspection ALL*/
      --btn--light-secondary-color: {
        color: var(--light-secondary-color);
      };
      /*noinspection ALL*/
      --btn-fill--light-secondary-color: {
        background-color: var(--light-secondary-color);
      };

      /*noinspection ALL*/
      --btn--dark-secondary-color: {
        color: var(--dark-secondary-color);
      };
      /*noinspection ALL*/
      --btn-fill--dark-secondary-color: {
        background-color: var(--dark-secondary-color);
        color: white;
      };

      /*noinspection ALL*/
      --btn--accent-secondary-color: {
        color: var(--accent-secondary-color);
      };
      /*noinspection ALL*/
      --btn-fill--accent-secondary-color: {
        background-color: var(--accent-secondary-color);
        color: white;
      };

      /*noinspection ALL*/
      --btn--light-accent-secondary-color: {
        color: var(--light-accent-secondary-color);
      };
      /*noinspection ALL*/
      --btn-fill--light-accent-secondary-color: {
        background-color: var(--light-accent-secondary-color);
        color: white;
      };

      /*noinspection ALL*/
      --btn--dark-accent-secondary-color: {
        color: var(--dark-accent-secondary-color);
      };
      /*noinspection ALL*/
      --btn-fill--dark-accent-secondary-color: {
        background-color: var(--dark-accent-secondary-color);
        color: white;
      };

      /*=====================================*/
      /*noinspection ALL*/
      --btn-light: {
        color: var(--paper-grey-600);
      };

      /*noinspection ALL*/
      --btn-light-white: {
        color: #ffffff;
      };

      /*noinspection ALL*/
      --btn--mid--dark: {
        background-color: var(--paper-grey-600);
        color: white;
      };

      /*noinspection ALL*/
      --btn--dark: {
        background-color: var(--paper-grey-900);
        color: white;
      };
    }

  </style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);

/**
@license
 Copyright (c) 2017 FabricElements. All rights reserved.
*/
;

