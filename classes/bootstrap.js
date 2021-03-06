const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<style>
  .align-baseline {
    vertical-align: baseline !important;
  }

  .align-top {
    vertical-align: top !important;
  }

  .align-middle {
    vertical-align: middle !important;
  }

  .align-bottom {
    vertical-align: bottom !important;
  }

  .align-text-bottom {
    vertical-align: text-bottom !important;
  }

  .align-text-top {
    vertical-align: text-top !important;
  }

  .border-0 {
    border: 0 !important;
  }

  .border-top-0 {
    border-top: 0 !important;
  }

  .border-right-0 {
    border-right: 0 !important;
  }

  .border-bottom-0 {
    border-bottom: 0 !important;
  }

  .border-left-0 {
    border-left: 0 !important;
  }

  .rounded {
    border-radius: 0.25rem;
  }

  .rounded-top {
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  .rounded-right {
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .rounded-bottom {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .rounded-left {
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  .rounded-circle {
    border-radius: 50%;
  }

  .rounded-0 {
    border-radius: 0;
  }

  .clearfix::after {
    display: block;
    content: "";
    clear: both;
  }

  .d-none {
    display: none !important;
  }

  .d-inline {
    display: inline !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-block {
    display: block !important;
  }

  .d-table {
    display: table !important;
  }

  .d-table-cell {
    display: table-cell !important;
  }

  .d-flex {
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: flex !important;
  }

  .d-inline-flex {
    display: -webkit-inline-box !important;
    display: -webkit-inline-flex !important;
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }

  @media (min-width: 576px) {
    .d-sm-none {
      display: none !important;
    }

    .d-sm-inline {
      display: inline !important;
    }

    .d-sm-inline-block {
      display: inline-block !important;
    }

    .d-sm-block {
      display: block !important;
    }

    .d-sm-table {
      display: table !important;
    }

    .d-sm-table-cell {
      display: table-cell !important;
    }

    .d-sm-flex {
      display: -webkit-box !important;
      display: -webkit-flex !important;
      display: -ms-flexbox !important;
      display: flex !important;
    }

    .d-sm-inline-flex {
      display: -webkit-inline-box !important;
      display: -webkit-inline-flex !important;
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }

  @media (min-width: 768px) {
    .d-md-none {
      display: none !important;
    }

    .d-md-inline {
      display: inline !important;
    }

    .d-md-inline-block {
      display: inline-block !important;
    }

    .d-md-block {
      display: block !important;
    }

    .d-md-table {
      display: table !important;
    }

    .d-md-table-cell {
      display: table-cell !important;
    }

    .d-md-flex {
      display: -webkit-box !important;
      display: -webkit-flex !important;
      display: -ms-flexbox !important;
      display: flex !important;
    }

    .d-md-inline-flex {
      display: -webkit-inline-box !important;
      display: -webkit-inline-flex !important;
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }

  @media (min-width: 992px) {
    .d-lg-none {
      display: none !important;
    }

    .d-lg-inline {
      display: inline !important;
    }

    .d-lg-inline-block {
      display: inline-block !important;
    }

    .d-lg-block {
      display: block !important;
    }

    .d-lg-table {
      display: table !important;
    }

    .d-lg-table-cell {
      display: table-cell !important;
    }

    .d-lg-flex {
      display: -webkit-box !important;
      display: -webkit-flex !important;
      display: -ms-flexbox !important;
      display: flex !important;
    }

    .d-lg-inline-flex {
      display: -webkit-inline-box !important;
      display: -webkit-inline-flex !important;
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }

  @media (min-width: 1200px) {
    .d-xl-none {
      display: none !important;
    }

    .d-xl-inline {
      display: inline !important;
    }

    .d-xl-inline-block {
      display: inline-block !important;
    }

    .d-xl-block {
      display: block !important;
    }

    .d-xl-table {
      display: table !important;
    }

    .d-xl-table-cell {
      display: table-cell !important;
    }

    .d-xl-flex {
      display: -webkit-box !important;
      display: -webkit-flex !important;
      display: -ms-flexbox !important;
      display: flex !important;
    }

    .d-xl-inline-flex {
      display: -webkit-inline-box !important;
      display: -webkit-inline-flex !important;
      display: -ms-inline-flexbox !important;
      display: inline-flex !important;
    }
  }

  .flex-first {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
  }

  .flex-last {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
  }

  .flex-unordered {
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
  }

  .flex-row {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: row !important;
    -ms-flex-direction: row !important;
    flex-direction: row !important;
  }

  .flex-column {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
    -webkit-flex-direction: column !important;
    -ms-flex-direction: column !important;
    flex-direction: column !important;
  }

  .flex-row-reverse {
    -webkit-box-orient: horizontal !important;
    -webkit-box-direction: reverse !important;
    -webkit-flex-direction: row-reverse !important;
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
  }

  .flex-column-reverse {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: reverse !important;
    -webkit-flex-direction: column-reverse !important;
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
  }

  .flex-wrap {
    -webkit-flex-wrap: wrap !important;
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
  }

  .flex-nowrap {
    -webkit-flex-wrap: nowrap !important;
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse {
    -webkit-flex-wrap: wrap-reverse !important;
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
  }

  .justify-content-start {
    -webkit-box-pack: start !important;
    -webkit-justify-content: flex-start !important;
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
  }

  .justify-content-end {
    -webkit-box-pack: end !important;
    -webkit-justify-content: flex-end !important;
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }

  .justify-content-center {
    -webkit-box-pack: center !important;
    -webkit-justify-content: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
  }

  .justify-content-between {
    -webkit-box-pack: justify !important;
    -webkit-justify-content: space-between !important;
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
  }

  .justify-content-around {
    -webkit-justify-content: space-around !important;
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
  }

  .align-items-start {
    -webkit-box-align: start !important;
    -webkit-align-items: flex-start !important;
    -ms-flex-align: start !important;
    align-items: flex-start !important;
  }

  .align-items-end {
    -webkit-box-align: end !important;
    -webkit-align-items: flex-end !important;
    -ms-flex-align: end !important;
    align-items: flex-end !important;
  }

  .align-items-center {
    -webkit-box-align: center !important;
    -webkit-align-items: center !important;
    -ms-flex-align: center !important;
    align-items: center !important;
  }

  .align-items-baseline {
    -webkit-box-align: baseline !important;
    -webkit-align-items: baseline !important;
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
  }

  .align-items-stretch {
    -webkit-box-align: stretch !important;
    -webkit-align-items: stretch !important;
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
  }

  .align-content-start {
    -webkit-align-content: flex-start !important;
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
  }

  .align-content-end {
    -webkit-align-content: flex-end !important;
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
  }

  .align-content-center {
    -webkit-align-content: center !important;
    -ms-flex-line-pack: center !important;
    align-content: center !important;
  }

  .align-content-between {
    -webkit-align-content: space-between !important;
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
  }

  .align-content-around {
    -webkit-align-content: space-around !important;
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
  }

  .align-content-stretch {
    -webkit-align-content: stretch !important;
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
  }

  .align-self-auto {
    -webkit-align-self: auto !important;
    -ms-flex-item-align: auto !important;
    -ms-grid-row-align: auto !important;
    align-self: auto !important;
  }

  .align-self-start {
    -webkit-align-self: flex-start !important;
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
  }

  .align-self-end {
    -webkit-align-self: flex-end !important;
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
  }

  .align-self-center {
    -webkit-align-self: center !important;
    -ms-flex-item-align: center !important;
    -ms-grid-row-align: center !important;
    align-self: center !important;
  }

  .align-self-baseline {
    -webkit-align-self: baseline !important;
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
  }

  .align-self-stretch {
    -webkit-align-self: stretch !important;
    -ms-flex-item-align: stretch !important;
    -ms-grid-row-align: stretch !important;
    align-self: stretch !important;
  }

  @media (min-width: 576px) {
    .flex-sm-first {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }

    .flex-sm-last {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }

    .flex-sm-unordered {
      -webkit-box-ordinal-group: 1;
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0;
    }

    .flex-sm-row {
      -webkit-box-orient: horizontal !important;
      -webkit-box-direction: normal !important;
      -webkit-flex-direction: row !important;
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }

    .flex-sm-column {
      -webkit-box-orient: vertical !important;
      -webkit-box-direction: normal !important;
      -webkit-flex-direction: column !important;
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }

    .flex-sm-row-reverse {
      -webkit-box-orient: horizontal !important;
      -webkit-box-direction: reverse !important;
      -webkit-flex-direction: row-reverse !important;
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }

    .flex-sm-column-reverse {
      -webkit-box-orient: vertical !important;
      -webkit-box-direction: reverse !important;
      -webkit-flex-direction: column-reverse !important;
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }

    .flex-sm-wrap {
      -webkit-flex-wrap: wrap !important;
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }

    .flex-sm-nowrap {
      -webkit-flex-wrap: nowrap !important;
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }

    .flex-sm-wrap-reverse {
      -webkit-flex-wrap: wrap-reverse !important;
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }

    .justify-content-sm-start {
      -webkit-box-pack: start !important;
      -webkit-justify-content: flex-start !important;
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }

    .justify-content-sm-end {
      -webkit-box-pack: end !important;
      -webkit-justify-content: flex-end !important;
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }

    .justify-content-sm-center {
      -webkit-box-pack: center !important;
      -webkit-justify-content: center !important;
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }

    .justify-content-sm-between {
      -webkit-box-pack: justify !important;
      -webkit-justify-content: space-between !important;
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }

    .justify-content-sm-around {
      -webkit-justify-content: space-around !important;
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }

    .align-items-sm-start {
      -webkit-box-align: start !important;
      -webkit-align-items: flex-start !important;
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }

    .align-items-sm-end {
      -webkit-box-align: end !important;
      -webkit-align-items: flex-end !important;
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }

    .align-items-sm-center {
      -webkit-box-align: center !important;
      -webkit-align-items: center !important;
      -ms-flex-align: center !important;
      align-items: center !important;
    }

    .align-items-sm-baseline {
      -webkit-box-align: baseline !important;
      -webkit-align-items: baseline !important;
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }

    .align-items-sm-stretch {
      -webkit-box-align: stretch !important;
      -webkit-align-items: stretch !important;
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }

    .align-content-sm-start {
      -webkit-align-content: flex-start !important;
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }

    .align-content-sm-end {
      -webkit-align-content: flex-end !important;
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }

    .align-content-sm-center {
      -webkit-align-content: center !important;
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }

    .align-content-sm-between {
      -webkit-align-content: space-between !important;
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }

    .align-content-sm-around {
      -webkit-align-content: space-around !important;
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }

    .align-content-sm-stretch {
      -webkit-align-content: stretch !important;
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }

    .align-self-sm-auto {
      -webkit-align-self: auto !important;
      -ms-flex-item-align: auto !important;
      -ms-grid-row-align: auto !important;
      align-self: auto !important;
    }

    .align-self-sm-start {
      -webkit-align-self: flex-start !important;
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }

    .align-self-sm-end {
      -webkit-align-self: flex-end !important;
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }

    .align-self-sm-center {
      -webkit-align-self: center !important;
      -ms-flex-item-align: center !important;
      -ms-grid-row-align: center !important;
      align-self: center !important;
    }

    .align-self-sm-baseline {
      -webkit-align-self: baseline !important;
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }

    .align-self-sm-stretch {
      -webkit-align-self: stretch !important;
      -ms-flex-item-align: stretch !important;
      -ms-grid-row-align: stretch !important;
      align-self: stretch !important;
    }
  }

  @media (min-width: 768px) {
    .flex-md-first {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }

    .flex-md-last {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }

    .flex-md-unordered {
      -webkit-box-ordinal-group: 1;
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0;
    }

    .flex-md-row {
      -webkit-box-orient: horizontal !important;
      -webkit-box-direction: normal !important;
      -webkit-flex-direction: row !important;
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }

    .flex-md-column {
      -webkit-box-orient: vertical !important;
      -webkit-box-direction: normal !important;
      -webkit-flex-direction: column !important;
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }

    .flex-md-row-reverse {
      -webkit-box-orient: horizontal !important;
      -webkit-box-direction: reverse !important;
      -webkit-flex-direction: row-reverse !important;
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }

    .flex-md-column-reverse {
      -webkit-box-orient: vertical !important;
      -webkit-box-direction: reverse !important;
      -webkit-flex-direction: column-reverse !important;
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }

    .flex-md-wrap {
      -webkit-flex-wrap: wrap !important;
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }

    .flex-md-nowrap {
      -webkit-flex-wrap: nowrap !important;
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }

    .flex-md-wrap-reverse {
      -webkit-flex-wrap: wrap-reverse !important;
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }

    .justify-content-md-start {
      -webkit-box-pack: start !important;
      -webkit-justify-content: flex-start !important;
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }

    .justify-content-md-end {
      -webkit-box-pack: end !important;
      -webkit-justify-content: flex-end !important;
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }

    .justify-content-md-center {
      -webkit-box-pack: center !important;
      -webkit-justify-content: center !important;
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }

    .justify-content-md-between {
      -webkit-box-pack: justify !important;
      -webkit-justify-content: space-between !important;
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }

    .justify-content-md-around {
      -webkit-justify-content: space-around !important;
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }

    .align-items-md-start {
      -webkit-box-align: start !important;
      -webkit-align-items: flex-start !important;
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }

    .align-items-md-end {
      -webkit-box-align: end !important;
      -webkit-align-items: flex-end !important;
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }

    .align-items-md-center {
      -webkit-box-align: center !important;
      -webkit-align-items: center !important;
      -ms-flex-align: center !important;
      align-items: center !important;
    }

    .align-items-md-baseline {
      -webkit-box-align: baseline !important;
      -webkit-align-items: baseline !important;
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }

    .align-items-md-stretch {
      -webkit-box-align: stretch !important;
      -webkit-align-items: stretch !important;
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }

    .align-content-md-start {
      -webkit-align-content: flex-start !important;
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }

    .align-content-md-end {
      -webkit-align-content: flex-end !important;
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }

    .align-content-md-center {
      -webkit-align-content: center !important;
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }

    .align-content-md-between {
      -webkit-align-content: space-between !important;
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }

    .align-content-md-around {
      -webkit-align-content: space-around !important;
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }

    .align-content-md-stretch {
      -webkit-align-content: stretch !important;
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }

    .align-self-md-auto {
      -webkit-align-self: auto !important;
      -ms-flex-item-align: auto !important;
      -ms-grid-row-align: auto !important;
      align-self: auto !important;
    }

    .align-self-md-start {
      -webkit-align-self: flex-start !important;
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }

    .align-self-md-end {
      -webkit-align-self: flex-end !important;
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }

    .align-self-md-center {
      -webkit-align-self: center !important;
      -ms-flex-item-align: center !important;
      -ms-grid-row-align: center !important;
      align-self: center !important;
    }

    .align-self-md-baseline {
      -webkit-align-self: baseline !important;
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }

    .align-self-md-stretch {
      -webkit-align-self: stretch !important;
      -ms-flex-item-align: stretch !important;
      -ms-grid-row-align: stretch !important;
      align-self: stretch !important;
    }
  }

  @media (min-width: 992px) {
    .flex-lg-first {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }

    .flex-lg-last {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }

    .flex-lg-unordered {
      -webkit-box-ordinal-group: 1;
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0;
    }

    .flex-lg-row {
      -webkit-box-orient: horizontal !important;
      -webkit-box-direction: normal !important;
      -webkit-flex-direction: row !important;
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }

    .flex-lg-column {
      -webkit-box-orient: vertical !important;
      -webkit-box-direction: normal !important;
      -webkit-flex-direction: column !important;
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }

    .flex-lg-row-reverse {
      -webkit-box-orient: horizontal !important;
      -webkit-box-direction: reverse !important;
      -webkit-flex-direction: row-reverse !important;
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }

    .flex-lg-column-reverse {
      -webkit-box-orient: vertical !important;
      -webkit-box-direction: reverse !important;
      -webkit-flex-direction: column-reverse !important;
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }

    .flex-lg-wrap {
      -webkit-flex-wrap: wrap !important;
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }

    .flex-lg-nowrap {
      -webkit-flex-wrap: nowrap !important;
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }

    .flex-lg-wrap-reverse {
      -webkit-flex-wrap: wrap-reverse !important;
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }

    .justify-content-lg-start {
      -webkit-box-pack: start !important;
      -webkit-justify-content: flex-start !important;
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }

    .justify-content-lg-end {
      -webkit-box-pack: end !important;
      -webkit-justify-content: flex-end !important;
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }

    .justify-content-lg-center {
      -webkit-box-pack: center !important;
      -webkit-justify-content: center !important;
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }

    .justify-content-lg-between {
      -webkit-box-pack: justify !important;
      -webkit-justify-content: space-between !important;
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }

    .justify-content-lg-around {
      -webkit-justify-content: space-around !important;
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }

    .align-items-lg-start {
      -webkit-box-align: start !important;
      -webkit-align-items: flex-start !important;
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }

    .align-items-lg-end {
      -webkit-box-align: end !important;
      -webkit-align-items: flex-end !important;
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }

    .align-items-lg-center {
      -webkit-box-align: center !important;
      -webkit-align-items: center !important;
      -ms-flex-align: center !important;
      align-items: center !important;
    }

    .align-items-lg-baseline {
      -webkit-box-align: baseline !important;
      -webkit-align-items: baseline !important;
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }

    .align-items-lg-stretch {
      -webkit-box-align: stretch !important;
      -webkit-align-items: stretch !important;
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }

    .align-content-lg-start {
      -webkit-align-content: flex-start !important;
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }

    .align-content-lg-end {
      -webkit-align-content: flex-end !important;
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }

    .align-content-lg-center {
      -webkit-align-content: center !important;
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }

    .align-content-lg-between {
      -webkit-align-content: space-between !important;
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }

    .align-content-lg-around {
      -webkit-align-content: space-around !important;
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }

    .align-content-lg-stretch {
      -webkit-align-content: stretch !important;
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }

    .align-self-lg-auto {
      -webkit-align-self: auto !important;
      -ms-flex-item-align: auto !important;
      -ms-grid-row-align: auto !important;
      align-self: auto !important;
    }

    .align-self-lg-start {
      -webkit-align-self: flex-start !important;
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }

    .align-self-lg-end {
      -webkit-align-self: flex-end !important;
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }

    .align-self-lg-center {
      -webkit-align-self: center !important;
      -ms-flex-item-align: center !important;
      -ms-grid-row-align: center !important;
      align-self: center !important;
    }

    .align-self-lg-baseline {
      -webkit-align-self: baseline !important;
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }

    .align-self-lg-stretch {
      -webkit-align-self: stretch !important;
      -ms-flex-item-align: stretch !important;
      -ms-grid-row-align: stretch !important;
      align-self: stretch !important;
    }
  }

  @media (min-width: 1200px) {
    .flex-xl-first {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }

    .flex-xl-last {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }

    .flex-xl-unordered {
      -webkit-box-ordinal-group: 1;
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0;
    }

    .flex-xl-row {
      -webkit-box-orient: horizontal !important;
      -webkit-box-direction: normal !important;
      -webkit-flex-direction: row !important;
      -ms-flex-direction: row !important;
      flex-direction: row !important;
    }

    .flex-xl-column {
      -webkit-box-orient: vertical !important;
      -webkit-box-direction: normal !important;
      -webkit-flex-direction: column !important;
      -ms-flex-direction: column !important;
      flex-direction: column !important;
    }

    .flex-xl-row-reverse {
      -webkit-box-orient: horizontal !important;
      -webkit-box-direction: reverse !important;
      -webkit-flex-direction: row-reverse !important;
      -ms-flex-direction: row-reverse !important;
      flex-direction: row-reverse !important;
    }

    .flex-xl-column-reverse {
      -webkit-box-orient: vertical !important;
      -webkit-box-direction: reverse !important;
      -webkit-flex-direction: column-reverse !important;
      -ms-flex-direction: column-reverse !important;
      flex-direction: column-reverse !important;
    }

    .flex-xl-wrap {
      -webkit-flex-wrap: wrap !important;
      -ms-flex-wrap: wrap !important;
      flex-wrap: wrap !important;
    }

    .flex-xl-nowrap {
      -webkit-flex-wrap: nowrap !important;
      -ms-flex-wrap: nowrap !important;
      flex-wrap: nowrap !important;
    }

    .flex-xl-wrap-reverse {
      -webkit-flex-wrap: wrap-reverse !important;
      -ms-flex-wrap: wrap-reverse !important;
      flex-wrap: wrap-reverse !important;
    }

    .justify-content-xl-start {
      -webkit-box-pack: start !important;
      -webkit-justify-content: flex-start !important;
      -ms-flex-pack: start !important;
      justify-content: flex-start !important;
    }

    .justify-content-xl-end {
      -webkit-box-pack: end !important;
      -webkit-justify-content: flex-end !important;
      -ms-flex-pack: end !important;
      justify-content: flex-end !important;
    }

    .justify-content-xl-center {
      -webkit-box-pack: center !important;
      -webkit-justify-content: center !important;
      -ms-flex-pack: center !important;
      justify-content: center !important;
    }

    .justify-content-xl-between {
      -webkit-box-pack: justify !important;
      -webkit-justify-content: space-between !important;
      -ms-flex-pack: justify !important;
      justify-content: space-between !important;
    }

    .justify-content-xl-around {
      -webkit-justify-content: space-around !important;
      -ms-flex-pack: distribute !important;
      justify-content: space-around !important;
    }

    .align-items-xl-start {
      -webkit-box-align: start !important;
      -webkit-align-items: flex-start !important;
      -ms-flex-align: start !important;
      align-items: flex-start !important;
    }

    .align-items-xl-end {
      -webkit-box-align: end !important;
      -webkit-align-items: flex-end !important;
      -ms-flex-align: end !important;
      align-items: flex-end !important;
    }

    .align-items-xl-center {
      -webkit-box-align: center !important;
      -webkit-align-items: center !important;
      -ms-flex-align: center !important;
      align-items: center !important;
    }

    .align-items-xl-baseline {
      -webkit-box-align: baseline !important;
      -webkit-align-items: baseline !important;
      -ms-flex-align: baseline !important;
      align-items: baseline !important;
    }

    .align-items-xl-stretch {
      -webkit-box-align: stretch !important;
      -webkit-align-items: stretch !important;
      -ms-flex-align: stretch !important;
      align-items: stretch !important;
    }

    .align-content-xl-start {
      -webkit-align-content: flex-start !important;
      -ms-flex-line-pack: start !important;
      align-content: flex-start !important;
    }

    .align-content-xl-end {
      -webkit-align-content: flex-end !important;
      -ms-flex-line-pack: end !important;
      align-content: flex-end !important;
    }

    .align-content-xl-center {
      -webkit-align-content: center !important;
      -ms-flex-line-pack: center !important;
      align-content: center !important;
    }

    .align-content-xl-between {
      -webkit-align-content: space-between !important;
      -ms-flex-line-pack: justify !important;
      align-content: space-between !important;
    }

    .align-content-xl-around {
      -webkit-align-content: space-around !important;
      -ms-flex-line-pack: distribute !important;
      align-content: space-around !important;
    }

    .align-content-xl-stretch {
      -webkit-align-content: stretch !important;
      -ms-flex-line-pack: stretch !important;
      align-content: stretch !important;
    }

    .align-self-xl-auto {
      -webkit-align-self: auto !important;
      -ms-flex-item-align: auto !important;
      -ms-grid-row-align: auto !important;
      align-self: auto !important;
    }

    .align-self-xl-start {
      -webkit-align-self: flex-start !important;
      -ms-flex-item-align: start !important;
      align-self: flex-start !important;
    }

    .align-self-xl-end {
      -webkit-align-self: flex-end !important;
      -ms-flex-item-align: end !important;
      align-self: flex-end !important;
    }

    .align-self-xl-center {
      -webkit-align-self: center !important;
      -ms-flex-item-align: center !important;
      -ms-grid-row-align: center !important;
      align-self: center !important;
    }

    .align-self-xl-baseline {
      -webkit-align-self: baseline !important;
      -ms-flex-item-align: baseline !important;
      align-self: baseline !important;
    }

    .align-self-xl-stretch {
      -webkit-align-self: stretch !important;
      -ms-flex-item-align: stretch !important;
      -ms-grid-row-align: stretch !important;
      align-self: stretch !important;
    }
  }

  .float-left {
    float: left !important;
  }

  .float-right {
    float: right !important;
  }

  .float-none {
    float: none !important;
  }

  @media (min-width: 576px) {
    .float-sm-left {
      float: left !important;
    }

    .float-sm-right {
      float: right !important;
    }

    .float-sm-none {
      float: none !important;
    }
  }

  @media (min-width: 768px) {
    .float-md-left {
      float: left !important;
    }

    .float-md-right {
      float: right !important;
    }

    .float-md-none {
      float: none !important;
    }
  }

  @media (min-width: 992px) {
    .float-lg-left {
      float: left !important;
    }

    .float-lg-right {
      float: right !important;
    }

    .float-lg-none {
      float: none !important;
    }
  }

  @media (min-width: 1200px) {
    .float-xl-left {
      float: left !important;
    }

    .float-xl-right {
      float: right !important;
    }

    .float-xl-none {
      float: none !important;
    }
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .fixed-bottom {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
  }

  .sticky-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1030;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .sr-only-focusable:active, .sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto;
  }

  .w-25 {
    width: 25% !important;
  }

  .w-50 {
    width: 50% !important;
  }

  .w-75 {
    width: 75% !important;
  }

  .w-100 {
    width: 100% !important;
  }

  .h-25 {
    height: 25% !important;
  }

  .h-50 {
    height: 50% !important;
  }

  .h-75 {
    height: 75% !important;
  }

  .h-100 {
    height: 100% !important;
  }

  .mw-100 {
    max-width: 100% !important;
  }

  .mh-100 {
    max-height: 100% !important;
  }

  .m-0 {
    margin: 0 0 !important;
  }

  .mt-0 {
    margin-top: 0 !important;
  }

  .mr-0 {
    margin-right: 0 !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .ml-0 {
    margin-left: 0 !important;
  }

  .mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .m-1 {
    margin: 0.25rem 0.25rem !important;
  }

  .mt-1 {
    margin-top: 0.25rem !important;
  }

  .mr-1 {
    margin-right: 0.25rem !important;
  }

  .mb-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-1 {
    margin-left: 0.25rem !important;
  }

  .mx-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .my-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .m-2 {
    margin: 0.5rem 0.5rem !important;
  }

  .mt-2 {
    margin-top: 0.5rem !important;
  }

  .mr-2 {
    margin-right: 0.5rem !important;
  }

  .mb-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-2 {
    margin-left: 0.5rem !important;
  }

  .mx-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .m-3 {
    margin: 1rem 1rem !important;
  }

  .mt-3 {
    margin-top: 1rem !important;
  }

  .mr-3 {
    margin-right: 1rem !important;
  }

  .mb-3 {
    margin-bottom: 1rem !important;
  }

  .ml-3 {
    margin-left: 1rem !important;
  }

  .mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .m-4 {
    margin: 1.5rem 1.5rem !important;
  }

  .mt-4 {
    margin-top: 1.5rem !important;
  }

  .mr-4 {
    margin-right: 1.5rem !important;
  }

  .mb-4 {
    margin-bottom: 1.5rem !important;
  }

  .ml-4 {
    margin-left: 1.5rem !important;
  }

  .mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .m-5 {
    margin: 3rem 3rem !important;
  }

  .mt-5 {
    margin-top: 3rem !important;
  }

  .mr-5 {
    margin-right: 3rem !important;
  }

  .mb-5 {
    margin-bottom: 3rem !important;
  }

  .ml-5 {
    margin-left: 3rem !important;
  }

  .mx-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .p-0 {
    padding: 0 0 !important;
  }

  .pt-0 {
    padding-top: 0 !important;
  }

  .pr-0 {
    padding-right: 0 !important;
  }

  .pb-0 {
    padding-bottom: 0 !important;
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .p-1 {
    padding: 0.25rem 0.25rem !important;
  }

  .pt-1 {
    padding-top: 0.25rem !important;
  }

  .pr-1 {
    padding-right: 0.25rem !important;
  }

  .pb-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-1 {
    padding-left: 0.25rem !important;
  }

  .px-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .p-2 {
    padding: 0.5rem 0.5rem !important;
  }

  .pt-2 {
    padding-top: 0.5rem !important;
  }

  .pr-2 {
    padding-right: 0.5rem !important;
  }

  .pb-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-2 {
    padding-left: 0.5rem !important;
  }

  .px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .p-3 {
    padding: 1rem 1rem !important;
  }

  .pt-3 {
    padding-top: 1rem !important;
  }

  .pr-3 {
    padding-right: 1rem !important;
  }

  .pb-3 {
    padding-bottom: 1rem !important;
  }

  .pl-3 {
    padding-left: 1rem !important;
  }

  .px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .p-4 {
    padding: 1.5rem 1.5rem !important;
  }

  .pt-4 {
    padding-top: 1.5rem !important;
  }

  .pr-4 {
    padding-right: 1.5rem !important;
  }

  .pb-4 {
    padding-bottom: 1.5rem !important;
  }

  .pl-4 {
    padding-left: 1.5rem !important;
  }

  .px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .p-5 {
    padding: 3rem 3rem !important;
  }

  .pt-5 {
    padding-top: 3rem !important;
  }

  .pr-5 {
    padding-right: 3rem !important;
  }

  .pb-5 {
    padding-bottom: 3rem !important;
  }

  .pl-5 {
    padding-left: 3rem !important;
  }

  .px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .m-auto {
    margin: auto !important;
  }

  .mt-auto {
    margin-top: auto !important;
  }

  .mr-auto {
    margin-right: auto !important;
  }

  .mb-auto {
    margin-bottom: auto !important;
  }

  .ml-auto {
    margin-left: auto !important;
  }

  .mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  @media (min-width: 576px) {
    .m-sm-0 {
      margin: 0 0 !important;
    }

    .mt-sm-0 {
      margin-top: 0 !important;
    }

    .mr-sm-0 {
      margin-right: 0 !important;
    }

    .mb-sm-0 {
      margin-bottom: 0 !important;
    }

    .ml-sm-0 {
      margin-left: 0 !important;
    }

    .mx-sm-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .my-sm-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .m-sm-1 {
      margin: 0.25rem 0.25rem !important;
    }

    .mt-sm-1 {
      margin-top: 0.25rem !important;
    }

    .mr-sm-1 {
      margin-right: 0.25rem !important;
    }

    .mb-sm-1 {
      margin-bottom: 0.25rem !important;
    }

    .ml-sm-1 {
      margin-left: 0.25rem !important;
    }

    .mx-sm-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }

    .my-sm-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }

    .m-sm-2 {
      margin: 0.5rem 0.5rem !important;
    }

    .mt-sm-2 {
      margin-top: 0.5rem !important;
    }

    .mr-sm-2 {
      margin-right: 0.5rem !important;
    }

    .mb-sm-2 {
      margin-bottom: 0.5rem !important;
    }

    .ml-sm-2 {
      margin-left: 0.5rem !important;
    }

    .mx-sm-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }

    .my-sm-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    .m-sm-3 {
      margin: 1rem 1rem !important;
    }

    .mt-sm-3 {
      margin-top: 1rem !important;
    }

    .mr-sm-3 {
      margin-right: 1rem !important;
    }

    .mb-sm-3 {
      margin-bottom: 1rem !important;
    }

    .ml-sm-3 {
      margin-left: 1rem !important;
    }

    .mx-sm-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    .my-sm-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }

    .m-sm-4 {
      margin: 1.5rem 1.5rem !important;
    }

    .mt-sm-4 {
      margin-top: 1.5rem !important;
    }

    .mr-sm-4 {
      margin-right: 1.5rem !important;
    }

    .mb-sm-4 {
      margin-bottom: 1.5rem !important;
    }

    .ml-sm-4 {
      margin-left: 1.5rem !important;
    }

    .mx-sm-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }

    .my-sm-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .m-sm-5 {
      margin: 3rem 3rem !important;
    }

    .mt-sm-5 {
      margin-top: 3rem !important;
    }

    .mr-sm-5 {
      margin-right: 3rem !important;
    }

    .mb-sm-5 {
      margin-bottom: 3rem !important;
    }

    .ml-sm-5 {
      margin-left: 3rem !important;
    }

    .mx-sm-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }

    .my-sm-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }

    .p-sm-0 {
      padding: 0 0 !important;
    }

    .pt-sm-0 {
      padding-top: 0 !important;
    }

    .pr-sm-0 {
      padding-right: 0 !important;
    }

    .pb-sm-0 {
      padding-bottom: 0 !important;
    }

    .pl-sm-0 {
      padding-left: 0 !important;
    }

    .px-sm-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .py-sm-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .p-sm-1 {
      padding: 0.25rem 0.25rem !important;
    }

    .pt-sm-1 {
      padding-top: 0.25rem !important;
    }

    .pr-sm-1 {
      padding-right: 0.25rem !important;
    }

    .pb-sm-1 {
      padding-bottom: 0.25rem !important;
    }

    .pl-sm-1 {
      padding-left: 0.25rem !important;
    }

    .px-sm-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }

    .py-sm-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }

    .p-sm-2 {
      padding: 0.5rem 0.5rem !important;
    }

    .pt-sm-2 {
      padding-top: 0.5rem !important;
    }

    .pr-sm-2 {
      padding-right: 0.5rem !important;
    }

    .pb-sm-2 {
      padding-bottom: 0.5rem !important;
    }

    .pl-sm-2 {
      padding-left: 0.5rem !important;
    }

    .px-sm-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }

    .py-sm-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .p-sm-3 {
      padding: 1rem 1rem !important;
    }

    .pt-sm-3 {
      padding-top: 1rem !important;
    }

    .pr-sm-3 {
      padding-right: 1rem !important;
    }

    .pb-sm-3 {
      padding-bottom: 1rem !important;
    }

    .pl-sm-3 {
      padding-left: 1rem !important;
    }

    .px-sm-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }

    .py-sm-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    .p-sm-4 {
      padding: 1.5rem 1.5rem !important;
    }

    .pt-sm-4 {
      padding-top: 1.5rem !important;
    }

    .pr-sm-4 {
      padding-right: 1.5rem !important;
    }

    .pb-sm-4 {
      padding-bottom: 1.5rem !important;
    }

    .pl-sm-4 {
      padding-left: 1.5rem !important;
    }

    .px-sm-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }

    .py-sm-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    .p-sm-5 {
      padding: 3rem 3rem !important;
    }

    .pt-sm-5 {
      padding-top: 3rem !important;
    }

    .pr-sm-5 {
      padding-right: 3rem !important;
    }

    .pb-sm-5 {
      padding-bottom: 3rem !important;
    }

    .pl-sm-5 {
      padding-left: 3rem !important;
    }

    .px-sm-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }

    .py-sm-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .m-sm-auto {
      margin: auto !important;
    }

    .mt-sm-auto {
      margin-top: auto !important;
    }

    .mr-sm-auto {
      margin-right: auto !important;
    }

    .mb-sm-auto {
      margin-bottom: auto !important;
    }

    .ml-sm-auto {
      margin-left: auto !important;
    }

    .mx-sm-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-sm-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
  }

  @media (min-width: 768px) {
    .m-md-0 {
      margin: 0 0 !important;
    }

    .mt-md-0 {
      margin-top: 0 !important;
    }

    .mr-md-0 {
      margin-right: 0 !important;
    }

    .mb-md-0 {
      margin-bottom: 0 !important;
    }

    .ml-md-0 {
      margin-left: 0 !important;
    }

    .mx-md-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .my-md-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .m-md-1 {
      margin: 0.25rem 0.25rem !important;
    }

    .mt-md-1 {
      margin-top: 0.25rem !important;
    }

    .mr-md-1 {
      margin-right: 0.25rem !important;
    }

    .mb-md-1 {
      margin-bottom: 0.25rem !important;
    }

    .ml-md-1 {
      margin-left: 0.25rem !important;
    }

    .mx-md-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }

    .my-md-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }

    .m-md-2 {
      margin: 0.5rem 0.5rem !important;
    }

    .mt-md-2 {
      margin-top: 0.5rem !important;
    }

    .mr-md-2 {
      margin-right: 0.5rem !important;
    }

    .mb-md-2 {
      margin-bottom: 0.5rem !important;
    }

    .ml-md-2 {
      margin-left: 0.5rem !important;
    }

    .mx-md-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }

    .my-md-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    .m-md-3 {
      margin: 1rem 1rem !important;
    }

    .mt-md-3 {
      margin-top: 1rem !important;
    }

    .mr-md-3 {
      margin-right: 1rem !important;
    }

    .mb-md-3 {
      margin-bottom: 1rem !important;
    }

    .ml-md-3 {
      margin-left: 1rem !important;
    }

    .mx-md-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    .my-md-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }

    .m-md-4 {
      margin: 1.5rem 1.5rem !important;
    }

    .mt-md-4 {
      margin-top: 1.5rem !important;
    }

    .mr-md-4 {
      margin-right: 1.5rem !important;
    }

    .mb-md-4 {
      margin-bottom: 1.5rem !important;
    }

    .ml-md-4 {
      margin-left: 1.5rem !important;
    }

    .mx-md-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }

    .my-md-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .m-md-5 {
      margin: 3rem 3rem !important;
    }

    .mt-md-5 {
      margin-top: 3rem !important;
    }

    .mr-md-5 {
      margin-right: 3rem !important;
    }

    .mb-md-5 {
      margin-bottom: 3rem !important;
    }

    .ml-md-5 {
      margin-left: 3rem !important;
    }

    .mx-md-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }

    .my-md-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }

    .p-md-0 {
      padding: 0 0 !important;
    }

    .pt-md-0 {
      padding-top: 0 !important;
    }

    .pr-md-0 {
      padding-right: 0 !important;
    }

    .pb-md-0 {
      padding-bottom: 0 !important;
    }

    .pl-md-0 {
      padding-left: 0 !important;
    }

    .px-md-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .py-md-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .p-md-1 {
      padding: 0.25rem 0.25rem !important;
    }

    .pt-md-1 {
      padding-top: 0.25rem !important;
    }

    .pr-md-1 {
      padding-right: 0.25rem !important;
    }

    .pb-md-1 {
      padding-bottom: 0.25rem !important;
    }

    .pl-md-1 {
      padding-left: 0.25rem !important;
    }

    .px-md-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }

    .py-md-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }

    .p-md-2 {
      padding: 0.5rem 0.5rem !important;
    }

    .pt-md-2 {
      padding-top: 0.5rem !important;
    }

    .pr-md-2 {
      padding-right: 0.5rem !important;
    }

    .pb-md-2 {
      padding-bottom: 0.5rem !important;
    }

    .pl-md-2 {
      padding-left: 0.5rem !important;
    }

    .px-md-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }

    .py-md-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .p-md-3 {
      padding: 1rem 1rem !important;
    }

    .pt-md-3 {
      padding-top: 1rem !important;
    }

    .pr-md-3 {
      padding-right: 1rem !important;
    }

    .pb-md-3 {
      padding-bottom: 1rem !important;
    }

    .pl-md-3 {
      padding-left: 1rem !important;
    }

    .px-md-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }

    .py-md-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    .p-md-4 {
      padding: 1.5rem 1.5rem !important;
    }

    .pt-md-4 {
      padding-top: 1.5rem !important;
    }

    .pr-md-4 {
      padding-right: 1.5rem !important;
    }

    .pb-md-4 {
      padding-bottom: 1.5rem !important;
    }

    .pl-md-4 {
      padding-left: 1.5rem !important;
    }

    .px-md-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }

    .py-md-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    .p-md-5 {
      padding: 3rem 3rem !important;
    }

    .pt-md-5 {
      padding-top: 3rem !important;
    }

    .pr-md-5 {
      padding-right: 3rem !important;
    }

    .pb-md-5 {
      padding-bottom: 3rem !important;
    }

    .pl-md-5 {
      padding-left: 3rem !important;
    }

    .px-md-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }

    .py-md-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .m-md-auto {
      margin: auto !important;
    }

    .mt-md-auto {
      margin-top: auto !important;
    }

    .mr-md-auto {
      margin-right: auto !important;
    }

    .mb-md-auto {
      margin-bottom: auto !important;
    }

    .ml-md-auto {
      margin-left: auto !important;
    }

    .mx-md-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-md-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
  }

  @media (min-width: 992px) {
    .m-lg-0 {
      margin: 0 0 !important;
    }

    .mt-lg-0 {
      margin-top: 0 !important;
    }

    .mr-lg-0 {
      margin-right: 0 !important;
    }

    .mb-lg-0 {
      margin-bottom: 0 !important;
    }

    .ml-lg-0 {
      margin-left: 0 !important;
    }

    .mx-lg-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .my-lg-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .m-lg-1 {
      margin: 0.25rem 0.25rem !important;
    }

    .mt-lg-1 {
      margin-top: 0.25rem !important;
    }

    .mr-lg-1 {
      margin-right: 0.25rem !important;
    }

    .mb-lg-1 {
      margin-bottom: 0.25rem !important;
    }

    .ml-lg-1 {
      margin-left: 0.25rem !important;
    }

    .mx-lg-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }

    .my-lg-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }

    .m-lg-2 {
      margin: 0.5rem 0.5rem !important;
    }

    .mt-lg-2 {
      margin-top: 0.5rem !important;
    }

    .mr-lg-2 {
      margin-right: 0.5rem !important;
    }

    .mb-lg-2 {
      margin-bottom: 0.5rem !important;
    }

    .ml-lg-2 {
      margin-left: 0.5rem !important;
    }

    .mx-lg-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }

    .my-lg-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    .m-lg-3 {
      margin: 1rem 1rem !important;
    }

    .mt-lg-3 {
      margin-top: 1rem !important;
    }

    .mr-lg-3 {
      margin-right: 1rem !important;
    }

    .mb-lg-3 {
      margin-bottom: 1rem !important;
    }

    .ml-lg-3 {
      margin-left: 1rem !important;
    }

    .mx-lg-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    .my-lg-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }

    .m-lg-4 {
      margin: 1.5rem 1.5rem !important;
    }

    .mt-lg-4 {
      margin-top: 1.5rem !important;
    }

    .mr-lg-4 {
      margin-right: 1.5rem !important;
    }

    .mb-lg-4 {
      margin-bottom: 1.5rem !important;
    }

    .ml-lg-4 {
      margin-left: 1.5rem !important;
    }

    .mx-lg-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }

    .my-lg-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .m-lg-5 {
      margin: 3rem 3rem !important;
    }

    .mt-lg-5 {
      margin-top: 3rem !important;
    }

    .mr-lg-5 {
      margin-right: 3rem !important;
    }

    .mb-lg-5 {
      margin-bottom: 3rem !important;
    }

    .ml-lg-5 {
      margin-left: 3rem !important;
    }

    .mx-lg-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }

    .my-lg-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }

    .p-lg-0 {
      padding: 0 0 !important;
    }

    .pt-lg-0 {
      padding-top: 0 !important;
    }

    .pr-lg-0 {
      padding-right: 0 !important;
    }

    .pb-lg-0 {
      padding-bottom: 0 !important;
    }

    .pl-lg-0 {
      padding-left: 0 !important;
    }

    .px-lg-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .py-lg-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .p-lg-1 {
      padding: 0.25rem 0.25rem !important;
    }

    .pt-lg-1 {
      padding-top: 0.25rem !important;
    }

    .pr-lg-1 {
      padding-right: 0.25rem !important;
    }

    .pb-lg-1 {
      padding-bottom: 0.25rem !important;
    }

    .pl-lg-1 {
      padding-left: 0.25rem !important;
    }

    .px-lg-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }

    .py-lg-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }

    .p-lg-2 {
      padding: 0.5rem 0.5rem !important;
    }

    .pt-lg-2 {
      padding-top: 0.5rem !important;
    }

    .pr-lg-2 {
      padding-right: 0.5rem !important;
    }

    .pb-lg-2 {
      padding-bottom: 0.5rem !important;
    }

    .pl-lg-2 {
      padding-left: 0.5rem !important;
    }

    .px-lg-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }

    .py-lg-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .p-lg-3 {
      padding: 1rem 1rem !important;
    }

    .pt-lg-3 {
      padding-top: 1rem !important;
    }

    .pr-lg-3 {
      padding-right: 1rem !important;
    }

    .pb-lg-3 {
      padding-bottom: 1rem !important;
    }

    .pl-lg-3 {
      padding-left: 1rem !important;
    }

    .px-lg-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }

    .py-lg-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    .p-lg-4 {
      padding: 1.5rem 1.5rem !important;
    }

    .pt-lg-4 {
      padding-top: 1.5rem !important;
    }

    .pr-lg-4 {
      padding-right: 1.5rem !important;
    }

    .pb-lg-4 {
      padding-bottom: 1.5rem !important;
    }

    .pl-lg-4 {
      padding-left: 1.5rem !important;
    }

    .px-lg-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }

    .py-lg-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    .p-lg-5 {
      padding: 3rem 3rem !important;
    }

    .pt-lg-5 {
      padding-top: 3rem !important;
    }

    .pr-lg-5 {
      padding-right: 3rem !important;
    }

    .pb-lg-5 {
      padding-bottom: 3rem !important;
    }

    .pl-lg-5 {
      padding-left: 3rem !important;
    }

    .px-lg-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }

    .py-lg-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .m-lg-auto {
      margin: auto !important;
    }

    .mt-lg-auto {
      margin-top: auto !important;
    }

    .mr-lg-auto {
      margin-right: auto !important;
    }

    .mb-lg-auto {
      margin-bottom: auto !important;
    }

    .ml-lg-auto {
      margin-left: auto !important;
    }

    .mx-lg-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-lg-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
  }

  @media (min-width: 1200px) {
    .m-xl-0 {
      margin: 0 0 !important;
    }

    .mt-xl-0 {
      margin-top: 0 !important;
    }

    .mr-xl-0 {
      margin-right: 0 !important;
    }

    .mb-xl-0 {
      margin-bottom: 0 !important;
    }

    .ml-xl-0 {
      margin-left: 0 !important;
    }

    .mx-xl-0 {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .my-xl-0 {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .m-xl-1 {
      margin: 0.25rem 0.25rem !important;
    }

    .mt-xl-1 {
      margin-top: 0.25rem !important;
    }

    .mr-xl-1 {
      margin-right: 0.25rem !important;
    }

    .mb-xl-1 {
      margin-bottom: 0.25rem !important;
    }

    .ml-xl-1 {
      margin-left: 0.25rem !important;
    }

    .mx-xl-1 {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }

    .my-xl-1 {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }

    .m-xl-2 {
      margin: 0.5rem 0.5rem !important;
    }

    .mt-xl-2 {
      margin-top: 0.5rem !important;
    }

    .mr-xl-2 {
      margin-right: 0.5rem !important;
    }

    .mb-xl-2 {
      margin-bottom: 0.5rem !important;
    }

    .ml-xl-2 {
      margin-left: 0.5rem !important;
    }

    .mx-xl-2 {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }

    .my-xl-2 {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    .m-xl-3 {
      margin: 1rem 1rem !important;
    }

    .mt-xl-3 {
      margin-top: 1rem !important;
    }

    .mr-xl-3 {
      margin-right: 1rem !important;
    }

    .mb-xl-3 {
      margin-bottom: 1rem !important;
    }

    .ml-xl-3 {
      margin-left: 1rem !important;
    }

    .mx-xl-3 {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    .my-xl-3 {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }

    .m-xl-4 {
      margin: 1.5rem 1.5rem !important;
    }

    .mt-xl-4 {
      margin-top: 1.5rem !important;
    }

    .mr-xl-4 {
      margin-right: 1.5rem !important;
    }

    .mb-xl-4 {
      margin-bottom: 1.5rem !important;
    }

    .ml-xl-4 {
      margin-left: 1.5rem !important;
    }

    .mx-xl-4 {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }

    .my-xl-4 {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .m-xl-5 {
      margin: 3rem 3rem !important;
    }

    .mt-xl-5 {
      margin-top: 3rem !important;
    }

    .mr-xl-5 {
      margin-right: 3rem !important;
    }

    .mb-xl-5 {
      margin-bottom: 3rem !important;
    }

    .ml-xl-5 {
      margin-left: 3rem !important;
    }

    .mx-xl-5 {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }

    .my-xl-5 {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }

    .p-xl-0 {
      padding: 0 0 !important;
    }

    .pt-xl-0 {
      padding-top: 0 !important;
    }

    .pr-xl-0 {
      padding-right: 0 !important;
    }

    .pb-xl-0 {
      padding-bottom: 0 !important;
    }

    .pl-xl-0 {
      padding-left: 0 !important;
    }

    .px-xl-0 {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .py-xl-0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .p-xl-1 {
      padding: 0.25rem 0.25rem !important;
    }

    .pt-xl-1 {
      padding-top: 0.25rem !important;
    }

    .pr-xl-1 {
      padding-right: 0.25rem !important;
    }

    .pb-xl-1 {
      padding-bottom: 0.25rem !important;
    }

    .pl-xl-1 {
      padding-left: 0.25rem !important;
    }

    .px-xl-1 {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }

    .py-xl-1 {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }

    .p-xl-2 {
      padding: 0.5rem 0.5rem !important;
    }

    .pt-xl-2 {
      padding-top: 0.5rem !important;
    }

    .pr-xl-2 {
      padding-right: 0.5rem !important;
    }

    .pb-xl-2 {
      padding-bottom: 0.5rem !important;
    }

    .pl-xl-2 {
      padding-left: 0.5rem !important;
    }

    .px-xl-2 {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }

    .py-xl-2 {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .p-xl-3 {
      padding: 1rem 1rem !important;
    }

    .pt-xl-3 {
      padding-top: 1rem !important;
    }

    .pr-xl-3 {
      padding-right: 1rem !important;
    }

    .pb-xl-3 {
      padding-bottom: 1rem !important;
    }

    .pl-xl-3 {
      padding-left: 1rem !important;
    }

    .px-xl-3 {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }

    .py-xl-3 {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    .p-xl-4 {
      padding: 1.5rem 1.5rem !important;
    }

    .pt-xl-4 {
      padding-top: 1.5rem !important;
    }

    .pr-xl-4 {
      padding-right: 1.5rem !important;
    }

    .pb-xl-4 {
      padding-bottom: 1.5rem !important;
    }

    .pl-xl-4 {
      padding-left: 1.5rem !important;
    }

    .px-xl-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }

    .py-xl-4 {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    .p-xl-5 {
      padding: 3rem 3rem !important;
    }

    .pt-xl-5 {
      padding-top: 3rem !important;
    }

    .pr-xl-5 {
      padding-right: 3rem !important;
    }

    .pb-xl-5 {
      padding-bottom: 3rem !important;
    }

    .pl-xl-5 {
      padding-left: 3rem !important;
    }

    .px-xl-5 {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }

    .py-xl-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .m-xl-auto {
      margin: auto !important;
    }

    .mt-xl-auto {
      margin-top: auto !important;
    }

    .mr-xl-auto {
      margin-right: auto !important;
    }

    .mb-xl-auto {
      margin-bottom: auto !important;
    }

    .ml-xl-auto {
      margin-left: auto !important;
    }

    .mx-xl-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .my-xl-auto {
      margin-top: auto !important;
      margin-bottom: auto !important;
    }
  }

  .text-justify {
    text-align: justify !important;
  }

  .text-nowrap {
    white-space: nowrap !important;
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .text-left {
    text-align: left !important;
  }

  .text-right {
    text-align: right !important;
  }

  .text-center {
    text-align: center !important;
  }

  @media (min-width: 576px) {
    .text-sm-left {
      text-align: left !important;
    }

    .text-sm-right {
      text-align: right !important;
    }

    .text-sm-center {
      text-align: center !important;
    }
  }

  @media (min-width: 768px) {
    .text-md-left {
      text-align: left !important;
    }

    .text-md-right {
      text-align: right !important;
    }

    .text-md-center {
      text-align: center !important;
    }
  }

  @media (min-width: 992px) {
    .text-lg-left {
      text-align: left !important;
    }

    .text-lg-right {
      text-align: right !important;
    }

    .text-lg-center {
      text-align: center !important;
    }
  }

  @media (min-width: 1200px) {
    .text-xl-left {
      text-align: left !important;
    }

    .text-xl-right {
      text-align: right !important;
    }

    .text-xl-center {
      text-align: center !important;
    }
  }

  .text-lowercase {
    text-transform: lowercase !important;
  }

  .text-uppercase {
    text-transform: uppercase !important;
  }

  .text-capitalize {
    text-transform: capitalize !important;
  }

  .font-weight-normal {
    font-weight: normal;
  }

  .font-weight-bold {
    font-weight: bold;
  }

  .font-italic {
    font-style: italic;
  }

  .text-white {
    color: #fff !important;
  }

  .text-muted {
    color: #636c72 !important;
  }

  a.text-muted:focus, a.text-muted:hover {
    color: #4b5257 !important;
  }

  .text-primary {
    color: #0275d8 !important;
  }

  a.text-primary:focus, a.text-primary:hover {
    color: #025aa5 !important;
  }

  .text-success {
    color: #5cb85c !important;
  }

  a.text-success:focus, a.text-success:hover {
    color: #449d44 !important;
  }

  .text-info {
    color: #5bc0de !important;
  }

  a.text-info:focus, a.text-info:hover {
    color: #31b0d5 !important;
  }

  .text-warning {
    color: #f0ad4e !important;
  }

  a.text-warning:focus, a.text-warning:hover {
    color: #ec971f !important;
  }

  .text-danger {
    color: #d9534f !important;
  }

  a.text-danger:focus, a.text-danger:hover {
    color: #c9302c !important;
  }

  .text-gray-dark {
    color: #292b2c !important;
  }

  a.text-gray-dark:focus, a.text-gray-dark:hover {
    color: #101112 !important;
  }

  .text-hide {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }

  .invisible {
    visibility: hidden !important;
  }

  [hidden] {
    display: none !important;
  }

  .hidden-xs-up {
    display: none !important;
  }

  @media (max-width: 575px) {
    .hidden-xs-down {
      display: none !important;
    }
  }

  @media (min-width: 576px) {
    .hidden-sm-up {
      display: none !important;
    }
  }

  @media (max-width: 767px) {
    .hidden-sm-down {
      display: none !important;
    }
  }

  @media (min-width: 768px) {
    .hidden-md-up {
      display: none !important;
    }
  }

  @media (max-width: 991px) {
    .hidden-md-down {
      display: none !important;
    }
  }

  @media (min-width: 992px) {
    .hidden-lg-up {
      display: none !important;
    }
  }

  @media (max-width: 1199px) {
    .hidden-lg-down {
      display: none !important;
    }
  }

  @media (min-width: 1200px) {
    .hidden-xl-up {
      display: none !important;
    }
  }

  .hidden-xl-down {
    display: none !important;
  }

  .visible-print-block {
    display: none !important;
  }

  @media print {
    .visible-print-block {
      display: block !important;
    }
  }

  .visible-print-inline {
    display: none !important;
  }

  @media print {
    .visible-print-inline {
      display: inline !important;
    }
  }

  .visible-print-inline-block {
    display: none !important;
  }

  @media print {
    .visible-print-inline-block {
      display: inline-block !important;
    }
  }

  @media print {
    .hidden-print {
      display: none !important;
    }
  }
</style>`;

document.head.appendChild($_documentContainer.content);

/**
 @license
 Copyright (c) FabricElements. All rights reserved.

 `skin-styles-bootstrap` is a supercharged Bootstrap grid.
 https://github.com/twbs/bootstrap/blob/v4-dev/dist/css/bootstrap.css

 @group Skin Styles
 @demo demo/grid.html bootstrap
 */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
