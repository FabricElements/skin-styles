/**
 @license
 Copyright (c) FabricElements. All rights reserved.
 `skin-typography`
 Typography Sizes applied to paper classes.
 @group Skin Styles
 @demo demo/typography.html skin-typography
 */
import '@polymer/polymer/polymer-legacy.js';
import '@polymer/paper-styles/classes/typography.js';
import '@polymer/paper-styles/typography.js';

const styleElement = document.createElement('dom-module');
styleElement.innerHTML = `
<template>
  <!--suppress CssInvalidPseudoSelector -->
  <!--suppress CssUnresolvedCustomProperty -->
  <!--suppress CssUnresolvedCustomPropertySet -->
  <style>
    /*
    * Reset browser fonts
    */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    li {
      @apply --paper-font-common-base;
      @apply --paper-font-body1;
      margin: 0;
      padding: 0;
    }

    /*
    "Line wrapping only applies to Body, Subhead, Headline, and the smaller Display
    styles. All other styles should exist as single lines."
    */

    .light.paper-font-display4 {
      color: var(--light-theme-font-display4, #000000);
    }

    .light.paper-font-display3 {
      color: var(--light-theme-font-display3, #000000);
    }

    .light.paper-font-display2 {
      color: var(--light-theme-font-display2, #000000);
    }

    .light.paper-font-display1 {
      color: var(--light-theme-font-display1, #000000);
    }

    .light.paper-font-headline {
      color: var(--light-theme-font-headline, #000000);
    }

    .light.paper-font-title {
      color: var(--light-theme-font-title, #000000);
    }

    .light.paper-font-subhead {
      color: var(--light-theme-font-subhead, #000000);
    }

    .light.paper-font-body2 {
      color: var(--light-theme-font-body2, #000000);
    }

    .light.paper-font-body1 {
      color: var(--light-theme-font-body1, #000000);
    }

    .light.paper-font-caption {
      color: var(--light-theme-font-caption, #000000);
    }

    .light.paper-font-menu {
      color: var(--light-theme-font-menu, #000000);
    }

    .light.paper-font-button {
      color: var(--light-theme-font-button, #000000);
    }

    .light.paper-font-code2 {
      color: var(--light-theme-font-code2, #000000);
    }

    .light.paper-font-code1 {
      color: var(--light-theme-font-code1, #000000);
    }

    /*
    "Line wrapping only applies to Body, Subhead, Headline, and the smaller Display
    styles. All other styles should exist as single lines."
    */

    .dark.paper-font-display4 {
      color: var(--dark-theme-font-display4, #FFFFFF);
    }

    .dark.paper-font-display3 {
      color: var(--dark-theme-font-display3, #FFFFFF);
    }

    .dark.paper-font-display2 {
      color: var(--dark-theme-font-display2, #FFFFFF);
    }

    .dark.paper-font-display1 {
      color: var(--dark-theme-font-display1, #FFFFFF);
    }

    .dark.paper-font-headline {
      color: var(--dark-theme-font-headline, #FFFFFF);
    }

    .dark.paper-font-title {
      color: var(--dark-theme-font-title, #FFFFFF);
    }

    .dark.paper-font-subhead {
      color: var(--dark-theme-font-subhead, #FFFFFF);
    }

    .dark.paper-font-body2 {
      color: var(--dark-theme-font-body2, #FFFFFF);
    }

    .dark.paper-font-body1 {
      color: var(--dark-theme-font-body1, #FFFFFF);
    }

    .dark.paper-font-caption {
      color: var(--dark-theme-font-caption, #FFFFFF);
    }

    .dark.paper-font-menu {
      color: var(--dark-theme-font-menu, #FFFFFF);
    }

    .dark.paper-font-button {
      color: var(--dark-theme-font-button, #FFFFFF);
    }

    .dark.paper-font-code2 {
      color: var(--dark-theme-font-code2, #FFFFFF);
    }

    .dark.paper-font-code1 {
      color: var(--dark-theme-font-code1, #FFFFFF);
    }

    /*
    "Line wrapping only applies to Body, Subhead, Headline, and the smaller Display
    styles. All other styles should exist as single lines."
    */

    /*noinspection ALL*/
    .paper-font-display4,
    .paper-font-display3,
    .paper-font-display2,
    .paper-font-display1,
    .paper-font-headline,
    .paper-font-title,
    .paper-font-subhead,
    .paper-font-body2,
    .paper-font-body1,
    .paper-font-caption,
    .paper-font-menu,
    .paper-font-button {
    }

    /*noinspection ALL*/
    .paper-font-code2,
    .paper-font-code1 {
    }

    /*
    "Line wrapping only applies to Body, Subhead, Headline, and the smaller Display
    styles. All other styles should exist as single lines."
    */

    /*noinspection ALL*/
    .paper-font-display4 {
      @apply --paper-font-display4;
    }

    /*noinspection ALL*/
    .paper-font-display3 {
      @apply --paper-font-display3;
    }

    /*noinspection ALL*/
    .paper-font-display2 {
      @apply --paper-font-display2;
    }

    /*noinspection ALL*/
    .paper-font-display1 {
      @apply --paper-font-display1;
    }

    /*noinspection ALL*/
    .paper-font-headline {
      @apply --paper-font-headline;
    }

    /*noinspection ALL*/
    .paper-font-title {
      @apply --paper-font-title;
    }

    /*noinspection ALL*/
    .paper-font-subhead {
      @apply --paper-font-subhead;
    }

    /*noinspection ALL*/
    .paper-font-body2 {
      @apply --paper-font-body2;
    }

    /*noinspection ALL*/
    .paper-font-body1 {
      @apply --paper-font-body2;
    }

    /*noinspection ALL*/
    .paper-font-caption {
      @apply --paper-font-caption;
    }

    /*noinspection ALL*/
    .paper-font-menu {
      @apply --paper-font-menu;
    }

    /*noinspection ALL*/
    .paper-font-button {
      @apply --paper-font-button;
    }

    /*noinspection ALL*/
    .paper-font-code2 {
      @apply --paper-font-code2;
    }

    /*noinspection ALL*/
    .paper-font-code1 {
      @apply --paper-font-code1;
    }

    /* ===========================
    media-breakpoint-up
    ============================== */

    @media (min-width: 0) {
      /* media-breakpoint-up-xs */
      .paper-font-display4 {
      }

      /*noinspection ALL*/
      .paper-font-display3 {
      }

      /*noinspection ALL*/
      .paper-font-display2 {
      }

      /*noinspection ALL*/
      .paper-font-display1 {
      }

      /*noinspection ALL*/
      .paper-font-headline {
      }

      /*noinspection ALL*/
      .paper-font-title {
      }

      /*noinspection ALL*/
      .paper-font-subhead {
      }

      /*noinspection ALL*/
      .paper-font-body2 {
      }

      /*noinspection ALL*/
      .paper-font-body1 {
      }

      /*noinspection ALL*/
      .paper-font-caption {
      }

      /*noinspection ALL*/
      .paper-font-menu {
      }

      /*noinspection ALL*/
      .paper-font-button {
      }

      /*noinspection ALL*/
      .paper-font-code2 {
      }

      /*noinspection ALL*/
      .paper-font-code1 {
      }
    }

    @media (min-width: 544px) {
      /* media-breakpoint-up-sm */
      /*noinspection ALL*/
      .paper-font-display4 {
      }

      /*noinspection ALL*/
      .paper-font-display3 {
      }

      /*noinspection ALL*/
      .paper-font-display2 {
      }

      /*noinspection ALL*/
      .paper-font-display1 {
      }

      /*noinspection ALL*/
      .paper-font-headline {
      }

      /*noinspection ALL*/
      .paper-font-title {
      }

      /*noinspection ALL*/
      .paper-font-subhead {
      }

      /*noinspection ALL*/
      .paper-font-body2 {
      }

      /*noinspection ALL*/
      .paper-font-body1 {
      }

      /*noinspection ALL*/
      .paper-font-caption {
      }

      /*noinspection ALL*/
      .paper-font-menu {
      }

      /*noinspection ALL*/
      .paper-font-button {
      }

      /*noinspection ALL*/
      .paper-font-code2 {
      }

      /*noinspection ALL*/
      .paper-font-code1 {
      }
    }

    @media (min-width: 768px) {
      /* media-breakpoint-up-md */
      /*noinspection ALL*/
      .paper-font-display4 {

      }

      /*noinspection ALL*/
      .paper-font-display3 {
        font-size: 70px;
        font-weight: 400;
        letter-spacing: -.028em;
        line-height: 85px;
      }

      /*noinspection ALL*/
      .paper-font-display2 {
        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      }

      /*noinspection ALL*/
      .paper-font-display1 {
        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      }

      /*noinspection ALL*/
      .paper-font-headline {
        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      }

      /*noinspection ALL*/
      .paper-font-title {
        font-size: 24px;
        font-weight: 500;
        letter-spacing: -.012em;
        line-height: 32px;
      }

      /*noinspection ALL*/
      .paper-font-subhead {
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
      }

      /*noinspection ALL*/
      .paper-font-body2 {
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
      }

      /*noinspection ALL*/
      .paper-font-body1 {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }

      /*noinspection ALL*/
      .paper-font-caption {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }

      /*noinspection ALL*/
      .paper-font-menu {
      }

      /*noinspection ALL*/
      .paper-font-button {
      }

      /*noinspection ALL*/
      .paper-font-code2 {
      }

      /*noinspection ALL*/
      .paper-font-code1 {
      }
    }

    @media (min-width: 992px) {
      /* media-breakpoint-up-lg */
      /*noinspection ALL*/
      .paper-font-display4 {
      }

      /*noinspection ALL*/
      .paper-font-display3 {
      }

      /*noinspection ALL*/
      .paper-font-display2 {
      }

      /*noinspection ALL*/
      .paper-font-display1 {
      }

      /*noinspection ALL*/
      .paper-font-headline {
      }

      /*noinspection ALL*/
      .paper-font-title {
      }

      /*noinspection ALL*/
      .paper-font-subhead {
      }

      /*noinspection ALL*/
      .paper-font-body2 {
      }

      /*noinspection ALL*/
      .paper-font-body1 {
      }

      /*noinspection ALL*/
      .paper-font-caption {
      }

      /*noinspection ALL*/
      .paper-font-menu {
      }

      /*noinspection ALL*/
      .paper-font-button {
      }

      /*noinspection ALL*/
      .paper-font-code2 {
      }

      /*noinspection ALL*/
      .paper-font-code1 {
      }
    }

    @media (min-width: 1200px) {
      /* media-breakpoint-up-xl */
      /*noinspection ALL*/
      .paper-font-display4 {
      }

      /*noinspection ALL*/
      .paper-font-display3 {
      }

      /*noinspection ALL*/
      .paper-font-display2 {
      }

      /*noinspection ALL*/
      .paper-font-display1 {
      }

      /*noinspection ALL*/
      .paper-font-headline {
      }

      /*noinspection ALL*/
      .paper-font-title {
      }

      /*noinspection ALL*/
      .paper-font-subhead {
      }

      /*noinspection ALL*/
      .paper-font-body2 {
      }

      /*noinspection ALL*/
      .paper-font-body1 {
      }

      /*noinspection ALL*/
      .paper-font-caption {
      }

      /*noinspection ALL*/
      .paper-font-menu {
      }

      /*noinspection ALL*/
      .paper-font-button {
      }

      /*noinspection ALL*/
      .paper-font-code2 {
      }

      /*noinspection ALL*/
      .paper-font-code1 {
      }
    }

    /* ===========================
    media-breakpoint-down
    =============================*/

    @media (max-width: 543px) {
      /* media-breakpoint-up-xs */

    }

    @media (max-width: 767px) {
      /* media-breakpoint-down-sm */
      paper-button {
        font-size: 13px;
      }
    }

    @media (max-width: 991px) {
      /* media-breakpoint-down-md */
    }

    @media (max-width: 1199px) {
      /* media-breakpoint-down-lg */
    }

    /* ===========================
    media-breakpoint-only
    =============================*/

    @media (min-width: 0) and (max-width: 543px) {
      /* media-breakpoint-only-xs */
    }

    @media (min-width: 544px) and (max-width: 767px) {
      /* media-breakpoint-only-sm */
    }

    @media (min-width: 768px) and (max-width: 991px) {
      /* media-breakpoint-only-md */
    }

    @media (min-width: 992px) and (max-width: 1199px) {
      /* media-breakpoint-only-lg */
    }
  </style>
</template>
`;
styleElement.register('skin-typography');
