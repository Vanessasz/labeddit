import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PaginaInicial from "../screens/PaginaInicial/PaginaInicial";
import PaginaLogin from "../screens/PaginaLogin/PaginaLogin";
import PaginaPosts from "../screens/PaginaPosts/PaginaPosts";
import PaginaCadastro from "../screens/PaginaCadastro/PaginaCadastro";
import PaginaFeed from "../screens/PaginaFeed/PaginaFeed";
import Erro from "../screens/Erro/Erro";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PaginaInicial />
        </Route>
        <Route exact path="/login">
          <PaginaLogin />
        </Route>
        <Route exact path="/cadastro">
          <PaginaCadastro />
        </Route>
        <Route exact path="/feed">
          <PaginaFeed />
        </Route>
        <Route exact path="/posts/:id">
          <PaginaPosts />
        </Route>
        <Route>
          <Erro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
