import { OPERATIONS, type Operation } from './operations'

export type CalculatorButtonKind = 'number' | 'operator' | 'equals' | 'danger' | 'utility'

export type CalculatorButtonConfig = {
  label: string
  value: string
  kind: CalculatorButtonKind
  operation?: Operation
}

export const CALCULATOR_BUTTONS: CalculatorButtonConfig[] = [
  // Row 1
  { label: '7', value: '7', kind: 'number' },
  { label: '8', value: '8', kind: 'number' },
  { label: '9', value: '9', kind: 'number' },
  { label: '÷', value: '/', kind: 'operator', operation: OPERATIONS.DIVIDE },
  // Row 2
  { label: '4', value: '4', kind: 'number' },
  { label: '5', value: '5', kind: 'number' },
  { label: '6', value: '6', kind: 'number' },
  { label: '×', value: '*', kind: 'operator', operation: OPERATIONS.MULTIPLY },
  // Row 3
  { label: '1', value: '1', kind: 'number' },
  { label: '2', value: '2', kind: 'number' },
  { label: '3', value: '3', kind: 'number' },
  { label: '-', value: '-', kind: 'operator', operation: OPERATIONS.SUBTRACT },
  // Row 4
  { label: '0', value: '0', kind: 'number' },
  { label: '.', value: '.', kind: 'utility' },
  { label: '+/-', value: '+/-', kind: 'utility' },
  { label: '+', value: '+', kind: 'operator', operation: OPERATIONS.ADD },
  // Row 5
  { label: 'C', value: 'C', kind: 'danger' },
  { label: '%', value: '%', kind: 'operator', operation: OPERATIONS.MODULO },
  { label: '=', value: '=', kind: 'equals' },
]
