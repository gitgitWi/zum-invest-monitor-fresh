export interface Treemap$Sector$RealtimeApi {
  industryId: number;
  industryName: string;
  stocks: Treemap$Stock$RealtimeApi[];
  stocksNotEmpty: boolean;
}

export interface Treemap$Stock$RealtimeApi {
  stockId: string;
  stockName: string;
  description: string;
  currentPrice: number;
  fluctuationPrice: number;
  fluctuationRate: number;
  tradingVolume: number;
  totalValue: number;
}
