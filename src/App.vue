<template>
  <div id="vue-bootstrap-breakpoint-indicator">
    <span class="d-inline-block d-sm-none">XS</span>
    <span class="d-none d-sm-inline-block d-md-none">SM</span>
    <span class="d-none d-md-inline-block d-lg-none">MD</span>
    <span class="d-none d-lg-inline-block d-xl-none">LG</span>
    <span class="d-none d-xl-inline-block">XL</span>
  </div>
</template>

<style>
  #vue-bootstrap-breakpoint-indicator {
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: #ccc;
    font-size: 1.6rem;
    margin: 2px;
    padding: 2px 4px;
    border-radius: 2px;
    opacity: 0.5;
  }

  @media all and (min-width: 1200px)  {
    #vue-bootstrap-breakpoint-indicator {
      font-size: 1.1rem;
    }
  }
</style>
