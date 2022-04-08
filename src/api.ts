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

export const fetchCoinHistory = async (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 30;

  return fetch(
    `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then(response => response.json());
};
