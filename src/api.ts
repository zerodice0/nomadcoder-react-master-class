export const fetchCoins = async () =>
  fetch("https://api.coinpaprika.com/v1/coins").then(response =>
    response.json()
  );

export const fetchCoinInformation = async (coinId: string) =>
  fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/`).then(response =>
    response.json()
  );

export const fetchCoinTickers = async (coinId: string) =>
  fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}/`).then(response =>
    response.json()
  );
