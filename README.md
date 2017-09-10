# vue-bootstrap-breakpoint-indicator

A Vue.js component that displays a small indicator of the current Bootstrap breakpoint (e.g. XS, SM, MD, LG or XL) in the top-left of the page. Useful during development to know which breakpoint you're styling for as you resize the viewport or device emulate.

Note: the element the component renders is positioned absolutely with some default styles, so it should appear in the top left of the viewport. You can customize this display by adding your own styles against `#bootstrap-breakpoint-indicator`.

## Installation

```js
npm i --save-dev vue-bootstrap-breakpoint-indicator
```

### Browser

Include the script file, then install the component with `Vue.use(VueBootstrapBreakpointIndicator);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-bootstrap-breakpoint-indicator/dist/vue-bootstrap-breakpoint-indicator.min.js"></script>
<script type="text/javascript">
  Vue.use(VueBootstrapBreakpointIndicator);
</script>
```

### Module

```js
import VueBootstrapBreakpointIndicator from 'vue-bootstrap-breakpoint-indicator';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<vue-bootstrap-breakpoint-indicator></vue-bootstrap-breakpoint-indicator>
```

You may need to list it explicitly as a component you depend on when using it, e.g:

```javascript
export default {
    name: 'app',
    components: {
      'vue-bootstrap-breakpoint-indicator': VueBootstrapBreakpointIndicator
    }
  }
```
