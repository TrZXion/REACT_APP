import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles.scss";

import CategoryBar from "./components/CategoryBar";
import CategoryPage from "./pages/CategoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import store from "./store";

function AboutPage() {
  return (
    <>
      <div>About</div>
    </>
  );
}

// 1. Define context
// 2. Give some data to it
// 3. Subscribe to that data from any child

// Advantages of redux over context
// 1. Too much boiler plate
// 2. Not optimised in large scale
// 3. Does not enforce any standard way to store and manipulate state

// redux -> state management
// react redux -> bindings for react and redux

// AppContext
// 1. user
// 2. products
// 3. category
// 4. cart (cart.isOpen)

// CartContext -> isCartOpen, cartItems
// ProductsContext
// CategoriesContext
//
// <CategoryBar />
// const { category } = useContext(AppContext);

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/category">
              <CategoryBar />
              <Switch>
                <Route
                  exact
                  path="/category/:categoryName"
                  component={CategoryPage}
                />
                <Route
                  exact
                  path="/category/products/:productId"
                  component={ProductPage}
                />
              </Switch>
            </Route>

            <Route exact path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
