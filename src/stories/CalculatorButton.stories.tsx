import type { Meta, StoryObj } from '@storybook/react-vite'

import { CalculatorButton } from '../components/calculator/CalculatorButton'

const noop = (value: string) => {
  void value
}

const meta: Meta<typeof CalculatorButton> = {
  title: 'CalculaTRON/CalculatorButton',
  component: CalculatorButton,
  args: { onPress: noop },
}

export default meta

type Story = StoryObj<typeof CalculatorButton>

export const NumberButton: Story = {
  args: { label: '7', value: '7', kind: 'number' },
}

export const OperatorButton: Story = {
  args: { label: '+', value: '+', kind: 'operator' },
}

export const EqualsButton: Story = {
  args: { label: '=', value: '=', kind: 'equals' },
}

export const DangerButton: Story = {
  args: { label: 'C', value: 'C', kind: 'danger' },
}

export const UtilityButton: Story = {
  args: { label: '+/-', value: '+/-', kind: 'utility' },
}
