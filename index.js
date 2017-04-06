import glamorous from 'glamorous'

const View = glamorous.div()
const Block = glamorous.div({display: 'block'})
const InlineBlock = glamorous.div({display: 'inline-block'})
const Flex = glamorous.div({display: 'flex'})
const Row = glamorous.div({display: 'flex', flexDirection: 'row'})
const Column = glamorous.div({display: 'flex', flexDirection: 'column'})

export default {
  View,
  Block,
  InlineBlock,
  Flex,
  Row,
  Column
}
