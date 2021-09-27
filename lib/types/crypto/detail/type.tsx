export interface History {
    priceUsd: string
    time: number
}
export interface AssetResponse {
    data: History[]
    timestamp: number
}
