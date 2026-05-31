export const OPERATIONS = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
  DIVIDE: 'DIVIDE',
  MODULO: 'MODULO',
} as const

export type Operation = typeof OPERATIONS[keyof typeof OPERATIONS]
