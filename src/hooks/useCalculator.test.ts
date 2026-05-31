import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useCalculator } from './useCalculator'

describe('useCalculator', () => {
  it('inicia en display 0 y status READY', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.display).toBe('0')
    expect(result.current.status).toBe('READY')
  })

  it('concatena dígitos correctamente', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.pressButton('1') })
    act(() => { result.current.pressButton('2') })
    act(() => { result.current.pressButton('3') })
    expect(result.current.display).toBe('123')
  })

  it('suma básica: 12 + 7 = 19', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.pressButton('1') })
    act(() => { result.current.pressButton('2') })
    act(() => { result.current.pressButton('+') })
    act(() => { result.current.pressButton('7') })
    act(() => { result.current.pressButton('=') })
    expect(result.current.display).toBe('19')
  })

  it('operación subsiguiente calcula inmediatamente y queda en PENDING', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.pressButton('1') })
    act(() => { result.current.pressButton('2') })
    act(() => { result.current.pressButton('+') })
    act(() => { result.current.pressButton('7') })
    act(() => { result.current.pressButton('+') })
    expect(result.current.display).toBe('19')
    expect(result.current.status).toBe('PENDING')
  })

  it('C resetea display a 0 y status a READY', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.pressButton('1') })
    act(() => { result.current.pressButton('2') })
    act(() => { result.current.pressButton('3') })
    act(() => { result.current.pressButton('C') })
    expect(result.current.display).toBe('0')
    expect(result.current.status).toBe('READY')
  })

  it('resta negativa muestra ERROR y status ERROR', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.pressButton('5') })
    act(() => { result.current.pressButton('-') })
    act(() => { result.current.pressButton('8') })
    act(() => { result.current.pressButton('=') })
    expect(result.current.display).toBe('ERROR')
    expect(result.current.status).toBe('ERROR')
  })

  it('punto decimal: 1.5 + 2 = 3.5', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.pressButton('1') })
    act(() => { result.current.pressButton('.') })
    act(() => { result.current.pressButton('5') })
    act(() => { result.current.pressButton('+') })
    act(() => { result.current.pressButton('2') })
    act(() => { result.current.pressButton('=') })
    expect(result.current.display).toBe('3.5')
  })

  it('división entre cero muestra ERROR', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.pressButton('5') })
    act(() => { result.current.pressButton('/') })
    act(() => { result.current.pressButton('0') })
    act(() => { result.current.pressButton('=') })
    expect(result.current.display).toBe('ERROR')
    expect(result.current.status).toBe('ERROR')
  })

  it('+/- cambia el signo del display', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.pressButton('8') })
    act(() => { result.current.pressButton('+/-') })
    expect(result.current.display).toBe('-8')
    act(() => { result.current.pressButton('+/-') })
    expect(result.current.display).toBe('8')
  })
})
