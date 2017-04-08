# `glamorous-jsxstyle` Components

This package exports the components from [`jsxstyle`](https://github.com/smyte/jsxstyle) using [`glamorous`](https://github.com/paypal/glamorous/).

From [`jsxstyle`](https://github.com/smyte/jsxstyle):

> `jsxstyle` includes components corresponding to every potential value of the CSS `display` property.

This package follows that same purpose and generates and exposes components named after `display` properties. The list of components generated are:

* `View`
* `Block`
* `InlineBlock`
* `InlineListItem`
* `Flex`
* `Row`
* `Column`
* `Table`
* `InlineTable`
* `TableRowGroup`
* `TableHeaderGroup`
* `TableFooterGroup`
* `TableRow`
* `TableCell`
* `TableColumnGroup`
* `TableColumn`
* `TableCaption`

# Install

Install with `npm`:

`npm install --save glamorous-jsxstyle`

This also has peer dependencies of `react` and `glamor`, so install those too:

`npm install --save react glamor`


You can then use one of the module formats:

* `main`: dist/glamorous-jsxstyle.cjs.js - exports itself as a CommonJS module
* `global`: dist/glamorous-jsxstyle.umd.js and dist/glamorous-jsxstyle.umd.min.js  - exports itself as a `umd` module.
* `jsnext:main` and `module`: dist/glamorous-jsxstyle.es.js - exports itself using the ES modules specification, you'll need to configure `webpack` to make use of this file.

# Usage

To use this module via CommonJS:

```js
const { View } = require('glamorous-jsxstyle')
```

If you're transpiling (and/or using the `jsnext:main`):

```js
import { Flex, Block } from 'glamorous-jsxstyle'
```

An example use case

```js
import React  from 'react'
import { Flex, InlineBlock } from 'glamorous-jsxstyle'

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Flex>
          Content in a `div` with `display: 'flex'`
        </Flex>

        <InlineBlock>
          Content in a `div` with `display: 'inline-block'`
        </InlineBlock>

        // add more styles as you like
        <InlineBlock style={{color: 'blue'}}>
          Blue content in a `div` with `display: 'inline-block'`
        </InlineBlock>
      </div>
    )
  }
}

```

You can also extend the `glamorous-jsxstyle` components using `glamorous` with additional style objects:

```js
const headerBG = { background: '#ddd' }
const headerCell = { minWidth: '200px' }

// use `glamorous` dynamic functions to style relative to `props`
// alternate gray and white
const alternatingRows = props => ({ background: props.rowNumber % 2 ? 'gray' : 'white' })

// underline every 5th row
const everyFifth = props => ({ textDecoration: props.rowNumber % 5 ? 'underline' : '' })

// extend with 1 or more style objects
const HeaderRow = glamorous(TableRow)(headerBG)
const HeaderCell = glamorous(TableCell)(headerCell, centeredText)
const BodyRow = glamorous(TableRow)(alternatingRows, everyFifth)

export default () => (
  <div>
    <HeaderRow>
      <HeaderCell>Heading 1</HeaderCell>
      <HeaderCell>Heading 2</HeaderCell>
      <HeaderCell>Heading 3</HeaderCell>
    </HeaderRow>
  </div>
)
```

[See an example of a `table` made with `glamorous-jsxstyle` here](https://glamorous-jsxstyle-table-gbivoatqvy.now.sh).

---

© 2017 Paul Molluzzo

MIT
