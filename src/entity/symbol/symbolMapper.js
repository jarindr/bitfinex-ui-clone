export default {
  tBTCUSD: 'BTC/USD'
}

export function splitSymbol (symbol) {
  return `${symbol.slice(1, 4)}/${symbol.slice(4, symbol.length)}`
}

export const precisionFixed = {
  tBTCUSD: 1,
  tETHUSD: 1
}
