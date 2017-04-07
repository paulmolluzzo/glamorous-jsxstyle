import glamorous from 'glamorous'

// A <div>
const View = glamorous.div()

// Blocks
const Block = glamorous.div({display: 'block'})
const InlineBlock = glamorous.div({display: 'inline-block'})
const InlineListItem = glamorous.div({display: 'inline-list-item'})

// Flex
const Flex = glamorous.div({display: 'flex'})
const Row = glamorous.div({display: 'flex', flexDirection: 'row'})
const Column = glamorous.div({display: 'flex', flexDirection: 'column'})

// Tables
const Table = glamorous.div({display: 'table'})
const InlineTable = glamorous.div({display: 'inline-table'}) // Behaves like a <table> HTML element, but as an inline box
const TableRowGroup = glamorous.div({display: 'table-row-group'}) // These elements behave like <tbody> HTML elements
const TableHeaderGroup = glamorous.div({display: 'table-header-group'}) // These elements behave like <thead> HTML elements.
const TableFooterGroup = glamorous.div({display: 'table-footer-group'}) // These elements behave like <tfoot> HTML elements.
const TableRow = glamorous.div({display: 'table-row'}) // These elements behave like <tr> HTML elements.
const TableCell = glamorous.div({display: 'table-cell'}) // These elements behave like <td> HTML elements.
const TableColumnGroup = glamorous.div({display: 'table-column-group'}) // These elements behave like <colgroup> HTML elements.
const TableColumn = glamorous.div({display: 'table-column'}) // These elements behave like <col> HTML elements.
const TableCaption = glamorous.div({display: 'table-caption'}) // These elements behave like <caption> HTML elements.

export default {
  View,
  Block,
  InlineBlock,
  InlineListItem,
  Flex,
  Row,
  Column,
  Table,
  InlineTable,
  TableRowGroup,
  TableHeaderGroup,
  TableFooterGroup,
  TableRow,
  TableCell,
  TableColumnGroup,
  TableColumn,
  TableCaption
}
