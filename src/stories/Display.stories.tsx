import type { Meta, StoryObj } from '@storybook/react-vite'

import { Display } from '../components/calculator/Display'

const meta: Meta<typeof Display> = {
  title: 'CalculaTRON/Display',
  component: Display,
}

export default meta

type Story = StoryObj<typeof Display>

export const Normal: Story = {
  args: {
    value: '123456789',
    isError: false,
  },
}

export const ErrorDisplay: Story = {
  args: {
    value: 'ERROR',
    isError: true,
  },
}
