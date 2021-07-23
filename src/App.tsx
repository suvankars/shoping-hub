import Home from "./pages/home/Homepage";
import { Route, Switch } from "react-router";

import ShopPage from "./pages/shop/shoppage";
import styled from "styled-components";
import Header from "./components/Header";
import Auth from "./pages/authentication/auth";
import { auth } from "./firebase/firebase.utils";
import React, { useEffect, useState } from "react";
interface IUser {
  currentUser: any;
}

export const App = () => {
  const [currentUser, setCurrentUser] = useState<IUser>({ currentUser: null });

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser({ currentUser: user });
    });
    console.log(currentUser);
  }, []);

  return (
    <AppWraper>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signin">
          <Auth currentUser={currentUser}/>
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

  * {
    box-sizing: border-box;
  }
`;

export default App;
