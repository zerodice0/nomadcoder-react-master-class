import { BrowserRouter, Route, Routes } from "react-router-dom";

import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />} />
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
