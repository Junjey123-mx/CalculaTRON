import type { Meta, StoryObj } from '@storybook/react-vite'

import { StatusBar } from '../components/calculator/StatusBar'

const meta: Meta<typeof StatusBar> = {
  title: 'CalculaTRON/StatusBar',
  component: StatusBar,
}

export default meta

type Story = StoryObj<typeof StatusBar>

export const Ready: Story = {
  args: { status: 'READY' },
}

export const Input: Story = {
  args: { status: 'INPUT' },
}

export const Pending: Story = {
  args: { status: 'PENDING' },
}

export const Result: Story = {
  args: { status: 'RESULT' },
}

export const ErrorStatus: Story = {
  args: { status: 'ERROR' },
}
