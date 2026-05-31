import type { Meta, StoryObj } from '@storybook/react-vite'

import { Keypad } from '../components/calculator/Keypad'

const noop = (value: string) => {
  void value
}

const meta: Meta<typeof Keypad> = {
  title: 'CalculaTRON/Keypad',
  component: Keypad,
}

export default meta

type Story = StoryObj<typeof Keypad>

export const FullLayout: Story = {
  args: { onButtonPress: noop },
}
