import { create } from "zustand";
import axios from "axios";

type Crypto = {
    id: string;
    name: string;
    symbol: string;
    price: number;
    change: number;
    image: string;
    chartData: { time: string; price: number }[];
};

type CryptoState = {
    cryptos: Crypto[];
    fetchCryptos: () => void;
};

export const useCryptoStore = create<CryptoState>((set) => ({
    cryptos: [],
    fetchCryptos: async () => {
        try {
            const res = await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets",
                {
                    params: {
                        vs_currency: "usd",
                        order: "market_cap_desc",
                        per_page: 8,
                        page: 1,
                        sparkline: true,
                    },
                }
            );

            const cryptos = res.data.map((coin: any) => ({
                id: coin.id,
                name: coin.name,
                symbol: coin.symbol.toUpperCase(),
                price: coin.current_price,
                change: coin.price_change_percentage_24h,
                image: coin.image,
                chartData: coin.sparkline_in_7d.price.map((price: number, i: number) => ({
                    time: `T ${i}`,
                    price,
                })),
            }));

            set({ cryptos });
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    },
}));
