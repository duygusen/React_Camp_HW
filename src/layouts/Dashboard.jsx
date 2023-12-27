import React from "react";
import "semantic-ui-css/semantic.min.css";
import Navi from "./Navi";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
