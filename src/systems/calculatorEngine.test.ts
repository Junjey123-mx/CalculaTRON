import { describe, expect, it } from 'vitest'

import { OPERATIONS } from '../constants/operations'
import { appendDecimal, appendDigit, calculate, formatResult, toggleSign } from './calculatorEngine'

describe('appendDigit', () => {
  it('ignora el décimo carácter', () => {
    expect(appendDigit('123456789', '0')).toBe('123456789')
  })

  it('agrega dígito normal', () => {
    expect(appendDigit('12', '3')).toBe('123')
  })

  it('reemplaza 0 inicial por dígito', () => {
    expect(appendDigit('0', '5')).toBe('5')
  })
})

describe('appendDecimal', () => {
  it('no agrega punto si ya existe uno', () => {
    expect(appendDecimal('12.3')).toBe('12.3')
  })

  it('respeta el límite de 9 caracteres', () => {
    expect(appendDecimal('123456789')).toBe('123456789')
  })

  it('agrega punto a número corto', () => {
    expect(appendDecimal('12')).toBe('12.')
  })

  it('inicia desde 0. cuando display es ERROR', () => {
    expect(appendDecimal('ERROR')).toBe('0.')
  })
})

describe('toggleSign', () => {
  it('agrega signo negativo', () => {
    expect(toggleSign('8')).toBe('-8')
  })

  it('quita signo negativo', () => {
    expect(toggleSign('-8')).toBe('8')
  })

  it('respeta el límite: 123456789 no puede volverse -123456789', () => {
    expect(toggleSign('123456789')).toBe('123456789')
  })

  it('12345678 sí puede volverse -12345678', () => {
    expect(toggleSign('12345678')).toBe('-12345678')
  })

  it('ERROR permanece ERROR', () => {
    expect(toggleSign('ERROR')).toBe('ERROR')
  })
})

describe('calculate', () => {
  it('resta negativa devuelve ERROR', () => {
    expect(calculate(5, 8, OPERATIONS.SUBTRACT)).toBe('ERROR')
  })

  it('overflow devuelve ERROR', () => {
    expect(calculate(999999999, 1, OPERATIONS.ADD)).toBe('ERROR')
  })

  it('multiplicación válida', () => {
    expect(calculate(12, 3, OPERATIONS.MULTIPLY)).toBe('36')
  })

  it('división larga no supera 9 caracteres', () => {
    const result = calculate(22, 7, OPERATIONS.DIVIDE)
    expect(result.length).toBeLessThanOrEqual(9)
    expect(result).toBe('3.1428571')
  })

  it('división entre cero devuelve ERROR', () => {
    expect(calculate(5, 0, OPERATIONS.DIVIDE)).toBe('ERROR')
  })

  it('módulo válido', () => {
    expect(calculate(10, 3, OPERATIONS.MODULO)).toBe('1')
  })

  it('módulo entre cero devuelve ERROR', () => {
    expect(calculate(10, 0, OPERATIONS.MODULO)).toBe('ERROR')
  })

  it('suma básica', () => {
    expect(calculate(8, 2, OPERATIONS.ADD)).toBe('10')
  })

  it('división exacta', () => {
    expect(calculate(8, 2, OPERATIONS.DIVIDE)).toBe('4')
  })
})

describe('formatResult', () => {
  it('limpia ceros decimales de número entero', () => {
    expect(formatResult(2.0)).toBe('2')
  })

  it('conserva decimales significativos', () => {
    expect(formatResult(1.5)).toBe('1.5')
  })

  it('devuelve ERROR para infinito', () => {
    expect(formatResult(Infinity)).toBe('ERROR')
  })

  it('devuelve ERROR para valor negativo', () => {
    expect(formatResult(-1)).toBe('ERROR')
  })
})
