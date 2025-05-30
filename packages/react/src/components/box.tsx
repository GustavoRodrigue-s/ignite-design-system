import { ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: 16,
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export type BoxProps = React.ComponentProps<typeof Box> & {
  as?: ElementType
}
