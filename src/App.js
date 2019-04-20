import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";
import globalStyle from "./globalStyles";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <globalStyle>
          <Router>
            <main>
              <Route exact={true} path={"/"} component={Home} />
              <Route path={"/details/:movieId"} component={Detail} />
            </main>
          </Router >
        </globalStyle>
      </ApolloProvider >
    );
  }
}

export default App;