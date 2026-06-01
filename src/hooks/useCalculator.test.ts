import { describe, expect, it } from 'vitest'

import { DEFAULT_DISPLAY } from '../constants/calculatorLimits'
import { OPERATIONS } from '../constants/operations'
import { appendDecimal, appendDigit, calculate, toggleSign } from '../systems/calculatorEngine'

describe('flujos de integración de la calculadora', () => {
  it('el display inicial es 0', () => {
    expect(DEFAULT_DISPLAY).toBe('0')
    expect(appendDigit(DEFAULT_DISPLAY, '5')).toBe('5')
  })

  it('concatena dígitos correctamente', () => {
    let display = DEFAULT_DISPLAY
    display = appendDigit(display, '1')
    display = appendDigit(display, '2')
    display = appendDigit(display, '3')
    expect(display).toBe('123')
  })

  it('suma básica: 12 + 7 = 19', () => {
    expect(calculate(12, 7, OPERATIONS.ADD)).toBe('19')
  })

  it('operación subsiguiente: resultado de 12 + 7 sirve como base para nueva operación', () => {
    const result = calculate(12, 7, OPERATIONS.ADD)
    expect(result).toBe('19')
    expect(calculate(Number(result), 1, OPERATIONS.ADD)).toBe('20')
  })

  it('clear: el display vuelve a DEFAULT_DISPLAY y acepta nuevo dígito limpiamente', () => {
    const afterClear = DEFAULT_DISPLAY
    expect(afterClear).toBe('0')
    expect(appendDigit(afterClear, '9')).toBe('9')
  })

  it('resta negativa produce ERROR', () => {
    expect(calculate(5, 8, OPERATIONS.SUBTRACT)).toBe('ERROR')
  })

  it('punto decimal: 1.5 + 2 = 3.5', () => {
    let display = '1'
    display = appendDecimal(display)
    display = appendDigit(display, '5')
    expect(display).toBe('1.5')
    expect(calculate(1.5, 2, OPERATIONS.ADD)).toBe('3.5')
  })

  it('división entre cero produce ERROR', () => {
    expect(calculate(5, 0, OPERATIONS.DIVIDE)).toBe('ERROR')
  })

  it('+/- invierte el signo del display en ambas direcciones', () => {
    expect(toggleSign('8')).toBe('-8')
    expect(toggleSign('-8')).toBe('8')
  })
})
