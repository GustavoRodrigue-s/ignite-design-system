import { Box, Text, BoxProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando componente Box</Text>
      </>
    )
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

