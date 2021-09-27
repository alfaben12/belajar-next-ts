export interface MarketResponse {
    data: Data[]
    timestamp: number
}

export interface Data {
    exchangeId: string
    baseId: string
    quoteId: string
    baseSymbol: string
    quoteSymbol: string
    volumeUsd24Hr: string
    priceUsd: string
    volumePercent: string
}
