import { Heading, HeadingProps } from '@gustavo-rodrigues-ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: "Example Heading"
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading'
  },
  parameters: {
    docs: {
      description: {
        story: "Por padrão o heading sempre será um `h2`, mas você pode alterar o elemento HTML que ele renderiza utilizando a propriedade `as`."
      }
    }
  }
} 