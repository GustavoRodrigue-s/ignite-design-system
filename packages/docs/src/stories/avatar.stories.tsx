import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@gustavo-rodrigues-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/GustavoRodrigue-s.png',
    alt: 'Diego Fernandes',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}