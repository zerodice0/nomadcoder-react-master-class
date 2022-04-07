import { useParams } from "react-router";

const Coin = () => {
  const { coinId } = useParams<"coinId">();
  return <h1>Coin: {coinId}</h1>;
};

export default Coin;
