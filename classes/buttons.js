/**
 @license
 Copyright (c) FabricElements. All rights reserved.

 `buttons`
 App color themes

 @group Skin Styles
 @demo demo/buttons.html skin-buttons
 */
import '@polymer/polymer/polymer-legacy.js';
import '../styles/buttons.js';

const styleElement = document.createElement('dom-module');
styleElement.innerHTML = `
<template>
  <!--suppress CssInvalidPseudoSelector -->
  <!--suppress CssUnresolvedCustomProperty -->
  <!--suppress CssUnresolvedCustomPropertySet -->
  <style>
    /*noinspection ALL*/
    a,
    a > paper-button {
      text-decoration: none;
      color: inherit;
    }

    /*noinspection ALL*/
    paper-button {
      text-decoration: none;
    }

    /* ===========================
    Buttons
    =============================*/
    /*noinspection ALL*/
    .btn-rounded {
      @apply --btn-rounded;
    }

    /* primary-color ==============================================================*/
    /*noinspection ALL*/
    .btn--primary-color:not([disabled]) {
      @apply --btn--primary-color;
    }

    /*noinspection ALL*/
    .btn-fill--primary-color:not([disabled]) {
      @apply --btn-fill--primary-color;
    }

    /*noinspection ALL*/
    .btn--light-primary-color:not([disabled]) {
      @apply --btn--light-primary-color;
    }

    /*noinspection ALL*/
    .btn-fill--light-primary-color:not([disabled]) {
      @apply --btn-fill--light-primary-color;
    }

    /*noinspection ALL*/
    .btn--dark-primary-color:not([disabled]) {
      @apply --btn--dark-primary-color;
    }

    /*noinspection ALL*/
    .btn-fill--dark-primary-color:not([disabled]) {
      @apply --btn-fill--dark-primary-color;
    }

    /*noinspection ALL*/
    .btn--accent-color:not([disabled]) {
      @apply --btn--accent-color;
    }

    /*noinspection ALL*/
    .btn-fill--accent-color:not([disabled]) {
      @apply --btn-fill--accent-color;
    }

    /*noinspection ALL*/
    .btn--light-accent-color:not([disabled]) {
      @apply --btn--light-accent-color;
    }

    /*noinspection ALL*/
    .btn-fill--light-accent-color:not([disabled]) {
      @apply --btn-fill--light-accent-color;
    }

    /*noinspection ALL*/
    .btn--dark-accent-color:not([disabled]) {
      @apply --btn--dark-accent-color;
    }

    /*noinspection ALL*/
    .btn-fill--dark-accent-color:not([disabled]) {
      @apply --btn-fill--dark-accent-color;
    }

    /* secondary-color ==============================================================*/
    /*noinspection ALL*/
    .btn--secondary-color:not([disabled]) {
      @apply --btn--secondary-color;
    }

    /*noinspection ALL*/
    .btn-fill--secondary-color:not([disabled]) {
      @apply --btn-fill--secondary-color;
    }

    /*noinspection ALL*/
    .btn--light-secondary-color:not([disabled]) {
      @apply --btn--light-secondary-color;
    }

    /*noinspection ALL*/
    .btn-fill--light-secondary-color:not([disabled]) {
      @apply --btn-fill--light-secondary-color;
    }

    /*noinspection ALL*/
    .btn--dark-secondary-color:not([disabled]) {
      @apply --btn--dark-secondary-color;
    }

    /*noinspection ALL*/
    .btn-fill--dark-secondary-color:not([disabled]) {
      @apply --btn-fill--dark-secondary-color;
    }

    /*noinspection ALL*/
    .btn--accent-secondary-color:not([disabled]) {
      @apply --btn--accent-secondary-color;
    }

    /*noinspection ALL*/
    .btn-fill--accent-secondary-color:not([disabled]) {
      @apply --btn-fill--accent-secondary-color;
    }

    /*noinspection ALL*/
    .btn--light-accent-secondary-color:not([disabled]) {
      @apply --btn--light-accent-secondary-color;
    }

    /*noinspection ALL*/
    .btn-fill--light-accent-secondary-color:not([disabled]) {
      @apply --btn-fill--light-accent-secondary-color;
    }

    /*noinspection ALL*/
    .btn--dark-accent-secondary-color:not([disabled]) {
      @apply --btn--dark-accent-secondary-color;
    }

    /*noinspection ALL*/
    .btn-fill--dark-accent-secondary-color:not([disabled]) {
    background-color: red;
      @apply --btn-fill--dark-accent-secondary-color;
    }

    /*=====================================*/
    /*noinspection ALL*/
    .btn-light:not([disabled]) {
      @apply --btn-light;
    }

    /*noinspection ALL*/
    .btn-light-white:not([disabled]) {
      @apply --btn-light-white;
    }

    /*noinspection ALL*/
    .btn--mid--dark:not([disabled]) {
      @apply --btn--mid--dark;
    }

    /*noinspection ALL*/
    .btn--dark:not([disabled]) {
      @apply --btn--dark;
    }
  </style>
</template>
`;
styleElement.register('skin-buttons');
