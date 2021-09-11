import React from "react";
import CreateWList from "./components/CreateWList";
import StockWatchList from "./components/StockWatchList";
import ManageWatchLists from "./components/ManageWatchLists";
import "./styles/styles.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <>
    <Router>
      <nav
        className="navbar navbar-expand-md navbar-light border border-rounded mx-4 my-4 pl-5"
        style={{
          fontSize: "1.5em",
          backgroundColor: "lightgrey",
        }}
      >
        <button
          className="navbar-toggler d-lg-none mx-3"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact={true}
                to="/"
                activeClassName="active-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/CreateWlist"
                activeClassName="active"
              >
                Create New Watch List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/ManageWatchLists"
                activeClassName="active"
              >
                Manage Watch Lists
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={StockWatchList} />
      <Route path="/CreateWList" component={CreateWList} />
      <Route path="/ManageWatchLists" component={ManageWatchLists} />
    </Router>
    <footer className="footer-custom">Copyright 2021 Eric Miner</footer>
  </>
);
export default App;
