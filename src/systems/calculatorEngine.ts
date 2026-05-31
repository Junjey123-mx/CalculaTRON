import {
  DEFAULT_DISPLAY,
  ERROR_MESSAGE,
  MAX_DISPLAY_LENGTH,
  MAX_DISPLAY_VALUE,
} from '../constants/calculatorLimits'

import { OPERATIONS, type Operation } from '../constants/operations'

export function createInitialDisplay() {
  return DEFAULT_DISPLAY
}

export function normalizeDisplay(value: string) {
  if (!value || value === ERROR_MESSAGE) {
    return DEFAULT_DISPLAY
  }
  return value
}

export function appendDigit(display: string, digit: string) {
  if (!/^[0-9]$/.test(digit)) {
    return display
  }
  if (display === ERROR_MESSAGE) {
    return digit
  }
  if (display === DEFAULT_DISPLAY) {
    return digit
  }
  if (display.length >= MAX_DISPLAY_LENGTH) {
    return display
  }
  return display + digit
}

export function appendDecimal(display: string) {
  if (display === ERROR_MESSAGE) {
    return DEFAULT_DISPLAY + '.'
  }
  if (display.includes('.')) {
    return display
  }
  if (display.length >= MAX_DISPLAY_LENGTH) {
    return display
  }
  return display + '.'
}

export function toggleSign(display: string) {
  if (display === ERROR_MESSAGE) {
    return ERROR_MESSAGE
  }
  if (display === DEFAULT_DISPLAY || display === '0.') {
    return display
  }
  if (display.startsWith('-')) {
    return display.slice(1)
  }
  if (display.length >= MAX_DISPLAY_LENGTH) {
    return display
  }
  return '-' + display
}

export function isOverflow(value: number) {
  return value > MAX_DISPLAY_VALUE
}

export function isInvalidNegative(value: number) {
  return value < 0
}

export function formatResult(value: number) {
  if (!Number.isFinite(value)) {
    return ERROR_MESSAGE
  }
  if (value < 0) {
    return ERROR_MESSAGE
  }
  if (value > MAX_DISPLAY_VALUE) {
    return ERROR_MESSAGE
  }
  if (Number.isInteger(value)) {
    const str = String(value)
    return str.length > MAX_DISPLAY_LENGTH ? ERROR_MESSAGE : str
  }
  const integerPart = Math.trunc(value).toString()
  const availableDecimals = MAX_DISPLAY_LENGTH - integerPart.length - 1
  if (availableDecimals <= 0) {
    return ERROR_MESSAGE
  }
  const formatted = value.toFixed(availableDecimals)
  const trimmed = formatted.replace(/0+$/, '').replace(/\.$/, '')
  return trimmed.length > MAX_DISPLAY_LENGTH ? ERROR_MESSAGE : trimmed
}

export function calculate(firstValue: number, secondValue: number, operation: Operation) {
  if (operation === OPERATIONS.DIVIDE) {
    return secondValue === 0 ? ERROR_MESSAGE : formatResult(firstValue / secondValue)
  }
  if (operation === OPERATIONS.MODULO) {
    return secondValue === 0 ? ERROR_MESSAGE : formatResult(firstValue % secondValue)
  }
  if (operation === OPERATIONS.ADD) {
    return formatResult(firstValue + secondValue)
  }
  if (operation === OPERATIONS.SUBTRACT) {
    return formatResult(firstValue - secondValue)
  }
  if (operation === OPERATIONS.MULTIPLY) {
    return formatResult(firstValue * secondValue)
  }
  return ERROR_MESSAGE
}
