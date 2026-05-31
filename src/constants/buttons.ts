export type ButtonKind = 'number' | 'operator' | 'utility' | 'equals' | 'danger'

export type CalculatorButtonDef = {
  label: string
  value: string
  kind: ButtonKind
}

export const CALCULATOR_BUTTONS: CalculatorButtonDef[] = [
  // Row 1
  { label: '7', value: '7', kind: 'number' },
  { label: '8', value: '8', kind: 'number' },
  { label: '9', value: '9', kind: 'number' },
  { label: '÷', value: 'DIVIDE', kind: 'operator' },
  // Row 2
  { label: '4', value: '4', kind: 'number' },
  { label: '5', value: '5', kind: 'number' },
  { label: '6', value: '6', kind: 'number' },
  { label: '×', value: 'MULTIPLY', kind: 'operator' },
  // Row 3
  { label: '1', value: '1', kind: 'number' },
  { label: '2', value: '2', kind: 'number' },
  { label: '3', value: '3', kind: 'number' },
  { label: '-', value: 'SUBTRACT', kind: 'operator' },
  // Row 4
  { label: '0', value: '0', kind: 'number' },
  { label: '.', value: '.', kind: 'utility' },
  { label: '+/-', value: 'TOGGLE_SIGN', kind: 'utility' },
  { label: '+', value: 'ADD', kind: 'operator' },
  // Row 5
  { label: 'C', value: 'CLEAR', kind: 'danger' },
  { label: '%', value: 'MODULO', kind: 'utility' },
  { label: '=', value: 'EQUALS', kind: 'equals' },
]
