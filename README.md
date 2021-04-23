# vue-bootstrap-breakpoint-indicator
![npm](https://img.shields.io/npm/dt/vue-cli-plugin-bootstrap-breakpoint-indicator)

A Vue.js component that displays a small indicator of the current Bootstrap breakpoint (e.g. XS, SM, MD, LG or XL) in the top-left of the page. Useful during development to know which breakpoint you're styling for as you resize the viewport or device emulate.

Note: the element the component renders is positioned absolutely with some default styles, so it should appear in the top left of the viewport. You can customize this display by adding your own styles against `#vue-bootstrap-breakpoint-indicator`.

## Installation

### Vue CLI 

```js
vue add vue-cli-plugin-bootstrap-breakpoint-indicator
```

### Vue 2

```js
yarn add --dev vue-bootstrap-breakpoint-indicator
npm install --save-dev vue-bootstrap-breakpoint-indicator
```

### Browser

See [example](/examples/demo.html)

### Vue SFC

```vue
<template>
  <breakpoint-indicator></breakpoint-indicator>  
</template>

<script>
  import VueBootstrapBreakpointIndicator from 'vue-bootstrap-breakpoint-indicator';
  
  export default {
    name: 'app',
    components: {
      'breakpoint-indicator': VueBootstrapBreakpointIndicator
    }
  };
</script>

<style src="vue-bootstrap-breakpoint-indicator/dist/VueBootstrapBreakpointIndicator.css"></style>

<style lang="scss">
  // Your own styles
</style>
```
