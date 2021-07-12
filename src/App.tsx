import Home from "./pages/home/Homepage";
import { Route, Switch } from "react-router";

import ShopPage from "./pages/shop/shoppage";
import styled from "styled-components";
import Header from "./components/Header";

export const App = () => {
  return (
    <AppWraper>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </AppWraper>
  );
};

const AppWraper = styled.div`
  padding: 20px 60px;
  a {
    text-decoration: none;
    color: black;
  }
`;

export default App;
