import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calculator } from '../components/calculator/Calculator'

const meta: Meta<typeof Calculator> = {
  title: 'CalculaTRON/Calculator',
  component: Calculator,
}

export default meta

type Story = StoryObj<typeof Calculator>

export const Default: Story = {}
