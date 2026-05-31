export function useCalculator() {
  return {
    display: '0',
    status: 'READY',
    handleButtonPress: (value: string) => {
      void value
    },
  }
}
