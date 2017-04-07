import glamorous from 'glamorous'

// A <div>
export const View = glamorous.div()

// Blocks
export const Block = glamorous.div({display: 'block'})
export const InlineBlock = glamorous.div({display: 'inline-block'})
export const InlineListItem = glamorous.div({display: 'inline-list-item'})

// Flex
export const Flex = glamorous.div({display: 'flex'})
export const Row = glamorous.div({display: 'flex', flexDirection: 'row'})
export const Column = glamorous.div({display: 'flex', flexDirection: 'column'})

// Tables
export const Table = glamorous.div({display: 'table'})
export const InlineTable = glamorous.div({display: 'inline-table'}) // Behaves like a <table> HTML element, but as an inline box
export const TableRowGroup = glamorous.div({display: 'table-row-group'}) // These elements behave like <tbody> HTML elements
export const TableHeaderGroup = glamorous.div({display: 'table-header-group'}) // These elements behave like <thead> HTML elements.
export const TableFooterGroup = glamorous.div({display: 'table-footer-group'}) // These elements behave like <tfoot> HTML elements.
export const TableRow = glamorous.div({display: 'table-row'}) // These elements behave like <tr> HTML elements.
export const TableCell = glamorous.div({display: 'table-cell'}) // These elements behave like <td> HTML elements.
export const TableColumnGroup = glamorous.div({display: 'table-column-group'}) // These elements behave like <colgroup> HTML elements.
export const TableColumn = glamorous.div({display: 'table-column'}) // These elements behave like <col> HTML elements.
export const TableCaption = glamorous.div({display: 'table-caption'}) // These elements behave like <caption> HTML elements.
