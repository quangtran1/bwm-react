import React, { Component } from "react";
import { Header } from "./shared/Header";
import RentalListing from "./components/rental/rental-listing/RentalListing";
import RentalDetail from "./components/rental/rental-detail/RentalDetail";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

const store = require("./reducers").init();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Route exact path="/" render={() => <Redirect to="/rentals" />} />
              <Route path="/rentals" exact component={RentalListing} />
              <Route path="/rentals/:id" exact component={RentalDetail} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
