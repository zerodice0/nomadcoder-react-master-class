// import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useQuery } from "react-query";
import {
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
  // matchPath,
  // PathMatch,
} from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { fetchCoinInformation, fetchCoinTickers } from "@/api";

import Chart from "./Chart";
import Price from "./Price";

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Navigation = styled.div`
  height: 3rem;
  display: flex;
  justify-content: align-items;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.boxColor};
  color: ${props => props.theme.boxColor};
`;

interface RouteState {
  name: string;
  id: string;
}

interface InformationData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.boxColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direcation: column;
  align-items: center;

  span: first-child {
    font-size: 10px;
    font-wegith: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
  color: ${props => props.theme.boxColor};
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${props => props.theme.boxColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${props =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

const Coin = () => {
  // const [loading, setLoading] = useState(true);
  const location = useLocation();
  const state = location.state as RouteState;

  const { coinId } = useParams<"coinId">();
  // const [price, setPrice] = useState<PriceData>();
  // const [info, setInfo] = useState<InformationData>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: informationData } =
    useQuery<InformationData>(["info", coinId], () =>
      fetchCoinInformation(coinId ?? "")
    );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["ticker", coinId],
    () => fetchCoinTickers(coinId ?? ""),
    {
      refetchInterval: 5000,
    }
  );

  // useEffect(() => {
  //   (async () => {
  //     const coinInformationResponse = await fetch(
  //       `https://api.coinpaprika.com/v1/coins/${state?.id ?? coinId}/`
  //     );
  //     const coinPriceResponse = await fetch(
  //       `https://api.coinpaprika.com/v1/tickers/${state?.id ?? coinId}/`
  //     );
  //     const coinInformationData = await coinInformationResponse.json();
  //     const coinPriceData = await coinPriceResponse.json();
  //     // console.log(coinInformationData);
  //     setInfo(coinInformationData);
  //     // console.log(coinPriceData);
  //     setPrice(coinPriceData);
  //     setLoading(false);
  //   })();
  // }, [coinId]);

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name
            ? state.name
            : infoLoading || tickersLoading
            ? "Loading..."
            : informationData?.name}
        </title>
      </Helmet>
      <Link to="/">
        <Navigation>&larr; return to coin list</Navigation>
      </Link>
      <Header>
        <Title>
          {state?.name
            ? state.name
            : infoLoading || tickersLoading
            ? "Loading..."
            : informationData?.name}
        </Title>
      </Header>
      {infoLoading || tickersLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{informationData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${informationData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>{tickersData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{informationData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Routes>
            <Route path="price" element={<Price />} />
            <Route path="chart" element={<Chart coinId={coinId ?? ""} />} />
          </Routes>
        </>
      )}
    </Container>
  );
};

export default Coin;
